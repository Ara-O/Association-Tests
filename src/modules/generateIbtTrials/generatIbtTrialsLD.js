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

export function generateLdTrials(difficulties_face, no_difficulties_face, trials) {
    let learning_difficulties = [
        { keyword: "Slow Learner", stimulusKey: difficulties_face },
        { keyword: "Academic Challenges", stimulusKey: difficulties_face },
        { keyword: "Educational Barriers", stimulusKey: difficulties_face },
        { keyword: "Difficulties Learning", stimulusKey: difficulties_face },
        //Duplicated
        { keyword: "Slow Learner", stimulusKey: difficulties_face },
        { keyword: "Academic Challenges", stimulusKey: difficulties_face },
        { keyword: "Educational Barriers", stimulusKey: difficulties_face },
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

    for (let i = 0; i < full_data.length; i++) {
        //setting the visibility to block for the first data
        let randomNo = Math.floor(Math.random() * 2);
        full_data[i].visibility = "none";

        //Setting the position of the clicker faces randomized
        full_data[i].randomNo = randomNo;
        if (randomNo === 0) {
            full_data[i].leftClickerFace = "Smiley";
            full_data[i].rightClickerFace = "Sad";
        } else {
            full_data[i].rightClickerFace = "Smiley";
            full_data[i].leftClickerFace = "Sad";
        }

        full_data[i].accuracy = 100;
    }

    let updated_full_data = shuffleObjects(full_data);

    updated_full_data = validateTrialData(updated_full_data, "stimulusKey");


    updated_full_data[0].visibility = "block";

    console.log(updated_full_data)
    return updated_full_data;
}