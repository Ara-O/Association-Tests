let maleBlackImages = [
  "B_M01",
  "B_M02",
  "B_M03",
  "B_M04",
  "B_M05",
  "B_M06",
  "B_M07",
  "B_M08",
  "B_M09",
  "B_M10",
  "B_M11",
];
let maleWhiteImages = [
  "W_M01",
  "W_M02",
  "W_M03",
  "W_M04",
  "W_M05",
  "W_M06",
  "W_M07",
  "W_M08",
  "W_M09",
  "W_M10",
];
let femaleBlackImages = [
  "B_F01",
  "B_F02",
  "B_F03",
  "B_F04",
  "B_F05",
  "B_F06",
  "B_F07",
  "B_F08",
  "B_F09",
  "B_F10",
  "B_F11",
];
let femaleWhiteImages = [
  "W_F01",
  "W_F02",
  "W_F03",
  "W_F04",
  "W_F05",
  "W_F06",
  "W_F07",
  "W_F08",
  "W_F09",
  "W_F10",
];

function shuffleObjects(array) {
  for (var a = 0; a < array.length; a++) {
    var x = array[a];
    var y = Math.floor(Math.random() * (a + 1));
    array[a] = array[y];
    array[y] = x;
  }
  return array;
}

function generatePracticeTrials(trials, practice = false) {
  let blackMaleCounter = 0;
  let whiteMaleCounter = 0;
  let blackFemaleCounter = 0;
  let whiteFemaleCounter = 0;

  let chosenMaleBlackImages = shuffleObjects(maleBlackImages);
  let chosenMaleWhiteImages = shuffleObjects(maleWhiteImages);
  let chosenFemaleBlackImages = shuffleObjects(femaleBlackImages);
  let chosenFemaleWhiteImages = shuffleObjects(femaleWhiteImages);

  // let chosenMaleBlackImages = shuffleObjects( practice ? maleBlackImages : [...maleBlackImages, ...maleBlackImages])
  // let chosenMaleWhiteImages = shuffleObjects( practice ? maleWhiteImages : [...maleWhiteImages, ...maleWhiteImages])
  // let chosenFemaleBlackImages = shuffleObjects(practice ? femaleBlackImages : [...femaleBlackImages, ...femaleBlackImages])
  // let chosenFemaleWhiteImages = shuffleObjects(practice ? femaleWhiteImages : [...femaleWhiteImages, ...femaleWhiteImages])

  let dataset = [];
  //LOOP FOR MALES
  for (let i = 0; i < trials / 2; i++) {
    //CONDITION TO HAVE EQUAL RACE STIMULUS FOR MALES
    if (i % 2 === 0) {
      //loop for black males
      let dataToPush = {};
      //adds stimulus image based on the first indexes of the shuffled dataset
      dataToPush.stimulusImage = chosenMaleBlackImages[blackMaleCounter];
      dataToPush.accuracy = 100;

      //!create left, right, and correct options here
      let randomNo = Math.floor(Math.random() * 10);
      if (randomNo % 2 === 0) {
        dataToPush.correctImagePosition = "left";
        dataToPush.leftImage = chosenMaleBlackImages[blackMaleCounter];
        dataToPush.rightImage =
          chosenMaleWhiteImages[
            Math.floor(Math.random() * chosenMaleWhiteImages.length)
          ];
      } else {
        dataToPush.correctImagePosition = "right";
        dataToPush.rightImage = chosenMaleBlackImages[blackMaleCounter];
        dataToPush.leftImage =
          chosenMaleWhiteImages[
            Math.floor(Math.random() * chosenMaleWhiteImages.length)
          ];
      }
      blackMaleCounter++;

      dataset.push(dataToPush);
      // console.log("loop through black")
    } else {
      let dataToPush = {};
      dataToPush.stimulusImage = chosenMaleWhiteImages[whiteMaleCounter];
      dataToPush.accuracy = 100;

      //!create left, right, and correct options here
      let randomNo = Math.floor(Math.random() * 10);
      if (randomNo % 2 === 0) {
        dataToPush.correctImagePosition = "right";
        dataToPush.leftImage =
          chosenMaleBlackImages[
            Math.floor(Math.random() * chosenMaleBlackImages.length)
          ];
        dataToPush.rightImage = chosenMaleWhiteImages[whiteMaleCounter];
      } else {
        dataToPush.correctImagePosition = "left";
        dataToPush.rightImage =
          chosenMaleBlackImages[
            Math.floor(Math.random() * chosenMaleBlackImages.length)
          ];
        dataToPush.leftImage = chosenMaleWhiteImages[whiteMaleCounter];
      }
      whiteMaleCounter++;
      dataset.push(dataToPush);
      // console.log("loop through white")
    }
  }

  for (let i = 0; i < trials / 2; i++) {
    if (i % 2 === 0) {
      //loop for black females
      let dataToPush = {};
      //adds stimulus image based on the first indexes of the shuffled dataset
      dataToPush.stimulusImage = chosenFemaleBlackImages[blackFemaleCounter];
      dataToPush.accuracy = 100;

      //!create left, right, and correct options here
      let randomNo = Math.floor(Math.random() * 10);
      if (randomNo % 2 === 0) {
        dataToPush.correctImagePosition = "left";
        dataToPush.leftImage = chosenFemaleBlackImages[blackFemaleCounter];
        dataToPush.rightImage =
          chosenFemaleWhiteImages[
            Math.floor(Math.random() * chosenFemaleWhiteImages.length)
          ];
      } else {
        dataToPush.correctImagePosition = "right";
        dataToPush.rightImage = chosenFemaleBlackImages[blackFemaleCounter];
        dataToPush.leftImage =
          chosenFemaleWhiteImages[
            Math.floor(Math.random() * chosenFemaleWhiteImages.length)
          ];
      }

      blackFemaleCounter++;

      dataset.push(dataToPush);
      // console.log("loop through black")
    } else {
      let dataToPush = {};
      dataToPush.stimulusImage = chosenFemaleWhiteImages[whiteFemaleCounter];
      dataToPush.accuracy = 100;

      //!create left, right, and correct options here
      let randomNo = Math.floor(Math.random() * 10);
      if (randomNo % 2 === 0) {
        dataToPush.correctImagePosition = "right";
        dataToPush.leftImage =
          chosenFemaleBlackImages[
            Math.floor(Math.random() * chosenFemaleBlackImages.length)
          ];
        dataToPush.rightImage = chosenFemaleWhiteImages[whiteFemaleCounter];
      } else {
        dataToPush.correctImagePosition = "left";
        dataToPush.rightImage =
          chosenFemaleBlackImages[
            Math.floor(Math.random() * chosenFemaleBlackImages.length)
          ];
        dataToPush.leftImage = chosenFemaleWhiteImages[whiteFemaleCounter];
      }
      whiteFemaleCounter++;
      dataset.push(dataToPush);
      // console.log("loop through white")
    }
  }

  let fullDataSet = shuffleObjects(dataset);
  fullDataSet.forEach((data) => {
    practice ? (data.testType = "Practice") : (data.testType = "Test");
  });
  //   console.table(fullDataSet);

  fullDataSet.forEach((trial) => (trial.visibility = "none"));
  fullDataSet[0].visibility = "block";

  return fullDataSet;
}

export { generatePracticeTrials };
