// import firebase from 'firebase/app'
import { getDatabase, ref, set } from "firebase/database"


// * Timer 
let ms = 0;
let startTime;

function startTimer() {
  ms = 0;
  startTime = new Date();

}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;

}



function handleAnswer(thiskeyword, Data, whereToStore, whereToGo) {
  const test = thiskeyword;
      test.notStarted = false;
      if (!test.notStarted) {
        startTimer();
        document.addEventListener("keyup", function handleInput(e) {
          const keyClicked = e.key.toUpperCase();
          const currentChallenge = Data[test.arrayIndex];


          //First check to make sure that what was entered is accurate

          if (keyClicked == currentChallenge.key & test.arrayIndex !== Data.length) {
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
              let totalaccuracy = 0;
              test.$store.state.IAT_data[whereToStore] = Data;

              Data.forEach((data) => {
                totalaccuracy += data.accuracy;
                delete data.visibility;
                //  delete data.isImage;
              })

              //Adds the accuracy to the array
              test.$store.state.IAT_data[whereToStore].push(`Accuracy: ${(totalaccuracy / Data.length).toFixed(2)}%`);
              document.removeEventListener("keyup", handleInput);
               test.notStarted = true;
              test.$router.push(whereToGo)


              //!Store data in firebase
              const db = getDatabase();
              set(ref(db, `User-${test.$store.state.uid}-IAT`), {
                data: test.$store.state.IAT_data,
                browserInfo: navigator["userAgent"],

              });
            }
          } else {
            currentChallenge.accuracy = 0;
            document.querySelector("#wrong").style.display = "block";
          }
        });
    
    }
};

export default handleAnswer;