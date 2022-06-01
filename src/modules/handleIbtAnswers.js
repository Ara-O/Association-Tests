// import { getDatabase, ref, set } from "firebase/database";
import * as storeData from "../modules/storingDataIBT";
let ms = 0;
let startTime;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();


function startTimer() {
    ms = 0;
    startTime = new Date();
    // console.log('starting timer')
}

function stopTimer() {
    const endTime = new Date();
    ms = endTime - startTime;
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

let ibt_data = []

function handleCorrectAnswer(thiskeyword, whereToStore, version) {
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
        } else {

            // The section has ended, storing the data in vuex store
            ibt_data[that.section] = that.irbt_trials[that.section].trials;
            storeData.updateIBTData(ibt_data, that, cMonth, cDay, cYear, whereToStore, version);

            // console.log("section has ended")
            if (that.section + 1 !== that.irbt_trials.length) {
                document.querySelector(".irbt_star").style.display = "none"
                //Checking to see if the sections have all being exhausted, if so, store data to firebase
                that.testNotStarted = true;
                that.section++;
                that.currentUserTrial = 0;
                stopTimer();
            } else {
                
                //Test is over
                that.$router.push(that.routeTo);
                ibt_data = [];
            }
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



function leftFaceAction(that, objectKey, whereToStore) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial][objectKey];
    // console.log(faceBeingShown)
    // console.log(faceBeingShown, " ", that.leftFace);
    if (faceBeingShown === that.leftFace) {
        handleCorrectAnswer(that, whereToStore, whereToStore);
    } else {
        handleIncorrectAnswer(that);
    }
}

function rightFaceAction(that, objectKey, whereToStore) {
    const faceBeingShown = that.irbt_trials[that.section].trials[that.currentUserTrial][objectKey];
    // console.log(faceBeingShown)
    // console.log(faceBeingShown, " ", that.rightFace);
    if (faceBeingShown === that.rightFace) {
        // console.log("right is answer");
        handleCorrectAnswer(that, whereToStore, whereToStore);
    } else {
        handleIncorrectAnswer(that);
    }
}

export { getFacesPosition, getFacesPosition2, handleCorrectAnswer, handleIncorrectAnswer, leftFaceAction, rightFaceAction, stopTimer, startTimer }