// import { getDatabase, ref, set } from "firebase/database";
import * as storeData from "../storingData/storingDataBriefIBT";
import { storeLDData } from "../storingData/storingDataLD";
import * as storeDataUCSC from "../storingData/storingDateBriefIBTUCSC";
let ms = 0;
let startTime;
let pausedTime, continuedTime;
let durationOfPause = 0;

function startTimer() {
    // console.log("Starting timer");
    ms = 0;
    startTime = new Date();
}

function stopTimer() {
    // console.log("Stopped: duration of pause: " + durationOfPause);
    const endTime = new Date();
    ms = endTime - startTime - durationOfPause;
    durationOfPause = 0;
}

function pauseTimer() {
    // console.log("Pausing timer");
    pausedTime = new Date();
}

function continueTimer() {
    // console.log("Continuing timer");
    continuedTime = new Date();
    durationOfPause += continuedTime - pausedTime;
}

function handleAnswer(userChoice, testNotStarted, data, testIsPaused, currentTrial, userGotStimulusRight, userGotStimulusWrong, finishedSection, section, store) {
    if (!testNotStarted.value && !testIsPaused.value) {
        const currentChallenge = data[currentTrial.value];


        if (currentChallenge.stimulusKey === userChoice) {
            //Stops timer
            stopTimer();
            testIsPaused.value = true;
            //Proceeds to the next name while adding the speed used to answer the question
            currentChallenge.visibility = "none";
            currentChallenge.reactionTime = ms;

            if (currentTrial.value !== data.length - 1) {
                // Making sure the test isnt over yet
                userGotStimulusRight.value = true;

                // Creating a delay
                setTimeout(function () {
                    userGotStimulusRight.value = false;
                    setTimeout(function () {
                        data[currentTrial.value + 1].visibility = "block";
                        userGotStimulusRight.value = false;
                        startTimer();
                        currentTrial.value++;
                        testIsPaused.value = false;
                    }, 500);
                }, 500);
            } else {
                if (section.value === 1) {
                    finishedSection(true)
                    console.log("Full done")
                    // 
                } else {
                    // Finished 1
                    console.log("Practice done ")
                    finishedSection(false)
                }

                storeLDData(store)


            }
        } else {
            //!Pause timer, user got stimulus wrong
            pauseTimer();
            testIsPaused.value = true;
            userGotStimulusWrong.value = true;
            currentChallenge.accuracy = 0;
            setTimeout(function () {
                userGotStimulusWrong.value = false;
                testIsPaused.value = false;
                continueTimer();
            }, 500);
        }
    }



    //             thisData.ibtData.push(Data);
    //             thisData.$store.state[whereToStore] = thisData.ibtData;
    //             // console.log("full test ends");
    //             thisData.$router.push("/IBT_Brief_Black_White_Feedback");
    //             if (
    //                 thisData.$store.getters.getCurrentTest ===
    //                 "IBT_Brief_Black_White_UCSC"
    //             ) {
    //                 storeDataUCSC.storeBriefIBTData(thisData.ibtData, thisData);
    //             }

    //             if (
    //                 thisData.$store.getters.getCurrentTest ===
    //                 "IBT_Brief_Black_White"
    //             ) {
    //                 storeData.storeBriefIBTData(thisData.ibtData, thisData);
    //             }
    //             thisData.ibtData = [];
    //             //Route to feedback
    //         } else {
    //             thisData.userGotStimulusRight = true;
    //             thisData.ibtData.push(Data);

    //             if (
    //                 thisData.$store.getters.getCurrentTest ===
    //                 "IBT_Brief_Black_White_UCSC"
    //             ) {
    //                 //Storing data everytime user finishes a block
    //                 storeDataUCSC.storeBriefIBTData(
    //                     thisData.ibtData,
    //                     thisData,
    //                     false
    //                 );
    //             }

    //             if (
    //                 thisData.$store.getters.getCurrentTest ===
    //                 "IBT_Brief_Black_White"
    //             ) {
    //                 //Storing data everytime user finishes a block
    //                 storeData.storeBriefIBTData(
    //                     thisData.ibtData,
    //                     thisData,
    //                     false
    //                 );
    //             }
    //             setTimeout(function () {
    //                 thisData.$store.state[whereToStore] = thisData.ibtData;
    //                 document.removeEventListener("click", handleInput);
    //                 thisData.paused = true;
    //                 thisData.section++;
    //                 thisData.testNotStarted = true;
    //                 thisData.userGotStimulusRight = false;
    //                 thisData.userGotStimulusWrong = false;
    //                 thisData.currentTrial = 0;
    //                 // console.log("end of section");
    //             }, 500);
    //         }
    //     }

    // }
}



export { handleAnswer, startTimer };
