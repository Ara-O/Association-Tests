// import getRandomImage from "../modules/getRandomImage";

function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

//Gemerate the trials for the other blocks
function generateStimulusGender(stimulusData, male, female, trials, isSwitched = false) {
    if (!isSwitched) {
        const selectedData = []
        //looping through the stimulus data and assigning the make key to images with M in them, and female for images with F in them
        stimulusData.forEach((stimulus) => {
            if (stimulus.image[2] === "M") {
                stimulus.key = male
            } else if (stimulus.image[2] === "F") {
                stimulus.key = female;
            }
        })

        //filters stimuluses for male and for female and sorts them into separate arrays
        const data = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === male));
        const data2 = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === female));

        for (let i = 0; i < trials / 2; i++) {
            //takes half of the trials of each data type and stores tham in the selected data
            selectedData.push(data[i]);
            selectedData.push(data2[i]);
        }

        const finalData = shuffleObjects(selectedData);
        return finalData
    } else {
        const selectedData = []
        stimulusData.forEach((stimulus) => {
            //seatrching for male and female toy
            if (stimulus.image[0] === "T" && stimulus.image[2] === "F") {
                stimulus.key = male
            } else if (stimulus.image[0] !== "T" && stimulus.image[2] === "M") {
                stimulus.key = male;
            } else {
                stimulus.key = female;
            }
        })
        
        const data = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === male));
        const data2 = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === female));
        
        for (let i = 0; i < trials / 2; i++) {
            //takes half of the trials of each data type and stores tham in the selected data
            selectedData.push(data[i]);
            selectedData.push(data2[i]);
        }
        const finalData = shuffleObjects(selectedData);
        return finalData
    }
}

// IAT block 1 and 5
function testData_Block1(male, female, trials) {
    const genderStimulusDataFull = [
        // { accuracy: 100, image: "B_F01.jpg" },
        // { accuracy: 100, image: "B_F02.jpg" },
        // { accuracy: 100, image: "B_F03.jpg" },
        // { accuracy: 100, image: "B_F04.jpg" },
        // { accuracy: 100, image: "B_F05.jpg" },
        // { accuracy: 100, image: "B_F06.jpg" },
        // { accuracy: 100, image: "B_F07.jpg" },
        // { accuracy: 100, image: "B_F08.jpg" },
        // { accuracy: 100, image: "B_F09.jpg" },
        // { accuracy: 100, image: "B_F10.jpg" },
        // { accuracy: 100, image: "B_F11.jpg" },
        // { accuracy: 100, image: "B_M01.jpg" },
        // { accuracy: 100, image: "B_M02.jpg" },
        // { accuracy: 100, image: "B_M03.jpg" },
        // { accuracy: 100, image: "B_M04.jpg" },
        // { accuracy: 100, image: "B_M05.jpg" },
        // { accuracy: 100, image: "B_M06.jpg" },
        // { accuracy: 100, image: "B_M07.jpg" },
        // { accuracy: 100, image: "B_M08.jpg" },
        // { accuracy: 100, image: "B_M09.jpg" },
        // { accuracy: 100, image: "B_M10.jpg" },
        // { accuracy: 100, image: "B_M11.jpg" },
        // { accuracy: 100, image: "W_F01.jpg" },
        // { accuracy: 100, image: "W_F02.jpg" },
        // { accuracy: 100, image: "W_F03.jpg" },
        // { accuracy: 100, image: "W_F04.jpg" },
        // { accuracy: 100, image: "W_F05.jpg" },
        // { accuracy: 100, image: "W_F06.jpg" },
        // { accuracy: 100, image: "W_F07.jpg" },
        // { accuracy: 100, image: "W_F08.jpg" },
        // { accuracy: 100, image: "W_F09.jpg" },
        // { accuracy: 100, image: "W_F10.jpg" },
        // { accuracy: 100, image: "W_M01.jpg" },
        // { accuracy: 100, image: "W_M02.jpg" },
        // { accuracy: 100, image: "W_M03.jpg" },
        // { accuracy: 100, image: "W_M04.jpg" },
        // { accuracy: 100, image: "W_M05.jpg" },
        // { accuracy: 100, image: "W_M06.jpg" },
        // { accuracy: 100, image: "W_M07.jpg" },
        // { accuracy: 100, image: "W_M08.jpg" },
        // { accuracy: 100, image: "W_M09.jpg" },
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
    ]
    const testData = generateStimulusGender(genderStimulusDataFull, male, female, trials);
    testData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between male faces and female faces"
    })

    // console.log(testData)

    return testData

}

// IAT 2
function testData_Block2(male_toy, female_toy) {
    const dataset = [
        { accuracy: 100, image: "T_M01.jpg", key: male_toy },
        { accuracy: 100, image: "T_M02.jpg", key: male_toy },
        { accuracy: 100, image: "T_M03.jpg", key: male_toy },
        { accuracy: 100, image: "T_M04.jpg", key: male_toy },
        { accuracy: 100, image: "T_M05.jpg", key: male_toy },
        { accuracy: 100, image: "T_F01.jpg", key: female_toy },
        { accuracy: 100, image: "T_F02.jpg", key: female_toy },
        { accuracy: 100, image: "T_F03.jpg", key: female_toy },
        { accuracy: 100, image: "T_F04.jpg", key: female_toy },
        { accuracy: 100, image: "T_F05.jpg", key: female_toy },
    ];

    const newData = shuffleObjects(dataset);
    newData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between male toys and female toys"
    })

    // console.log(newData)
    return newData;
}

//   Click E for Male and male toys, and I for Female and female toys
//   IAT block 3 and 4
function testData_Block3(male_and_toys, female_and_toys, trials) {
    const genderStimulusDataFull = [
        // { accuracy: 100, image: "B_F01.jpg" },
        // { accuracy: 100, image: "B_F02.jpg" },
        // { accuracy: 100, image: "B_F03.jpg" },
        // { accuracy: 100, image: "B_F04.jpg" },
        // { accuracy: 100, image: "B_F05.jpg" },
        // { accuracy: 100, image: "B_F06.jpg" },
        // { accuracy: 100, image: "B_F07.jpg" },
        // { accuracy: 100, image: "B_F08.jpg" },
        // { accuracy: 100, image: "B_F09.jpg" },
        // { accuracy: 100, image: "B_F10.jpg" },
        // { accuracy: 100, image: "B_F11.jpg" },
        // { accuracy: 100, image: "B_M01.jpg" },
        // { accuracy: 100, image: "B_M02.jpg" },
        // { accuracy: 100, image: "B_M03.jpg" },
        // { accuracy: 100, image: "B_M04.jpg" },
        // { accuracy: 100, image: "B_M05.jpg" },
        // { accuracy: 100, image: "B_M06.jpg" },
        // { accuracy: 100, image: "B_M07.jpg" },
        // { accuracy: 100, image: "B_M08.jpg" },
        // { accuracy: 100, image: "B_M09.jpg" },
        // { accuracy: 100, image: "B_M10.jpg" },
        // { accuracy: 100, image: "B_M11.jpg" },
        // { accuracy: 100, image: "W_F01.jpg" },
        // { accuracy: 100, image: "W_F02.jpg" },
        // { accuracy: 100, image: "W_F03.jpg" },
        // { accuracy: 100, image: "W_F04.jpg" },
        // { accuracy: 100, image: "W_F05.jpg" },
        // { accuracy: 100, image: "W_F06.jpg" },
        // { accuracy: 100, image: "W_F07.jpg" },
        // { accuracy: 100, image: "W_F08.jpg" },
        // { accuracy: 100, image: "W_F09.jpg" },
        // { accuracy: 100, image: "W_F10.jpg" },
        // { accuracy: 100, image: "W_M01.jpg" },
        // { accuracy: 100, image: "W_M02.jpg" },
        // { accuracy: 100, image: "W_M03.jpg" },
        // { accuracy: 100, image: "W_M04.jpg" },
        // { accuracy: 100, image: "W_M05.jpg" },
        // { accuracy: 100, image: "W_M06.jpg" },
        // { accuracy: 100, image: "W_M07.jpg" },
        // { accuracy: 100, image: "W_M08.jpg" },
        // { accuracy: 100, image: "W_M09.jpg" },
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
    ]
    
    const toysStimuli = [
        { accuracy: 100, image: "T_M01.jpg" },
        { accuracy: 100, image: "T_M02.jpg" },
        { accuracy: 100, image: "T_M03.jpg" },
        { accuracy: 100, image: "T_M04.jpg" },
        { accuracy: 100, image: "T_M05.jpg" },
        { accuracy: 100, image: "T_F01.jpg", },
        { accuracy: 100, image: "T_F02.jpg", },
        { accuracy: 100, image: "T_F03.jpg", },
        { accuracy: 100, image: "T_F04.jpg", },
        { accuracy: 100, image: "T_F05.jpg", },
    ]

    const shuffledStimuli = shuffleObjects(genderStimulusDataFull)
    const shuffledToys = shuffleObjects(toysStimuli);
    const fullData = generateStimulusGender([...shuffledStimuli, ...shuffledToys], male_and_toys, female_and_toys, trials);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "Male faces/Male toys are grouped together, while Female faces/Female toys are grouped together"
    })

    // console.log(fullData)
    return fullData
}

// IAT block 6 and 7
function testData_Block4(male_femaletoys, female_maletoys, trials) {
    const genderStimulusDataFull = [
        // { accuracy: 100, image: "B_F01.jpg" },
        // { accuracy: 100, image: "B_F02.jpg" },
        // { accuracy: 100, image: "B_F03.jpg" },
        // { accuracy: 100, image: "B_F04.jpg" },
        // { accuracy: 100, image: "B_F05.jpg" },
        // { accuracy: 100, image: "B_F06.jpg" },
        // { accuracy: 100, image: "B_F07.jpg" },
        // { accuracy: 100, image: "B_F08.jpg" },
        // { accuracy: 100, image: "B_F09.jpg" },
        // { accuracy: 100, image: "B_F10.jpg" },
        // { accuracy: 100, image: "B_F11.jpg" },
        // { accuracy: 100, image: "B_M01.jpg" },
        // { accuracy: 100, image: "B_M02.jpg" },
        // { accuracy: 100, image: "B_M03.jpg" },
        // { accuracy: 100, image: "B_M04.jpg" },
        // { accuracy: 100, image: "B_M05.jpg" },
        // { accuracy: 100, image: "B_M06.jpg" },
        // { accuracy: 100, image: "B_M07.jpg" },
        // { accuracy: 100, image: "B_M08.jpg" },
        // { accuracy: 100, image: "B_M09.jpg" },
        // { accuracy: 100, image: "B_M10.jpg" },
        // { accuracy: 100, image: "B_M11.jpg" },
        // { accuracy: 100, image: "W_F01.jpg" },
        // { accuracy: 100, image: "W_F02.jpg" },
        // { accuracy: 100, image: "W_F03.jpg" },
        // { accuracy: 100, image: "W_F04.jpg" },
        // { accuracy: 100, image: "W_F05.jpg" },
        // { accuracy: 100, image: "W_F06.jpg" },
        // { accuracy: 100, image: "W_F07.jpg" },
        // { accuracy: 100, image: "W_F08.jpg" },
        // { accuracy: 100, image: "W_F09.jpg" },
        // { accuracy: 100, image: "W_F10.jpg" },
        // { accuracy: 100, image: "W_M01.jpg" },
        // { accuracy: 100, image: "W_M02.jpg" },
        // { accuracy: 100, image: "W_M03.jpg" },
        // { accuracy: 100, image: "W_M04.jpg" },
        // { accuracy: 100, image: "W_M05.jpg" },
        // { accuracy: 100, image: "W_M06.jpg" },
        // { accuracy: 100, image: "W_M07.jpg" },
        // { accuracy: 100, image: "W_M08.jpg" },
        // { accuracy: 100, image: "W_M09.jpg" },
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
    ]
    const toysStimuli = [
        { accuracy: 100, image: "T_M01.jpg" },
        { accuracy: 100, image: "T_M02.jpg" },
        { accuracy: 100, image: "T_M03.jpg" },
        { accuracy: 100, image: "T_M04.jpg" },
        { accuracy: 100, image: "T_M05.jpg" },
        { accuracy: 100, image: "T_F01.jpg", },
        { accuracy: 100, image: "T_F02.jpg", },
        { accuracy: 100, image: "T_F03.jpg", },
        { accuracy: 100, image: "T_F04.jpg", },
        { accuracy: 100, image: "T_F05.jpg", },
    ]

    const shuffledStimuli = shuffleObjects(genderStimulusDataFull)
    const shuffledToys = shuffleObjects(toysStimuli);
    const fullData = generateStimulusGender([...shuffledStimuli, ...shuffledToys], male_femaletoys, female_maletoys, trials, true);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "Male faces/Female toys are grouped together, while Female faces/Male toys are grouped together"
    })

    // console.log(fullData)
    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }