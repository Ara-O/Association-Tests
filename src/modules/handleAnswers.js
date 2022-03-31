import * as storeData from "./storingDataIAT"

// * Timer 
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
  ms = endTime - startTime;

}

function handleAnswer(thiskeyword, Data, whereToStore, version) {
  const test = thiskeyword;
  test.notStarted = false;
  if (!test.notStarted) {
    startTimer();
    document.addEventListener("keyup", function handleInput(e) {
      const keyClicked = e.key.toUpperCase();
      const currentChallenge = Data[test.arrayIndex];

      if(keyClicked == "I" || keyClicked == "E"){
      //First check to make sure that what was entered is accurate
      if (keyClicked == currentChallenge.key && test.arrayIndex !== Data.length) {
        //Proceeds to the next name while adding the speed used to answer the question
        document.querySelector("#wrong").style.display = "none";
        currentChallenge.visibility = "none";
        stopTimer();
        currentChallenge.ms = ms;
        startTimer();

        // Making sure the test isnt over yet
        if (test.arrayIndex !== Data.length - 1) {
          // console.log("Next data index ", Data[test.arrayIndex + 1])
          Data[test.arrayIndex + 1].visibility = "block";
          test.arrayIndex += 1;
        } else {
          //Stops timer, stores the accuracy and speed and removes the event listener when the test is over
          stopTimer();

          //Store data in firebase
          storeData.storeIATData(Data, thiskeyword, cMonth, cDay, cYear, whereToStore,"IAT_Gender" ,version);

          if(test.currentBlock == test.genderTest.length - 1){
            document.removeEventListener("keyup", handleInput);
            test.testOver();
          } else {
            document.removeEventListener("keyup", handleInput);
            test.notStarted = true;
            test.currentBlock++;
          }
          // test.$router.push(whereToGo)
        }
      } else {
        currentChallenge.accuracy = 0;
        document.querySelector("#wrong").style.display = "flex";
      }
    }
    });

  }
};

export default handleAnswer;