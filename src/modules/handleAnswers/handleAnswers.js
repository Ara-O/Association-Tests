import * as storeData from "../storingData/storingDataIAT";

// * Timer
let ms = 0;
let startTime;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();

function startTimer() {
  // console.log("starting timer");
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;
  // console.log("ending timer - ", ms);
}

function handleAnswer(thiskeyword, Data, whereToStore, version) {
  const test = thiskeyword;
  let testIsPaused = false;
  test.notStarted = false;
  if (!test.notStarted) {
    startTimer();
    document.addEventListener("keyup", function handleInput(e) {
      if (!testIsPaused) {
        const keyClicked = e.key.toUpperCase();
        const currentChallenge = Data[test.arrayIndex];
        //First check to make sure that what was entered is either I or E
        if (keyClicked == "I" || keyClicked == "E") {
          //Checking if the test isnt over yet, and the entry is accurate
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
              // Creating a delay
              setTimeout(function () {
                Data[test.arrayIndex + 1].visibility = "block";
                startTimer();
                test.arrayIndex += 1;
                testIsPaused = false;
              }, 500);
            } else {
              //Store data in vuex
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
                document.removeEventListener("keyup", handleInput);
                storeData.storeIATIndividualData(
                  test.$store.getters.getCurrentTest,
                  test,
                  true
                );
                test.testOver();
              } else {
                //store data here per block
                storeData.storeIATIndividualData(
                  test.$store.getters.getCurrentTest,
                  test,
                  false
                );
                document.removeEventListener("keyup", handleInput);
                test.notStarted = true;
                test.currentBlock++;
              }
            }
          } else {
            if (!testIsPaused) {
              currentChallenge.accuracy = 0;
              document.querySelector("#wrong").style.display = "flex";
            }
          }
        }
      }
    });
  }
}

export default handleAnswer;
