// import { getDatabase, ref, set } from "firebase/database";
import * as storeData from "../storingData/storingDataBriefIBT";
let ms = 0;
let startTime;
let pausedTime, continuedTime;
let durationOfPause = 0;
function startTimer() {
  console.log("Starting timer");
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  console.log("Stopped: duration of pause: " + durationOfPause);
  const endTime = new Date();
  ms = endTime - startTime - durationOfPause;
  durationOfPause = 0;
}

function pauseTimer() {
  console.log("Pausing timer");
  pausedTime = new Date();
}

function continueTimer() {
  console.log("Continuing timer");
  continuedTime = new Date();
  durationOfPause += continuedTime - pausedTime;
}

let ibtData = [];
function handleAnswer(thiskeyword, Data, whereToStore) {
  const thisData = thiskeyword;
  if (!thisData.testNotStarted) {
    console.log("starting timer from handle answer");
    startTimer();
    document.addEventListener("click", function handleInput(e) {
      if (!thisData.paused) {
        let buttonClicked = e.target;
        let buttonClickedStimulusMood = buttonClicked.dataset.mood;
        if (
          buttonClicked.classList.contains("faceRight") ||
          buttonClicked.classList.contains("faceLeft")
        ) {
          const currentChallenge = Data[thisData.currentTrial];
          if (currentChallenge.stimulusEmotion === buttonClickedStimulusMood) {
            //Stops timer
            thisData.paused = true;
            stopTimer();
            //Proceeds to the next name while adding the speed used to answer the question
            thisData.userGotStimulusWrong = false;
            currentChallenge.visibility = "none";
            currentChallenge.reactionTime = ms;
            // Making sure the test isnt over yet
            if (thisData.currentTrial !== Data.length - 1) {
              thisData.userGotStimulusRight = true;
              // Creating a delay
              setTimeout(function () {
                thisData.userGotStimulusRight = false;
                setTimeout(function () {
                  Data[thisData.currentTrial + 1].visibility = "block";
                  thisData.userGotStimulusRight = false;
                  startTimer();
                  thisData.currentTrial++;
                  thisData.paused = false;
                }, 500);
              }, 500);

              //IF THE USER has finished one round of testing
            } else {
              //If full test is over
              if (thisData.ibt_trials.length - 1 == thisData.section) {
                document.removeEventListener("click", handleInput);
                ibtData.push(Data);
                thisData.$store.state[whereToStore] = ibtData;
                console.log("full test ends");
                thisData.$router.push("/IBT_Brief_Black_White_Feedback");
                storeData.storeBriefIBTData(ibtData, thisData);
                ibtData = [];
                //Route to feedback
              } else {
                ibtData.push(Data);
                thisData.$store.state[whereToStore] = ibtData;
                document.removeEventListener("click", handleInput);
                thisData.paused = true;
                thisData.section++;
                thisData.testNotStarted = true;
                thisData.userGotStimulusRight = false;
                thisData.userGotStimulusWrong = false;
                thisData.currentTrial = 0;
                console.log("end of section");
              }
            }
          } else {
            //!Pause timer
            pauseTimer();
            thisData.paused = true;
            thisData.userGotStimulusWrong = true;
            currentChallenge.accuracy = 0;
            setTimeout(function () {
              thisData.userGotStimulusWrong = false;
              thisData.paused = false;
              continueTimer();
            }, 500);
          }
        }
      }
    });
  }
}

export { handleAnswer, stopTimer, startTimer };
