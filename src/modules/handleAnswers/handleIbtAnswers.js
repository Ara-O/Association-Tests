// import { getDatabase, ref, set } from "firebase/database";
import * as storeData from "../storingData/storingDataIBT";
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

function handleAnswer(
  thiskeyword,
  Data,
  whereToStore,
  feedbackPageRoute,
  dataKey
) {
  const thisData = thiskeyword;
  if (!thisData.testNotStarted) {
    startTimer();
    document.addEventListener("click", function handleInput(e) {
      //If the test is not paused
      if (!thisData.paused) {
        let buttonClicked = e.target;
        let buttonClickedStimulusMood = buttonClicked.dataset.mood;

        if (
          buttonClicked.classList.contains("faceRight") ||
          buttonClicked.classList.contains("faceLeft")
        ) {
          const currentChallenge = Data[thisData.currentTrial];
          //User got stimulus right, store the reaction time
          if (currentChallenge[dataKey] === buttonClickedStimulusMood) {
            stopTimer();
            thisData.paused = true;
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
                  thisData.currentTrial++;
                  thisData.paused = false;
                  startTimer();
                }, 500);
              }, 500);
            } else {
              //Full test is over
              if (thisData.ibt_trials.length - 1 == thisData.section) {
                let currentDate = new Date();
                let cDay = currentDate.getDate();
                let cMonth = currentDate.getMonth() + 1;
                let cYear = currentDate.getFullYear();
                document.removeEventListener("click", handleInput);
                thisData.ibtData.push(Data);
                let modifiedData = storeData.updateIBTData(
                  thisData.ibtData,
                  thisData,
                  cMonth,
                  cDay,
                  cYear,
                  whereToStore,
                  whereToStore
                );
                thisData.$store.state[whereToStore] = modifiedData;
                thisData.$store.state["ibtDataForFeedbackPage"] =
                  thisData.ibt_trials;
                thisData.$router.push(feedbackPageRoute);
                //Don't need to store data here because it will be stored in feedback page
                thisData.ibtData = [];
              } else {
                let currentDate = new Date();
                let cDay = currentDate.getDate();
                let cMonth = currentDate.getMonth() + 1;
                let cYear = currentDate.getFullYear();
                thisData.userGotStimulusRight = true;

                //Pushing to ibt data, modifying all the data first,
                //then pushing to modifiedData
                thisData.ibtData.push(Data);
                let modifiedData = storeData.updateIBTData(
                  thisData.ibtData,
                  thisData,
                  cMonth,
                  cDay,
                  cYear,
                  whereToStore,
                  whereToStore
                );
                thisData.$store.state[whereToStore] = modifiedData;
                setTimeout(function () {
                  document.removeEventListener("click", handleInput);
                  thisData.paused = true;
                  thisData.section++;
                  thisData.testNotStarted = true;
                  thisData.userGotStimulusRight = false;
                  thisData.userGotStimulusWrong = false;
                  thisData.currentTrial = 0;
                  // console.log("end of section");
                }, 500);
              }
            }
          } else {
            //User got stimulus wrong
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

export { handleAnswer };
