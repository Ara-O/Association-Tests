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

export function catAndDog(dog, cat, trials) {
  let cat_images = [
    { accuracy: 100, image: "Cat1.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat2.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat3.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat4.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat1.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat2.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat3.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat4.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat1.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat2.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat3.jpg", stimulusEmotion: cat },
    { accuracy: 100, image: "Cat4.jpg", stimulusEmotion: cat },
  ];
  let dog_images = [
    { accuracy: 100, image: "Dog1.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog2.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog3.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog4.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog1.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog2.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog3.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog4.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog1.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog2.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog3.jpg", stimulusEmotion: dog },
    { accuracy: 100, image: "Dog4.jpg", stimulusEmotion: dog },
  ];
  let full_data = [];

  let images_cat = shuffleObjects(cat_images);
  let images_dog = shuffleObjects(dog_images);

  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_cat[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    full_data.push(images_dog[i]);
  }

  for (let i = 0; i < full_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    full_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    full_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      full_data[i].leftClickerFaceEmotion = "Sad";
      full_data[i].rightClickerFaceEmotion = "Happy";
    } else {
      full_data[i].rightClickerFaceEmotion = "Sad";
      full_data[i].leftClickerFaceEmotion = "Happy";
    }
    full_data[i].accuracy = 100;
  }

  let updated_full_data = shuffleObjects(full_data);
  updated_full_data = validateTrialData(updated_full_data, "stimulusEmotion");

  updated_full_data[0].visibility = "block";
  // console.log(updated_full_data)
  return updated_full_data;
}
