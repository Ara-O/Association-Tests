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

//If the random number is 0, the left face will be that face
//If not, the right face will be the face shown
function getFacesPosition(that, face_0, face_1) {
    let face;
    if (that.irbt_trials[that.section].trials[that.currentUserTrial]?.randomNo === 0) {
        face = face_0;
    } else {
        face = face_1;
    }
    that.leftFace = face;
    return face;
}

function getFacesPosition2(thiskeyword, face_0, face_1) {
    let that = thiskeyword;
    let face;
    if (that.irbt_trials[that.section].trials[that.currentUserTrial]?.randomNo === 0) {
        face = face_1;
    } else {
        face = face_0;
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
                    if (that.testType === "Black_White") {
                        if (index === 0) {
                            data.description = "Practice: clicks a happy face for an image of a white person, and a sad face for an image of a black person";
                        } else if (index === 1) {
                            data.description = "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
                        } else if (index === 2) {
                            data.description = "User clicks a sad face for an image of a white person, and a happy face for an image of a black person";
                        }
                        data.testType = "IBT Black-White";
                    } else if (that.test === "Gender_Toy") {
                        if (index === 0) {
                            data.description = "Practice: clicks the male face for an image of a male toy, and the female face for an image of a female toy";
                        } else if (index === 1) {
                            data.description = "User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
                        } else if (index === 2) {
                            data.description = "User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
                        }
                        data.testType = "IBT Gender-Toy";
                    }
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



function leftFaceAction(that, objectKey) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial][objectKey];
    // console.log(faceBeingShown)
    // console.log(faceBeingShown, " ", that.leftFace);
    if (faceBeingShown === that.leftFace) {
        handleCorrectAnswer(that);
    } else {
        handleIncorrectAnswer(that);
    }
}

function rightFaceAction(that, objectKey) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial][objectKey];
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