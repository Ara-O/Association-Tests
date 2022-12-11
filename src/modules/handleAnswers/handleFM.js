import storingDataFM from "../storingData/storingDataFM";

let ms = 0;
let startTime;
let pausedTime, continuedTime;
let durationOfPause = 0;

function startTimer() {
  // console.log("starting timer");
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
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

export function startFaceMatching() {
  startTimer();
}

export function handleUserSelection(
  testHasStarted,
  userChoice,
  trials,
  currentTest,
  currentTrial,
  userChoseCorrectlyStarFeedback,
  userChoseIncorrectlyFeedback,
  router,
  paused,
  routeTo,
  store,
  fullData
) {
  //!check if user is right or not, if user is right,
  //!increment the currentTrial, if not, show error, etc etc
  if (
    userChoice ===
    trials[currentTest.value].trialDataSet[currentTrial.value]
      .correctImagePosition
  ) {
    // console.log("they got it right");

    stopTimer();
    trials[currentTest.value].trialDataSet[currentTrial.value].reactionTime =
      ms;
    userChoseIncorrectlyFeedback.value = false;
    userChoseCorrectlyStarFeedback.value = true;

    //Initial timer for 1s for the star
    setTimeout(function () {
      paused.value = true;
      userChoseCorrectlyStarFeedback.value = false;
      //if we are at the end of one test
      if (
        currentTrial.value ===
        trials[currentTest.value].trialDataSet.length - 1
      ) {
        // stopTimer();
        userChoseCorrectlyStarFeedback.value = false;
        //if we at the end of one test, check whether thats not the end of the series
        //of tests, if it is, thats the end!
        if (currentTest.value === trials.length - 1) {
          fullData.push(trials[currentTest.value].trialDataSet);

          // console.log("full test has ended");
          store.state[store.getters.getCurrentTest] = trials;
          storingDataFM(store, store.getters.getCurrentTest, true, fullData);
          router.push(routeTo);
        } else {
          fullData.push(trials[currentTest.value].trialDataSet);
          //Storing in between blocks
          storingDataFM(store, store.getters.getCurrentTest, false, fullData);
          currentTest.value++;
          paused.value = true;
          currentTrial.value = 0;
          testHasStarted.value = false;
          console.log(currentTest.value);
        }
      } else {
        //Second timer for white screen
        trials[currentTest.value].trialDataSet[currentTrial.value].visibility =
          "none";
        currentTrial.value++;
        trials[currentTest.value].trialDataSet[currentTrial.value].visibility =
          "block";
        setTimeout(function () {
          paused.value = false;
          startTimer();
        }, 500);
      }
    }, 500);
  } else {
    // console.log("they got it wrong");
    trials[currentTest.value].trialDataSet[currentTrial.value].accuracy = 0;
    userChoseIncorrectlyFeedback.value = true;
    pauseTimer();
    //Adding a delay
    setTimeout(function () {
      continueTimer();
      userChoseIncorrectlyFeedback.value = false;
    }, 500);
  }
}
