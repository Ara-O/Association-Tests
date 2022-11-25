import validateTrialData from "../validateTrials/validateTrialData";

function shuffleObjects(array) {
  for (var a = 0; a < array.length; a++) {
    var x = array[a];
    var y = Math.floor(Math.random() * (a + 1));
    array[a] = array[y];
    array[y] = x;
  }
  return array;
}

//All stimuli
const male_images = [
  { accuracy: 100, image: "C_M01.jpg" },
  { accuracy: 100, image: "C_M02.jpg" },
  { accuracy: 100, image: "C_M03.jpg" },
  { accuracy: 100, image: "C_M04.jpg" },
  { accuracy: 100, image: "C_M05.jpg" },
  { accuracy: 100, image: "C_M06.jpg" },
  { accuracy: 100, image: "C_M07.jpg" },
  { accuracy: 100, image: "C_M08.jpg" },
  { accuracy: 100, image: "C_M09.jpg" },
  { accuracy: 100, image: "C_M10.jpg" },
  { accuracy: 100, image: "C_M11.jpg" },
  { accuracy: 100, image: "C_M12.jpg" },
];

const female_images = [
  { accuracy: 100, image: "C_F01.jpg" },
  { accuracy: 100, image: "C_F02.jpg" },
  { accuracy: 100, image: "C_F03.jpg" },
  { accuracy: 100, image: "C_F04.jpg" },
  { accuracy: 100, image: "C_F05.jpg" },
  { accuracy: 100, image: "C_F06.jpg" },
  { accuracy: 100, image: "C_F07.jpg" },
  { accuracy: 100, image: "C_F08.jpg" },
  { accuracy: 100, image: "C_F09.jpg" },
  { accuracy: 100, image: "C_F10.jpg" },
  { accuracy: 100, image: "C_F11.jpg" },
  { accuracy: 100, image: "C_F12.jpg" },
];

let doctor_images = [
  { accuracy: 100, image: "Doctor1.png" },
  { accuracy: 100, image: "Doctor2.png" },
  { accuracy: 100, image: "Doctor3.png" },
  { accuracy: 100, image: "Doctor4.png" },
];

const nurse_images = [
  { accuracy: 100, image: "Nurse1.png" },
  { accuracy: 100, image: "Nurse2.png" },
  { accuracy: 100, image: "Nurse3.png" },
  { accuracy: 100, image: "Nurse4.png" },
];

export function testData_Block1(male, female, trials) {
  let fullData = [];

  //Get the male images and attack the male key to it
  const images_male = JSON.parse(JSON.stringify(shuffleObjects(male_images)));
  images_male.forEach((el) => (el.key = male));

  //Get the female images and attack the female key to it
  const images_female = JSON.parse(
    JSON.stringify(shuffleObjects(female_images))
  );
  images_female.forEach((el) => (el.key = female));

  //Split the trials in half, and push two halfs of the two objects into it
  for (let i = 0; i < trials / 2; i++) {
    fullData.push(images_female[i]);
    fullData.push(images_male[i]);
  }

  //Shuffle the object
  let fullDataShuffled = shuffleObjects(fullData);
  fullData = validateTrialData(fullData);

  //Attach the visibility and description
  fullDataShuffled.forEach((el) => {
    (el.visibility = "none"),
      (el.description = "User chooses between male images and female images");
  });

  fullData[0].visibility = "block";
  console.log("Test data 1: ", fullDataShuffled);

  return fullData;
}

export function testData_Block2(doctor, nurse, trials) {
  let fullData = [];
  //! Only 8 objects, double trials if 10 trials necessary...
  const images_doctor = JSON.parse(
    JSON.stringify(shuffleObjects(doctor_images))
  );
  images_doctor.forEach((el) => (el.key = doctor));

  const images_nurse = JSON.parse(JSON.stringify(shuffleObjects(nurse_images)));
  images_nurse.forEach((el) => (el.key = nurse));

  for (let i = 0; i < trials / 2; i++) {
    fullData.push(images_doctor[i]);
    fullData.push(images_nurse[i]);
  }

  fullData = shuffleObjects(fullData);
  fullData = validateTrialData(fullData);

  fullData.forEach((el) => {
    el.visibility = "none";
    el.description = "User chooses between nurse images and doctor images";
  });
  fullData[0].visibility = "block";

  console.log("Test data 2: ", fullData);

  return fullData;
}

export function testData_Block3(
  male_doctor,
  female_nurse,
  trials,
  practice = false
) {
  let fullData = [];

  const images_male_doctor = shuffleObjects(
    JSON.parse(JSON.stringify([...male_images, ...doctor_images]))
  );
  images_male_doctor.forEach((el) => (el.key = male_doctor));

  const images_female_nurse = shuffleObjects(
    JSON.parse(JSON.stringify([...female_images, ...nurse_images]))
  );
  images_female_nurse.forEach((el) => (el.key = female_nurse));

  for (let i = 0; i < trials / 2; i++) {
    fullData.push(images_female_nurse[i]);
    fullData.push(images_male_doctor[i]);
  }

  fullData = shuffleObjects(fullData);
  fullData = validateTrialData(fullData);

  fullData.forEach((el) => {
    el.visibility = "none";
    if (practice === false) {
      el.description =
        "Male images and Doctor images are grouped together, while Female images and Nurse images are grouped together";
    } else if (practice === true) {
      el.description =
        "Practice: Male images and Doctor images are grouped together, while Female images and Nurse images are grouped together";
    }
  });

  fullData[0].visibility = "block";

  console.log("Test data 3: ", fullData);

  return fullData;
}

export function testData_Block4(
  male_nurse,
  female_doctor,
  trials,
  practice = false
) {
  let fullData = [];

  const images_male_nurse = shuffleObjects(
    JSON.parse(JSON.stringify([...male_images, ...nurse_images]))
  );
  images_male_nurse.forEach((el) => (el.key = male_nurse));

  const images_female_doctor = shuffleObjects(
    JSON.parse(JSON.stringify([...female_images, ...doctor_images]))
  );
  images_female_doctor.forEach((el) => (el.key = female_doctor));

  for (let i = 0; i < trials / 2; i++) {
    fullData.push(images_male_nurse[i]);
    fullData.push(images_female_doctor[i]);
  }

  fullData = shuffleObjects(fullData);
  fullData = validateTrialData(fullData);

  fullData.forEach((el) => {
    el.visibility = "none";
    if (practice === false) {
      el.description =
        "Male images and Nurse images are grouped together, while Female images and Doctor images are grouped together";
    } else if (practice === true) {
      el.description =
        "Practice: Male images and Nurse images are grouped together, while Female images and Doctor images are grouped together";
    }
  });

  fullData[0].visibility = "block";
  console.log("Test data 4: ", fullData);

  return fullData;
}
