import validateTrialData from "../validateTrials/validateTrialDataIBT";

function shuffleObjects(array) {
  for (var a = 0; a < array.length; a++) {
    var x = array[a];
    var y = Math.floor(Math.random() * (a + 1));
    array[a] = array[y];
    array[y] = x;
  }
  return array;
}

//Current limit - 10 trials
export function genderAndToy(male_toy, female_toy, trials) {
  /*accuracy: 100
    gender: "male.jpg"
    maleFacePosition: "Right"
    image: "T_M01.jpg"
    randomNo: 1
    femaleFacePosition: "Left"
    visibility: "none" */

  let toy_stimuli_male_toy = [
    { accuracy: 100, image: "T_M01.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M02.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M03.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M04.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M05.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M01.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M02.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M03.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M04.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M05.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M01.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M02.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M03.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M04.jpg", stimulusGender: male_toy },
    { accuracy: 100, image: "T_M05.jpg", stimulusGender: male_toy },
  ];

  let toy_stimuli_female_toy = [
    { accuracy: 100, image: "T_F01.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F02.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F03.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F04.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F05.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F01.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F02.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F03.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F04.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F05.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F01.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F02.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F03.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F04.jpg", stimulusGender: female_toy },
    { accuracy: 100, image: "T_F05.jpg", stimulusGender: female_toy },
  ];

  let full_data = [];

  toy_stimuli_male_toy = shuffleObjects(toy_stimuli_male_toy);
  toy_stimuli_female_toy = shuffleObjects(toy_stimuli_female_toy);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(toy_stimuli_male_toy[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(toy_stimuli_female_toy[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerGender = "Male";
      full_data[i].rightClickerGender = "Female";
    } else {
      full_data[i].rightClickerGender = "Male";
      full_data[i].leftClickerGender = "Female";
    }

    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "gender");

  updated_full_data[0].visibility = "block";
  return updated_full_data;
}

// !HERE
export function genderAndClothing(male_clothing, female_clothing, trials) {
  let female_clothing_images = [
    { accuracy: 100, image: "CL_F01.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F02.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F03.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F04.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F01.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F02.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F03.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F04.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F01.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F02.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F03.jpg", stimulusGender: female_clothing },
    { accuracy: 100, image: "CL_F04.jpg", stimulusGender: female_clothing },
  ];

  let male_clothing_images = [
    { accuracy: 100, image: "CL_M01.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M02.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M03.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M04.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M01.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M02.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M03.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M04.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M01.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M02.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M03.jpg", stimulusGender: male_clothing },
    { accuracy: 100, image: "CL_M04.jpg", stimulusGender: male_clothing },
  ];
  let full_data = [];

  let images_male_clothing = shuffleObjects(male_clothing_images);
  let images_female_clothing = shuffleObjects(female_clothing_images);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_male_clothing[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_female_clothing[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerGender = "Male";
      full_data[i].rightClickerGender = "Female";
    } else {
      full_data[i].rightClickerGender = "Male";
      full_data[i].leftClickerGender = "Female";
    }

    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "gender");

  updated_full_data[0].visibility = "block";
  return updated_full_data;
}

// !HERE
export function genderAndSubject(math, reading, trials) {
  let female_reading_images = [
    { accuracy: 100, image: "Reading_01.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_02.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_03.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_04.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_01.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_02.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_03.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_04.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_01.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_02.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_03.jpg", stimulusGender: reading },
    { accuracy: 100, image: "Reading_04.jpg", stimulusGender: reading },
  ];
  let male_math_images = [
    { accuracy: 100, image: "Math_01.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_02.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_03.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_04.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_01.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_02.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_03.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_04.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_01.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_02.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_03.jpg", stimulusGender: math },
    { accuracy: 100, image: "Math_04.jpg", stimulusGender: math },
  ];
  let full_data = [];

  let images_male_math = shuffleObjects(male_math_images);
  let images_female_reading = shuffleObjects(female_reading_images);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_male_math[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_female_reading[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerGender = "Male";
      full_data[i].rightClickerGender = "Female";
    } else {
      full_data[i].rightClickerGender = "Male";
      full_data[i].leftClickerGender = "Female";
    }

    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "gender");

  updated_full_data[0].visibility = "block";
  return updated_full_data;
}

export function genderAndRoles(office, kitchen, trials) {
  let office_images = [
    { accuracy: 100, image: "W01-chair.jpg", stimulusGender: office },
    { accuracy: 100, image: "W02-computer.jpg", stimulusGender: office },
    { accuracy: 100, image: "W03-desk.jpg", stimulusGender: office },
    { accuracy: 100, image: "W04-filecabinet.jpg", stimulusGender: office },
    { accuracy: 100, image: "W05-pen.jpg", stimulusGender: office },
    { accuracy: 100, image: "W06-phone.jpg", stimulusGender: office },
    { accuracy: 100, image: "W01-chair.jpg", stimulusGender: office },
    { accuracy: 100, image: "W02-computer.jpg", stimulusGender: office },
    { accuracy: 100, image: "W03-desk.jpg", stimulusGender: office },
    { accuracy: 100, image: "W04-filecabinet.jpg", stimulusGender: office },
    { accuracy: 100, image: "W05-pen.jpg", stimulusGender: office },
    { accuracy: 100, image: "W06-phone.jpg", stimulusGender: office },
    { accuracy: 100, image: "W01-chair.jpg", stimulusGender: office },
    { accuracy: 100, image: "W02-computer.jpg", stimulusGender: office },
    { accuracy: 100, image: "W03-desk.jpg", stimulusGender: office },
    { accuracy: 100, image: "W04-filecabinet.jpg", stimulusGender: office },
    { accuracy: 100, image: "W05-pen.jpg", stimulusGender: office },
    { accuracy: 100, image: "W06-phone.jpg", stimulusGender: office },
  ];
  let kitchen_images = [
    { accuracy: 100, image: "H01-cookerhood.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H02-cuttingboard.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H03-pan.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H04-refrigerator.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H05-spatula.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H06-washingsink.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H01-cookerhood.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H02-cuttingboard.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H03-pan.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H04-refrigerator.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H05-spatula.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H06-washingsink.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H01-cookerhood.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H02-cuttingboard.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H03-pan.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H04-refrigerator.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H05-spatula.jpg", stimulusGender: kitchen },
    { accuracy: 100, image: "H06-washingsink.jpg", stimulusGender: kitchen },
  ];
  let full_data = [];

  let images_office = shuffleObjects(office_images);
  let images_kitchen = shuffleObjects(kitchen_images);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_office[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_kitchen[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerGender = "Male";
      full_data[i].rightClickerGender = "Female";
    } else {
      full_data[i].rightClickerGender = "Male";
      full_data[i].leftClickerGender = "Female";
    }

    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "gender");

  updated_full_data[0].visibility = "block";
  return updated_full_data;
}

// !HERE
export function genderAndColor(blue, pink, trials) {
  let blue_images = [
    { accuracy: 100, image: "blue1.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue2.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue3.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue4.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue1.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue2.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue3.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue4.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue1.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue2.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue3.jpg", stimulusGender: blue },
    { accuracy: 100, image: "blue4.jpg", stimulusGender: blue },
  ];
  let pink_images = [
    { accuracy: 100, image: "pink1.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink2.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink3.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink4.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink1.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink2.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink3.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink4.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink1.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink2.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink3.jpg", stimulusGender: pink },
    { accuracy: 100, image: "pink4.jpg", stimulusGender: pink },
  ];
  let full_data = [];

  let images_blue = shuffleObjects(blue_images);
  let images_pink = shuffleObjects(pink_images);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_blue[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_pink[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerGender = "Male";
      full_data[i].rightClickerGender = "Female";
    } else {
      full_data[i].rightClickerGender = "Male";
      full_data[i].leftClickerGender = "Female";
    }

    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "gender");

  updated_full_data[0].visibility = "block";
  return updated_full_data;
}
