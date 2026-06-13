import * as storeDataUCSC from "../storingData/storingDateBriefIBTUCSC";
let ms = 0;
let startTime;
let pausedTime, continuedTime;
let durationOfPause = 0;

function startTimer() {
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime - durationOfPause;
  durationOfPause = 0;
}

function pauseTimer() {
  pausedTime = new Date();
}

function continueTimer() {
  continuedTime = new Date();
  durationOfPause += continuedTime - pausedTime;
}

function processAnswer(thisData, Data, whereToStore, chosenMood, removeListener) {
  const currentChallenge = Data[thisData.currentTrial];
  if (currentChallenge.stimulusEmotion === chosenMood) {
    stopTimer();
    thisData.paused = true;
    thisData.userGotStimulusWrong = false;
    currentChallenge.visibility = "none";
    currentChallenge.reactionTime = ms;

    if (thisData.currentTrial !== Data.length - 1) {
      thisData.userGotStimulusRight = true;
      setTimeout(function () {
        thisData.userGotStimulusRight = false;
        setTimeout(function () {
          Data[thisData.currentTrial + 1].visibility = "block";
          startTimer();
          thisData.currentTrial++;
          thisData.paused = false;
        }, 500);
      }, 500);
    } else {
      if (thisData.ibt_trials.length - 1 == thisData.section) {
        removeListener();
        thisData.ibtData.push(Data);
        thisData.$store.state[whereToStore] = thisData.ibtData;
        storeDataUCSC.storeBriefIBTData(thisData.ibtData, thisData);
        thisData.ibtData = [];
        thisData.$router.push("/IBT_Brief_Black_White_UCSC_Feedback");
      } else {
        thisData.userGotStimulusRight = true;
        thisData.ibtData.push(Data);
        storeDataUCSC.storeBriefIBTData(thisData.ibtData, thisData, false);
        setTimeout(function () {
          thisData.$store.state[whereToStore] = thisData.ibtData;
          removeListener();
          thisData.paused = true;
          thisData.section++;
          thisData.testNotStarted = true;
          thisData.userGotStimulusRight = false;
          thisData.userGotStimulusWrong = false;
          thisData.currentTrial = 0;
        }, 500);
      }
    }
  } else {
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

function handleAnswer(thiskeyword, Data, whereToStore, mode) {
  const thisData = thiskeyword;
  if (thisData.testNotStarted) return;

  startTimer();

  if (mode === "keyboard") {
    function handleInput(e) {
      if (thisData.paused) return;
      const key = e.key.toLowerCase();
      if (key !== "e" && key !== "i") return;

      const currentTrial = Data[thisData.currentTrial];
      const chosenMood =
        key === "e"
          ? currentTrial.leftClickerFaceEmotion
          : currentTrial.rightClickerFaceEmotion;

      processAnswer(thisData, Data, whereToStore, chosenMood, () =>
        document.removeEventListener("keydown", handleInput)
      );
    }
    document.addEventListener("keydown", handleInput);
  } else {
    function handleInput(e) {
      if (thisData.paused) return;
      const buttonClicked = e.target;
      if (
        !buttonClicked.classList.contains("faceRight") &&
        !buttonClicked.classList.contains("faceLeft")
      )
        return;

      const chosenMood = buttonClicked.dataset.mood;
      processAnswer(thisData, Data, whereToStore, chosenMood, () =>
        document.removeEventListener("click", handleInput)
      );
    }
    document.addEventListener("click", handleInput);
  }
}

export { handleAnswer };
