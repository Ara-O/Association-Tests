import * as storeData from "../storingData/storingDataIAT";

// Timer
let ms = 0;
let startTime;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

function startTimer() {
  ms = 0;
  startTime = new Date();
  // console.log("starting timer")
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;
  // console.log("ending timer - ", ms)
}
let testIsPaused = false;

function handleAnswer_TS(target, thiskeyword, Data, whereToStore, version) {
  const test = thiskeyword;
  if (!test.notStarted && !testIsPaused) {
    let keyClicked = target;
    const currentChallenge = Data[test.arrayIndex];
    if (
      keyClicked.classList.contains("left") ||
      keyClicked.classList.contains("left-choice")
    ) {
      keyClicked = "Left";
    } else if (
      keyClicked.classList.contains("right") ||
      keyClicked.classList.contains("right-choice")
    ) {
      keyClicked = "Right";
    } else {
      keyClicked = "Not applicable";
    }

    //Checking accuracy
    if (keyClicked === "Left" || keyClicked === "Right") {
      if (
        keyClicked == currentChallenge.key &&
        test.arrayIndex !== Data.length
      ) {
        testIsPaused = true;
        //Proceeds to the next name while adding the speed used to answer the question
        document.querySelector("#wrong").style.display = "none";
        currentChallenge.visibility = "none";
        stopTimer();
        currentChallenge.ms = ms;

        // Making sure the test isnt over yet
        if (test.arrayIndex !== Data.length - 1) {
          setTimeout(function () {
            startTimer();
            Data[test.arrayIndex + 1].visibility = "block";
            test.arrayIndex += 1;
            testIsPaused = false;
          }, 500);
        } else {
          //Storing data in vuex
          storeData.updateIATData(
            Data,
            thiskeyword,
            cMonth,
            cDay,
            cYear,
            whereToStore,
            version
          );

          //If test is over, call the test over function, or else,increment the current block
          if (test.currentBlock == test.fullTest.length - 1) {
            storeData.storeIATIndividualData(
              test.$store.getters.getCurrentTest,
              test,
              true
            );
            test.testOver = true;
          } else {
            //Storing data at the end of the block
            storeData.storeIATIndividualData(
              test.$store.getters.getCurrentTest,
              test,
              false
            );
            test.currentBlock++;
            test.notStarted = true;
            testIsPaused = false;
          }
        }
      } else {
        currentChallenge.accuracy = 0;
        document.querySelector("#wrong").style.display = "flex";
      }
    }
  } else {
    ms = 0;
  }
}

export { startTimer };

export default handleAnswer_TS;
