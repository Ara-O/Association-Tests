import validateTrialData from "../../../../modules/validateTrials/validateTrialDataIBT";

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
export default function (white, black, trials) {
  let all_stimulus_black = [
    { image: "R00_Stimuli_ChildIAT_BF-029", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BF-030", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BF-045", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-003", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-028", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-238", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BF-029", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BF-030", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BF-045", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-003", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-028", stimulusEmotion: black },
    { image: "R00_Stimuli_ChildIAT_BM-238", stimulusEmotion: black },
  ];

  let all_stimulus_white = [
    { image: "R00_Stimuli_ChildIAT_WF-006", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WF-009", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WF-011", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-015", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-034", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-036", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WF-006", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WF-009", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WF-011", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-015", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-034", stimulusEmotion: white },
    { image: "R00_Stimuli_ChildIAT_WM-036", stimulusEmotion: white },
  ];
  let ibt_data = [];

  //Starts with an object of what to push
  /*accuracy: 100
    emotion: "sad.jpg"
    happyFacePosition: "Right"
    image: "B_F05.jpg"
    randomNo: 1
    sadFacePosition: "Left"
    visibility: "none" */

  //shuffling the two data
  all_stimulus_black = shuffleObjects(all_stimulus_black);
  all_stimulus_white = shuffleObjects(all_stimulus_white);

  //Making sure there is half for both races
  for (let i = 0; i < trials / 2; i++) {
    ibt_data.push(all_stimulus_black[i]);
  }
  for (let i = 0; i < trials / 2; i++) {
    ibt_data.push(all_stimulus_white[i]);
  }

  for (let i = 0; i < ibt_data.length; i++) {
    //setting the visibility to block for the first data
    let randomNo = Math.floor(Math.random() * 2);
    ibt_data[i].visibility = "none";

    //Setting the position of the clicker faces randomized
    ibt_data[i].randomNo = randomNo;
    if (randomNo === 0) {
      ibt_data[i].leftClickerFaceEmotion = "Sad";
      ibt_data[i].rightClickerFaceEmotion = "Happy";
    } else {
      ibt_data[i].rightClickerFaceEmotion = "Sad";
      ibt_data[i].leftClickerFaceEmotion = "Happy";
    }

    ibt_data[i].accuracy = 100;
  }

  let updated_ibt_data = shuffleObjects(ibt_data);
  updated_ibt_data = validateTrialData(updated_ibt_data, "stimulusEmotion");
  updated_ibt_data[0].visibility = "block";

  return updated_ibt_data;
}
