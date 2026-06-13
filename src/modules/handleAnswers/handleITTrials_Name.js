"use strict";
import * as storeDataIT from "../storingData/storingDataIT";
let startTime;
let ms;

function startTimer() {
  ms = 0;
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  ms = endTime - startTime;
}

function moveForward(thisval) {
  thisval.progress++;
  if (thisval.progress === 3) {
    startTimer();
  }

  if (thisval.progress === 5) {
    thisval.inaccurateTrial = false;
    startTimer();
  }
}

function shuffleObjects(array) {
  for (var a = 0; a < array.length; a++) {
    var x = array[a];
    var y = Math.floor(Math.random() * (a + 1));
    array[a] = array[y];
    array[y] = x;
  }
  return array;
}

function nextFaceToMemorize(thisval) {
  //This is for the faces to memorize, making them visible and not visible
  //It uses the currently Visible, to set the visiblity of the first item to none, and then continues

  //Stops timer
  stopTimer();
  thisval.memorizationTimes.push(ms);

  //Starts timer - how long It takes to memorize
  startTimer();

  if (thisval.currentlyVisible < thisval.faceDataToMemorize.length - 1) {
    thisval.faceDataToMemorize[thisval.currentlyVisible].visibility = "none";
    thisval.currentlyVisible++;
    thisval.faceDataToMemorize[thisval.currentlyVisible].visibility = "block";
  } else {
    // End of one cycle
    // Storing all the memorization times
    thisval.currentlyVisible = 0;
    thisval.progress++;
    thisval.allMemorizationTimes[`${thisval.block + 1}-faces-trials`] =
      thisval.memorizationTimes;
    thisval.memorizationTimes = [];
    thisval.block++;
  }
}

function proceedToNextSection(thisval, IT_Trials, section) {
  let data = thisval.$store.state.IT_trials;
  let dataclone = JSON.parse(JSON.stringify(data));
  for (let trial in data) {
    data[trial].forEach((data) => {
      delete data.visibility;
      delete data.id;
    });
  }

  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let dataclonearray = [];
  //!Data clone
  for (let trial in dataclone) {
    dataclone[trial].forEach((data, index) => {
      delete data.visibility;
      delete data.id;
      data.currentTrial = trial;
      data.browserInfo = navigator["userAgent"];
      data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

      //Creating a descriptions column for the data
      if (section == "White") {
        data.description =
          "Test cycles through the 2-5 faces of white people and tasks the user with memorizing the number associated with each face";
      } else if (section == "Black") {
        data.description =
          "Test cycles through the 2-5 faces of black people and tasks the user with memorizing the number associated with each face";
      } else if (section == "Asian") {
        data.description =
          "Test cycles through the 2-5 faces of asian people and tasks the user with memorizing the number associated with each face";
      }
      data.testType = `IT-${section}`;
      data.stimulusOrder = index + 1;
      delete data.visibility;
      delete data.randomNo;
      delete data.cN;
      dataclonearray.push(data);
    });
  }
  thisval.$store.state.IT_trials_text = dataclonearray;
  storeDataIT.storeITIndividualData(
    thisval.$store.getters.getCurrentTest,
    thisval,
    false
  );
  if (thisval.inaccurateTrial === false) {
    if (thisval.currentProgression < 5) {
      thisval.currentlyVisible = 0;
      thisval.progress = 2;
      thisval.facesNumber++;
      thisval.$router.push("");
      thisval.facedata = IT_Trials(section, ++thisval.currentProgression);
      thisval.faceDataToMemorize = JSON.parse(JSON.stringify(thisval.facedata));
      thisval.facedatashuffled = JSON.parse(JSON.stringify(thisval.facedata));
      thisval.facedatashuffled = thisval.shuffleObjects(
        thisval.facedatashuffled
      );
      for (let i = 0; i < thisval.facedatashuffled.length; i++) {
        if (i === 0) {
          thisval.facedatashuffled[i].visibility = "block";
        } else {
          thisval.facedatashuffled[i].visibility = "none";
        }
      }
      thisval.facedata = thisval.facedatashuffled;
    } else {
      // !End of test
      storeDataIT.updateITData(thisval, section);
      storeDataIT.storeITIndividualData(
        thisval.$store.getters.getCurrentTest,
        thisval,
        true
      );
      thisval.$store.state.IT_trials_text = [];
      thisval.$store.state.IT_trials = {};
    }
  } else {
    //There has been an inaccurate trial
    thisval.progress = 4;
    thisval.numberOfTimesToMemorize++;
    thisval.currentlyVisible = 0;
    for (let i = 0; i < thisval.facedatashuffled.length; i++) {
      if (i === 0) {
        thisval.facedatashuffled[i].visibility = "block";
      } else {
        thisval.facedatashuffled[i].visibility = "none";
      }
    }
  }
}

function proceedAfterIncorrectChoice(thisval) {
  //After the user clicks the correct number from an incorrect choice

  if (thisval.currentlyVisible !== thisval.facedata.length - 1) {
    thisval.facedata[thisval.currentlyVisible].visibility = "none";
    thisval.currentlyVisible++;
    thisval.facedata[thisval.currentlyVisible].visibility = "block";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".correctchoice").style.display = "none";
    document.querySelector(".choices").style.display = "flex";
    thisval.inaccurateTrial = true;
  } else {
    // when the user gets the face wrong at the end of the test
    document.querySelector(".cross").style.display = "none";
    thisval.inaccurateTrial = true;
    thisval.proceedToNextSection();
  }
}

function validateChoice(choice, thisval) {
  // console.log(thisval.facedata)

  // Sets the current face to the first value of the face data
  thisval.currentFace = thisval.facedata[thisval.currentlyVisible].name;
  // console.log(thisval.facedata[thisval.currentlyVisible].name)
  // Checks to make sure the value used to go over the array is less than the array length
  if (thisval.currentlyVisible !== thisval.facedata.length) {
    //If the user got the face right
    if (choice == thisval.currentFace) {
      //Stop timer
      thisval.stopTimer();
      thisval.facedata[thisval.currentlyVisible].timeSpentSolvingFace = ms;
      thisval.facedata[thisval.currentlyVisible].timeSpentMemorizingFace =
        thisval.allMemorizationTimes[`${thisval.block}-faces-trials`][
          thisval.currentlyVisible
        ];
      thisval.facedata[thisval.currentlyVisible].blockAttempts =
        thisval.numberOfTimesToMemorize;
      thisval.startTimer();

      document.querySelector(".choices").style.display = "none";
      thisval.facedata[thisval.currentlyVisible].visibility = "none";
      document.querySelector(".star").style.display = "block";

      // Setting the inaccurate trial to true if there has been one
      if (thisval.inaccurateTrial == true) {
        thisval.inaccurateTrial = true;
      } else {
        thisval.inaccurateTrial = false;
      }

      let that = thisval;

      window.setTimeout(function () {
        if (that.currentlyVisible !== that.facedata.length - 1) {
          that.currentlyVisible++;
          document.querySelector(".star").style.display = "none";
          that.facedata[that.currentlyVisible].visibility = "block";
          document.querySelector(".choices").style.display = "flex";
        } else {
          // The faces cycle has reached the end, store current timing
          // Only store the time it took when user gets both sides right
          // console.log(that.facedata);
          document.querySelector(".star").style.display = "none";
          that.numberOfTimesToMemorize = 1;
          that.proceedToNextSection();
          // thisval.$store.state.
        }
      }, 1000);

      //If the user gets on wrong
    } else {
      // Store how many times it took user to memorize
      thisval.facedata[thisval.currentlyVisible].accuracy = 0;
      document.querySelector(".cross").style.display = "block";
      document.querySelector(".correctchoice").style.display = "block";
      document.querySelector(".choices").style.display = "none";
    }

    //REGARDLESS OF CHOICE

    thisval.$store.state.IT_trials[`${thisval.block}-faces-trials`] =
      JSON.parse(JSON.stringify(thisval.facedata));
  }
}

export {
  startTimer,
  stopTimer,
  moveForward,
  shuffleObjects,
  nextFaceToMemorize,
  proceedAfterIncorrectChoice,
  proceedToNextSection,
  validateChoice,
};
