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


  let lastThree = []

  const LEFT = 0
  const RIGHT = 1

  for (let i = 0; i < updated_full_data.length; i++) {
    let randomNo = Math.floor(Math.random() * 2);
    updated_full_data[i].visibility = "none";

    // Check if the last three faces on each side were the same
    if (
      lastThree.length === 3 &&
      lastThree.every((position) => position === "Left")
    ) {
      randomNo = RIGHT; // Force the left face to be Sad
    } else if (
      lastThree.length === 3 &&
      lastThree.every((position) => position === "Right")
    ) {
      randomNo = LEFT; // Force the right face to be Sad
    }


    //If the random number is 0, then left is going to be the right answer 
    if (randomNo === LEFT) {
      updated_full_data[i].leftClickerFace = updated_full_data[i].stimulusKey;
      updated_full_data[i].rightClickerFace = updated_full_data[i].stimulusKey === "Happy" ? "Sad" : "Happy";
    } else {
      updated_full_data[i].rightClickerFace = updated_full_data[i].stimulusKey;
      updated_full_data[i].leftClickerFace = updated_full_data[i].stimulusKey === "Happy" ? "Sad" : "Happy";
    }

    //Anytime the answer is left, which it always will be if randomNo is left, then push that to the lastThree
    if (updated_full_data[i].leftClickerFace === "Sad" && updated_full_data[i].stimulusKey === "Sad") {
      lastThree.push("Left")
    }
    if (updated_full_data[i].leftClickerFace === "Happy" && updated_full_data[i].stimulusKey === "Happy") {
      lastThree.push("Left")
    }
    if (updated_full_data[i].rightClickerFace === "Sad" && updated_full_data[i].stimulusKey === "Sad") {
      lastThree.push("Right")
    }
    if (updated_full_data[i].rightClickerFace === "Happy" && updated_full_data[i].stimulusKey === "Happy") {
      lastThree.push("Right")
    }

    //Note: the code above can be refactored by moving lastThree.push(...) to the if statement above, but
    //this way is more imperative for better testing and seeing how the flow works

    // Keep only the last three faces on each side
    if (lastThree.length > 3) {
      lastThree.shift()
    }

    updated_full_data[i].accuracy = 100;
  }

  updated_full_data[0].visibility = "block";

  console.log(updated_full_data)
  return updated_full_data;
}
