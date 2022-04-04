
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
    if (that.irbt_trials[that.currentUserTrial]?.randomNo === 0) {
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
    if (that.irbt_trials[that.currentUserTrial]?.randomNo === 0) {
        face = "sad.jpg";
    } else {
        face = "happy.jpg";
    }
    that.rightFace = face;
    return face;
}

function handleCorrectAnswer(thiskeyword, routeTo) {
    stopTimer();
    let that = thiskeyword;
    that.irbt_trials[that.currentUserTrial].visibility = "none";
    that.irbt_trials[that.currentUserTrial].ms = ms;
    document.querySelector(".irbt-wrong").style.display = "none"
    document.querySelector(".irbt-wrong-img").style.display = "none"
    document.querySelector(".irbt_star").style.display = "block"
    document.querySelector(".faceRight").style.display = "none"
    document.querySelector(".faceLeft").style.display = "none"


    setTimeout(function () {
        document.querySelector(".irbt_star").style.display = "none"
        that.currentUserTrial++;
        startTimer();
        if (that.currentUserTrial !== that.irbt_trials.length) {
            that.irbt_trials[that.currentUserTrial].visibility = "block";
            document.querySelector(".faceRight").style.display = "block"
            document.querySelector(".faceLeft").style.display = "block"
        } else {
            // !Push data to be stored in firebase
            // console.log("enddd");
            that.$store.state.irbt_data[that.section] = that.irbt_trials;
            let clone = JSON.parse(JSON.stringify(that.irbt_trials))

            let currentDate = new Date();
            let cDay = currentDate.getDate();
            let cMonth = currentDate.getMonth() + 1;
            let cYear = currentDate.getFullYear();

            clone.forEach((data, index) => {
                data.section = that.section;
                data.browser = navigator["userAgent"];
                data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

                //Creating a descriptions column for the data
                if (data.section == "section_1") {
                    data.description = "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
                } else if (data.currentTest == "section_2") {
                    data.description = "User clicks a sad face for an image of a white person, and a happy face for an image of a black person";
                }
                data.testType = "IRBT";
                data.stimulusOrder = index + 1;
                delete data.visibility;
                delete data.randomNo;
            })
            that.$store.state.irbt_data_text.push(clone)
            that.$router.push(routeTo);
        }
    }, 1000)

}

function handleIncorrectAnswer(that) {
    document.querySelector(".irbt-wrong").style.display = "block";
    document.querySelector(".irbt-wrong-img").style.display = "block";
    setTimeout(function () {
        that.irbt_trials[that.currentUserTrial].accuracy = 0;
        document.querySelector(".irbt-wrong").style.display = "none";
        document.querySelector(".irbt-wrong-img").style.display = "none";

    }, 1000)
}



function leftFaceAction(that, routeTo) {
    const faceBeingShown = that.irbt_trials[that.currentUserTrial].emotion;
    // console.log(faceBeingShown, " ", that.leftFace);
    if (faceBeingShown === that.leftFace) {
        // console.log("left is answer");
        handleCorrectAnswer(that, routeTo);
    } else {
        handleIncorrectAnswer(that);
    }
}

function rightFaceAction(that, routeTo) {
    const faceBeingShown = that.irbt_trials[that.currentUserTrial].emotion;
    // console.log(faceBeingShown, " ", that.rightFace);
    if (faceBeingShown === that.rightFace) {
        // console.log("right is answer");
        handleCorrectAnswer(that, routeTo);
    } else {
        handleIncorrectAnswer(that, routeTo);
    }
}

export { getFacesPosition, getFacesPosition2, handleCorrectAnswer, handleIncorrectAnswer, leftFaceAction, rightFaceAction, stopTimer, startTimer }