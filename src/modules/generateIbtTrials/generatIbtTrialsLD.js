function shuffleObjects(originalArray) {
  const array = [...originalArray];
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function validateTrialData(originalData, key) {
  let fullData = [...originalData];
  while (true) {
    let limit = 1;
    let valid = true;
    for (let index = 0; index < fullData.length - 1; index++) {
      if (fullData[index][key] === fullData[index + 1][key]) {
        limit++;
      } else {
        limit = 1;
      }
      if (limit === 3) {
        valid = false;
        break;
      }
    }
    if (valid) {
      break;
    }
    fullData = shuffleObjects(fullData);
  }
  return fullData;
}

export function generateLdTrials(
  difficulties_face,
  no_difficulties_face,
  trials
) {
  let learning_difficulties = [
    { keyword: "Slow Learner", stimulusKey: difficulties_face },
    { keyword: "Academically Challenged", stimulusKey: difficulties_face },
    { keyword: "Difficulties Learning", stimulusKey: difficulties_face },
    //Duplicated
    { keyword: "Slow Learner", stimulusKey: difficulties_face },
    { keyword: "Academically Challenged", stimulusKey: difficulties_face },
    { keyword: "Difficulties Learning", stimulusKey: difficulties_face },
  ];

  let without_learning_difficulties = [
    { keyword: "Typically developing", stimulusKey: no_difficulties_face },
    { keyword: "Neurotypical", stimulusKey: no_difficulties_face },
    { keyword: "No diagnosis", stimulusKey: no_difficulties_face },
    //Duplicated
    { keyword: "Typically developing", stimulusKey: no_difficulties_face },
    { keyword: "Neurotypical", stimulusKey: no_difficulties_face },
    { keyword: "No diagnosis", stimulusKey: no_difficulties_face },
  ];

  let full_data = [];

  learning_difficulties = shuffleObjects(learning_difficulties);
  without_learning_difficulties = shuffleObjects(without_learning_difficulties);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(learning_difficulties[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(without_learning_difficulties[i]);
  }

  let updated_full_data = shuffleObjects(full_data);

  updated_full_data = validateTrialData(updated_full_data, "stimulusKey");

  let lastThreeLeft = [];
  let lastThreeRight = [];

  for (let i = 0; i < updated_full_data.length; i++) {
    let randomNo = Math.floor(Math.random() * 2);
    updated_full_data[i].visibility = "none";

    // Check if the last three faces on each side were the same
    if (lastThreeLeft.length === 3 && lastThreeLeft.every(face => face === "Happy")) {
      randomNo = 1; // Force the left face to be Sad
    } else if (lastThreeRight.length === 3 && lastThreeRight.every(face => face === "Happy")) {
      randomNo = 0; // Force the right face to be Sad
    }

    if (randomNo === 0) {
      updated_full_data[i].leftClickerFace = "Happy";
      updated_full_data[i].rightClickerFace = "Sad";
      lastThreeLeft.push("Happy");
      lastThreeRight.push("Sad");
    } else {
      updated_full_data[i].rightClickerFace = "Happy";
      updated_full_data[i].leftClickerFace = "Sad";
      lastThreeLeft.push("Sad");
      lastThreeRight.push("Happy");
    }

    // Keep only the last three faces on each side
    if (lastThreeLeft.length > 3) {
      lastThreeLeft.shift();
    }
    if (lastThreeRight.length > 3) {
      lastThreeRight.shift();
    }

    updated_full_data[i].accuracy = 100;
  }


  updated_full_data[0].visibility = "block";

  return updated_full_data;
}
