import { getDatabase, ref, set } from "firebase/database";

let ms = 0;
let startTime;
let timerActive = false;

function startTimer() {
    ms = 0;
    startTime = new Date();
    timerActive = true
    timerLoop();
}

function stopTimer() {
    const endTime = new Date();
    timerActive = false;
    ms = endTime - startTime;
}

function timerLoop() {
    if (!timerActive) return;

    setTimeout(() => {
        ms = new Date() - startTime;
        timerLoop();
    }, 1)
}

function getFacesPosition(that) {
    let face;
    if (that.irbt_trials[that.section].trials[that.currentUserTrial]?.randomNo === 0) {
        face = "happy.jpg";
    } else {
        face = "sad.jpg";
    }
    that.leftFace = face;
    return face;
}

function getFacesPosition2(thiskeyword) {
    let that = thiskeyword;
    let face;
    if (that.irbt_trials[that.section].trials[that.currentUserTrial]?.randomNo === 0) {
        face = "sad.jpg";
    } else {
        face = "happy.jpg";
    }
    that.rightFace = face;
    return face;
}

const ibt_data = []

function handleCorrectAnswer(thiskeyword) {
    stopTimer();
    let that = thiskeyword;
    that.irbt_trials[that.section].trials[that.currentUserTrial].visibility = "none";
    that.irbt_trials[that.section].trials[that.currentUserTrial].ms = ms;
    document.querySelector(".irbt-wrong").style.display = "none"
    document.querySelector(".irbt-wrong-img").style.display = "none"
    document.querySelector(".irbt_star").style.display = "block"
    document.querySelector(".faceRight").style.display = "none"
    document.querySelector(".faceLeft").style.display = "none"
    setTimeout(function () {
        //Checking from trial to trial, once it reaches the end of the trials, increment the section
        if (that.currentUserTrial < Object.keys(that.irbt_trials[that.section].trials).length - 1) {
            that.currentUserTrial++;
            document.querySelector(".irbt_star").style.display = "none"
            startTimer();
            that.irbt_trials[that.section].trials[that.currentUserTrial].visibility = "block";
            document.querySelector(".faceRight").style.display = "block"
            document.querySelector(".faceLeft").style.display = "block"
        } else if (that.section + 1 !== that.irbt_trials.length) {
            document.querySelector(".irbt_star").style.display = "none"
            //Checking to see if the sections have all being exhausted, if so, store data to firebase
            that.testNotStarted = true;
            ibt_data[that.section] = that.irbt_trials[that.section].trials;
            // ibt_data[that.irbt_trials[that.section].section] = that.irbt_trials[that.section].trials;
            that.section++;
            that.currentUserTrial = 0;
        } else {

            // !Push data to be stored in firebase
            // console.log("enddd");


            ibt_data[that.section] = that.irbt_trials[that.section].trials;

            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();
            ibt_data.forEach((data, index) => {

                data.forEach((data, inner_index) => {
                    data.section = that.irbt_trials[index].section;
                    data.browser = navigator["userAgent"];
                    data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

                    //Creating a descriptions column for the data
                    if (index === 0) {
                        data.description = "Practice: clicks a happy face for an image of a white person, and a sad face for an image of a black person";
                    } else if (index === 1) {
                        data.description = "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
                    } else if (index === 2) {
                        data.description = "User clicks a sad face for an image of a white person, and a happy face for an image of a black person";
                    }
                    data.testType = "IBT";
                    data.stimulusOrder = inner_index + 1;
                    delete data.visibility;
                    delete data.randomNo;
                })

            })
            // console.log(ibt_data)
            
            that.$store.state.ibt_data = ibt_data;

            //Storing in firebase
            const db = getDatabase();

            set(ref(db, `IBT/IBT-${that.testType}/User-${that.$store.state.uid}`), {
                data: that.$store.state.ibt_data
            });

            that.$router.push(that.routeTo);
        }
    }, 1000)
}

function handleIncorrectAnswer(that) {
    document.querySelector(".irbt-wrong").style.display = "block";
    document.querySelector(".irbt-wrong-img").style.display = "block";
    setTimeout(function () {
        that.irbt_trials[that.section].trials[that.currentUserTrial].accuracy = 0;
        document.querySelector(".irbt-wrong").style.display = "none";
        document.querySelector(".irbt-wrong-img").style.display = "none";

    }, 1000)
}



function leftFaceAction(that) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial].emotion;
    // console.log(faceBeingShown)
    // console.log(faceBeingShown, " ", that.leftFace);
    if (faceBeingShown === that.leftFace) {
        handleCorrectAnswer(that);
    } else {
        handleIncorrectAnswer(that);
    }
}

function rightFaceAction(that) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial].emotion;
    // console.log(faceBeingShown)
    // console.log(faceBeingShown, " ", that.rightFace);
    if (faceBeingShown === that.rightFace) {
        // console.log("right is answer");
        handleCorrectAnswer(that);
    } else {
        handleIncorrectAnswer(that);
    }
}

export { getFacesPosition, getFacesPosition2, handleCorrectAnswer, handleIncorrectAnswer, leftFaceAction, rightFaceAction, stopTimer, startTimer }