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
export function genderAndToy(male_toy, female_toy, trials){
    
    /*accuracy: 100
    gender: "male.jpg"
    happyFacePosition: "Right"
    image: "T_M01.jpg"
    randomNo: 1
    sadFacePosition: "Left"
    visibility: "none" */

    let toy_stimuli_male_toy = [
        { accuracy: 100, image: "T_M01.jpg", gender: male_toy },
        { accuracy: 100, image: "T_M02.jpg", gender: male_toy },
        { accuracy: 100, image: "T_M03.jpg", gender: male_toy },
        { accuracy: 100, image: "T_M04.jpg", gender: male_toy },
        { accuracy: 100, image: "T_M05.jpg", gender: male_toy },
    ];

    let toy_stimuli_female_toy = [
        { accuracy: 100, image: "T_F01.jpg", gender: female_toy },
        { accuracy: 100, image: "T_F02.jpg", gender: female_toy },
        { accuracy: 100, image: "T_F03.jpg", gender: female_toy },
        { accuracy: 100, image: "T_F04.jpg", gender: female_toy },
        { accuracy: 100, image: "T_F05.jpg", gender: female_toy },    
    ];

    let full_data = []

    toy_stimuli_male_toy = shuffleObjects(toy_stimuli_male_toy);
    toy_stimuli_female_toy = shuffleObjects(toy_stimuli_female_toy);

    for (let i = 0; i < trials / 2; i++) {
        full_data.push(toy_stimuli_male_toy[i])
    }
    for (let i = 0; i < trials / 2; i++) {
        full_data.push(toy_stimuli_female_toy[i])
    }

    for(let i = 0; i < full_data.length; i++){
        //setting the visibility to block for the first data
        let randomNo = Math.floor(Math.random() * 2);
        full_data[i].visibility = "none";
        
        //Setting the position of the clicker faces randomized
        full_data[i].randomNo = randomNo;
        if (randomNo === 0) {
            full_data[i].sadFacePosition = "Left";
            full_data[i].happyFacePosition = "Right"
        } else {
            full_data[i].sadFacePosition = "Right";
            full_data[i].happyFacePosition = "Left";
        }

        full_data[i].accuracy = 100;
    }
    
    let updated_full_data = shuffleObjects(full_data)
    updated_full_data[0].visibility = "block"

    return updated_full_data
}