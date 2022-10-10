let ms = 0;
let startTime;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

function startTimer() {
  console.log("starting timer");
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;
  console.log("ending timer - ", ms);
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
  paused
) {
  //!check if user is right or not, if user is right,
  //!increment the currentTrial, if not, show error, etc etc
  console.log(
    "user choice: ",
    userChoice,
    " correct choice: ",
    trials[currentTest.value].trialDataSet[currentTrial.value]
      .correctImagePosition
  );

  if (
    userChoice ===
    trials[currentTest.value].trialDataSet[currentTrial.value]
      .correctImagePosition
  ) {
    console.log("they got it right");

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
          console.log("full test has ended");
          router.push("/FM_Categorization_Black_White_Feedback");
        } else {
          currentTest.value++;
          currentTrial.value = 0;
          testHasStarted.value = false;
        }
      } else {
        //Second timer for white screen
        currentTrial.value++;
        setTimeout(function () {
          paused.value = false;
          startTimer();
        }, 500);
      }
    }, 1000);
  } else {
    console.log("they got it wrong");
    trials[currentTest.value].trialDataSet[currentTrial.value].accuracy = 0;
    userChoseIncorrectlyFeedback.value = true;

    //Adding a delay
    setTimeout(function () {
      userChoseIncorrectlyFeedback.value = false;
    }, 1000);
  }
}
