import * as storeData from "./storingDataIAT"

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
}

function stopTimer() {
  const endTime = new Date();
  ms = (endTime - startTime);
}

function handleAnswer_TS(target, thiskeyword, Data, whereToStore, version) {
  const test = thiskeyword;
  if (!test.notStarted) {
    let keyClicked = target;
    const currentChallenge = Data[test.arrayIndex];
    if (keyClicked.classList.contains("left") || keyClicked.classList.contains("left-choice")) {
      keyClicked = 'Left'
    } else if (keyClicked.classList.contains("right") || keyClicked.classList.contains("right-choice")) {
      keyClicked = 'Right'
    } else {
      keyClicked = "Not applicable"
    }

    //Checking accuracy
    if (keyClicked === "Left" || keyClicked === "Right") {
      if (keyClicked == currentChallenge.key && test.arrayIndex !== Data.length) {
        //Proceeds to the next name while adding the speed used to answer the question
        document.querySelector("#wrong").style.display = "none";
        currentChallenge.visibility = "none";
        stopTimer();
        currentChallenge.ms = ms;
        startTimer();


        // Making sure the test isnt over yet
        if (test.arrayIndex !== Data.length - 1) {
          Data[test.arrayIndex + 1].visibility = "block";
          test.arrayIndex += 1;
        } else {
          //Stops timer, stores the accuracy and speed and removes the event listener when the test is over
          stopTimer();
          storeData.storeIATData(Data, thiskeyword, cMonth, cDay, cYear, whereToStore, "IAT_Gender_Touchscreen", version);
          if(test.currentBlock == test.genderTest.length - 1){
            test.testOver = true;
          } else {
            test.currentBlock++;
            test.notStarted = true;
          }
        }
      } else {
        currentChallenge.accuracy = 0;
        document.querySelector("#wrong").style.display = "flex";
      }
    }
  } else {
    ms = 0
  }
};
export {startTimer};
export default handleAnswer_TS;