import validateTrialData from "../../modules/validateTrials/validateTrialDataIBT";

function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

export function generateLdTrials(smiley_face, sad_face, trials) {
    let toy_stimuli_male_toy = [
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
        { keyword: "smiley.jpg", stimulusGender: male_toy },
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
    updated_full_data = validateTrialData(updated_full_data, "stimulusGender");


    updated_full_data[0].visibility = "block";
    return updated_full_data;
}