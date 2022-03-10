 import { getDatabase, ref, set } from "firebase/database"


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

function handleAnswer_TS(main, thiskeyword, Data, whereToStore, whereToGo) {
  const test = thiskeyword;
  startTimer();

  document.querySelector(main).addEventListener("click", function handleInput(e) {
    let keyClicked = e.target;
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
          let totalaccuracy = 0;
          test.$store.state.IAT_TS_data[whereToStore] = Data;

          // !Cloning the data
          let dataclone = JSON.parse(JSON.stringify(Data));
          dataclone.forEach((data)=>{
            data.currentTest = whereToStore;
            data.browser = navigator["userAgent"];
            data.dateTaken =  `${cMonth}-${cDay}-${cYear}`;
            delete data.visibility;
          })
          
          test.$store.state.IAT_TS_data_text.push(dataclone);

          Data.forEach((data) => {
            totalaccuracy += data.accuracy;
            delete data.visibility;
          })

          //Adds the accuracy to the array
          test.$store.state.IAT_TS_data[whereToStore].push(`Accuracy: ${(totalaccuracy / Data.length).toFixed(2)}%`);
          document.removeEventListener("keyup", handleInput);
          test.$router.push(whereToGo)

          //Storing data in firebase
            const db = getDatabase();
            set(ref(db, `IAT_Touchscreen/User-${test.$store.state.uid}`), [
              test.$store.state.IAT_TS_data,
              navigator["userAgent"],
              `${cMonth}-${cDay}-${cYear}` 
            ]);

            //!Store test data
            set(ref(db, `TestData/IAT_Touchscreen/User-${test.$store.state.uid}`), [
              test.$store.state.IAT_TS_data_text, 
            ]);
        }
      } else {
        currentChallenge.accuracy = 0;
        document.querySelector("#wrong").style.display = "flex";
      }
    }

  });
};

export default handleAnswer_TS;