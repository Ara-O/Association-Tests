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
function generateStimulusRace(stimulusData, white, black, trials, isSwitched = false) {
    if (!isSwitched) {
        const selectedData = []
        //looping through the stimulus data and assigning the white key to images with W in them, and black for images with B in them
        stimulusData.forEach((stimulus) => {
            if (stimulus.image[0] === "W" || stimulus.image[0] === "H") {
                stimulus.key = white
            } else if (stimulus.image[0] === "B" || stimulus.image[0] === "S") {
                stimulus.key = black;
            }
        })

        //filters stimuluses for male and for female and sorts them into separate arrays
        const data = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === white));
        const data2 = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === black));

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
            if (stimulus.image[0] === "W" || stimulus.image[0] === "S") {
                stimulus.key = white
            } else if (stimulus.image[0] === "B" || stimulus.image[0] === "H") {
                stimulus.key = black;
            }
        })

        const data = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === white));
        const data2 = shuffleObjects(stimulusData.filter((stimulus) => stimulus.key === black));

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
function testData_Block1(white, black, trials) {
    const raceDataFull = [
        { accuracy: 100, image: "B_F01.jpg" },
        { accuracy: 100, image: "B_F02.jpg" },
        { accuracy: 100, image: "B_F03.jpg" },
        { accuracy: 100, image: "B_F04.jpg" },
        { accuracy: 100, image: "B_F05.jpg" },
        { accuracy: 100, image: "B_F06.jpg" },
        { accuracy: 100, image: "B_F07.jpg" },
        { accuracy: 100, image: "B_F08.jpg" },
        { accuracy: 100, image: "B_F09.jpg" },
        { accuracy: 100, image: "B_F10.jpg" },
        { accuracy: 100, image: "B_F11.jpg" },
        { accuracy: 100, image: "B_M01.jpg" },
        { accuracy: 100, image: "B_M02.jpg" },
        { accuracy: 100, image: "B_M03.jpg" },
        { accuracy: 100, image: "B_M04.jpg" },
        { accuracy: 100, image: "B_M05.jpg" },
        { accuracy: 100, image: "B_M06.jpg" },
        { accuracy: 100, image: "B_M07.jpg" },
        { accuracy: 100, image: "B_M08.jpg" },
        { accuracy: 100, image: "B_M09.jpg" },
        { accuracy: 100, image: "B_M10.jpg" },
        { accuracy: 100, image: "B_M11.jpg" },
        { accuracy: 100, image: "W_F01.jpg" },
        { accuracy: 100, image: "W_F02.jpg" },
        { accuracy: 100, image: "W_F03.jpg" },
        { accuracy: 100, image: "W_F04.jpg" },
        { accuracy: 100, image: "W_F05.jpg" },
        { accuracy: 100, image: "W_F06.jpg" },
        { accuracy: 100, image: "W_F07.jpg" },
        { accuracy: 100, image: "W_F08.jpg" },
        { accuracy: 100, image: "W_F09.jpg" },
        { accuracy: 100, image: "W_F10.jpg" },
        { accuracy: 100, image: "W_M01.jpg" },
        { accuracy: 100, image: "W_M02.jpg" },
        { accuracy: 100, image: "W_M03.jpg" },
        { accuracy: 100, image: "W_M04.jpg" },
        { accuracy: 100, image: "W_M05.jpg" },
        { accuracy: 100, image: "W_M06.jpg" },
        { accuracy: 100, image: "W_M07.jpg" },
        { accuracy: 100, image: "W_M08.jpg" },
        { accuracy: 100, image: "W_M09.jpg" },
    ]
    const childImages = [
        { accuracy: 100, image: "B_CF01.jpg" },
        { accuracy: 100, image: "B_CF02.jpg" },
        { accuracy: 100, image: "B_CF03.jpg" },
        { accuracy: 100, image: "B_CM01.jpg" },
        { accuracy: 100, image: "B_CM02.jpg" },
        { accuracy: 100, image: "B_CM03.jpg" },
        { accuracy: 100, image: "W_CF01.jpg" },
        { accuracy: 100, image: "W_CF02.jpg" },
        { accuracy: 100, image: "W_CF03.jpg" },
        { accuracy: 100, image: "W_CM01.jpg" },
        { accuracy: 100, image: "W_CM02.jpg" },
        { accuracy: 100, image: "W_CM03.jpg" },
    ]

    //slicing off 40 so theres a higher chance a child's image will show
    const shuffledStimuli = shuffleObjects(raceDataFull).slice(-20);
    const testData = generateStimulusRace([...shuffledStimuli, ...childImages], white, black, trials);
    testData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between White faces and Black faces"
    })
    console.log(testData)
    return testData

}

//!Work on sad and happy faces - get 5 happy and 5 sad
function testData_Block2(happy, sad) {
    const smileyImages = [
        { accuracy: 100, image: "H_F01.jpg", key: happy },
        { accuracy: 100, image: "H_F02.jpg", key: happy },
        { accuracy: 100, image: "H_F03.jpg", key: happy },
        { accuracy: 100, image: "H_F04.jpg", key: happy },
        { accuracy: 100, image: "H_F05.jpg", key: happy },
        { accuracy: 100, image: "S_F01.jpg", key: sad },
        { accuracy: 100, image: "S_F02.jpg", key: sad },
        { accuracy: 100, image: "S_F03.jpg", key: sad },
        { accuracy: 100, image: "S_F04.jpg", key: sad },
        { accuracy: 100, image: "S_F05.jpg", key: sad },
    ]

    const newData = shuffleObjects(smileyImages);
    newData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between happy faces or sad faces"
    })

    console.log(newData)

    return newData;
}

// Click E for Male and Female toys, and I for Female and Male toys
//  IAT block 3 and 4
function testData_Block3(white_happy, black_sad, trials) {
    const raceDataFull = [
        { accuracy: 100, image: "B_F01.jpg" },
        { accuracy: 100, image: "B_F02.jpg" },
        { accuracy: 100, image: "B_F03.jpg" },
        { accuracy: 100, image: "B_F04.jpg" },
        { accuracy: 100, image: "B_F05.jpg" },
        { accuracy: 100, image: "B_F06.jpg" },
        { accuracy: 100, image: "B_F07.jpg" },
        { accuracy: 100, image: "B_F08.jpg" },
        { accuracy: 100, image: "B_F09.jpg" },
        { accuracy: 100, image: "B_F10.jpg" },
        { accuracy: 100, image: "B_F11.jpg" },
        { accuracy: 100, image: "B_M01.jpg" },
        { accuracy: 100, image: "B_M02.jpg" },
        { accuracy: 100, image: "B_M03.jpg" },
        { accuracy: 100, image: "B_M04.jpg" },
        { accuracy: 100, image: "B_M05.jpg" },
        { accuracy: 100, image: "B_M06.jpg" },
        { accuracy: 100, image: "B_M07.jpg" },
        { accuracy: 100, image: "B_M08.jpg" },
        { accuracy: 100, image: "B_M09.jpg" },
        { accuracy: 100, image: "B_M10.jpg" },
        { accuracy: 100, image: "B_M11.jpg" },
        { accuracy: 100, image: "W_F01.jpg" },
        { accuracy: 100, image: "W_F02.jpg" },
        { accuracy: 100, image: "W_F03.jpg" },
        { accuracy: 100, image: "W_F04.jpg" },
        { accuracy: 100, image: "W_F05.jpg" },
        { accuracy: 100, image: "W_F06.jpg" },
        { accuracy: 100, image: "W_F07.jpg" },
        { accuracy: 100, image: "W_F08.jpg" },
        { accuracy: 100, image: "W_F09.jpg" },
        { accuracy: 100, image: "W_F10.jpg" },
        { accuracy: 100, image: "W_M01.jpg" },
        { accuracy: 100, image: "W_M02.jpg" },
        { accuracy: 100, image: "W_M03.jpg" },
        { accuracy: 100, image: "W_M04.jpg" },
        { accuracy: 100, image: "W_M05.jpg" },
        { accuracy: 100, image: "W_M06.jpg" },
        { accuracy: 100, image: "W_M07.jpg" },
        { accuracy: 100, image: "W_M08.jpg" },
        { accuracy: 100, image: "W_M09.jpg" },
        { accuracy: 100, image: "B_CF01.jpg" },
        { accuracy: 100, image: "B_CF02.jpg" },
        { accuracy: 100, image: "B_CF03.jpg" },
        { accuracy: 100, image: "B_CM01.jpg" },
        { accuracy: 100, image: "B_CM02.jpg" },
        { accuracy: 100, image: "B_CM03.jpg" },
        { accuracy: 100, image: "W_CF01.jpg" },
        { accuracy: 100, image: "W_CF02.jpg" },
        { accuracy: 100, image: "W_CF03.jpg" },
        { accuracy: 100, image: "W_CM01.jpg" },
        { accuracy: 100, image: "W_CM02.jpg" },
        { accuracy: 100, image: "W_CM03.jpg" },
    ]

    const smileyImages = [
        { accuracy: 100, image: "H_F01.jpg" },
        { accuracy: 100, image: "H_F02.jpg" },
        { accuracy: 100, image: "H_F03.jpg" },
        { accuracy: 100, image: "H_F04.jpg" },
        { accuracy: 100, image: "H_F05.jpg" },
        { accuracy: 100, image: "S_F01.jpg" },
        { accuracy: 100, image: "S_F02.jpg" },
        { accuracy: 100, image: "S_F03.jpg" },
        { accuracy: 100, image: "S_F04.jpg" },
        { accuracy: 100, image: "S_F05.jpg" },
    ]

    const shuffledStimuli = shuffleObjects(raceDataFull).slice(-20);
    const fullData = generateStimulusRace([...shuffledStimuli, ...smileyImages], white_happy, black_sad, trials);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "White faces/Happy faces are grouped together, while Black faces/Sad faces are grouped together"
    })

    console.log(fullData)

    return fullData
}

// IAT block 6 and 7
function testData_Block4(white_sad, black_happy, trials) {
    const raceDataFull = [
        { accuracy: 100, image: "B_F01.jpg" },
        { accuracy: 100, image: "B_F02.jpg" },
        { accuracy: 100, image: "B_F03.jpg" },
        { accuracy: 100, image: "B_F04.jpg" },
        { accuracy: 100, image: "B_F05.jpg" },
        { accuracy: 100, image: "B_F06.jpg" },
        { accuracy: 100, image: "B_F07.jpg" },
        { accuracy: 100, image: "B_F08.jpg" },
        { accuracy: 100, image: "B_F09.jpg" },
        { accuracy: 100, image: "B_F10.jpg" },
        { accuracy: 100, image: "B_F11.jpg" },
        { accuracy: 100, image: "B_M01.jpg" },
        { accuracy: 100, image: "B_M02.jpg" },
        { accuracy: 100, image: "B_M03.jpg" },
        { accuracy: 100, image: "B_M04.jpg" },
        { accuracy: 100, image: "B_M05.jpg" },
        { accuracy: 100, image: "B_M06.jpg" },
        { accuracy: 100, image: "B_M07.jpg" },
        { accuracy: 100, image: "B_M08.jpg" },
        { accuracy: 100, image: "B_M09.jpg" },
        { accuracy: 100, image: "B_M10.jpg" },
        { accuracy: 100, image: "B_M11.jpg" },
        { accuracy: 100, image: "W_F01.jpg" },
        { accuracy: 100, image: "W_F02.jpg" },
        { accuracy: 100, image: "W_F03.jpg" },
        { accuracy: 100, image: "W_F04.jpg" },
        { accuracy: 100, image: "W_F05.jpg" },
        { accuracy: 100, image: "W_F06.jpg" },
        { accuracy: 100, image: "W_F07.jpg" },
        { accuracy: 100, image: "W_F08.jpg" },
        { accuracy: 100, image: "W_F09.jpg" },
        { accuracy: 100, image: "W_F10.jpg" },
        { accuracy: 100, image: "W_M01.jpg" },
        { accuracy: 100, image: "W_M02.jpg" },
        { accuracy: 100, image: "W_M03.jpg" },
        { accuracy: 100, image: "W_M04.jpg" },
        { accuracy: 100, image: "W_M05.jpg" },
        { accuracy: 100, image: "W_M06.jpg" },
        { accuracy: 100, image: "W_M07.jpg" },
        { accuracy: 100, image: "W_M08.jpg" },
        { accuracy: 100, image: "W_M09.jpg" },
        { accuracy: 100, image: "B_CF01.jpg" },
        { accuracy: 100, image: "B_CF02.jpg" },
        { accuracy: 100, image: "B_CF03.jpg" },
        { accuracy: 100, image: "B_CM01.jpg" },
        { accuracy: 100, image: "B_CM02.jpg" },
        { accuracy: 100, image: "B_CM03.jpg" },
        { accuracy: 100, image: "W_CF01.jpg" },
        { accuracy: 100, image: "W_CF02.jpg" },
        { accuracy: 100, image: "W_CF03.jpg" },
        { accuracy: 100, image: "W_CM01.jpg" },
        { accuracy: 100, image: "W_CM02.jpg" },
        { accuracy: 100, image: "W_CM03.jpg" },
    ]

    const smileyImages = [
        { accuracy: 100, image: "H_F01.jpg" },
        { accuracy: 100, image: "H_F02.jpg" },
        { accuracy: 100, image: "H_F03.jpg" },
        { accuracy: 100, image: "H_F04.jpg" },
        { accuracy: 100, image: "H_F05.jpg" },
        { accuracy: 100, image: "S_F01.jpg" },
        { accuracy: 100, image: "S_F02.jpg" },
        { accuracy: 100, image: "S_F03.jpg" },
        { accuracy: 100, image: "S_F04.jpg" },
        { accuracy: 100, image: "S_F05.jpg" },
    ]

    const shuffledStimuli = shuffleObjects(raceDataFull).slice(-20);
    const fullData = generateStimulusRace([...shuffledStimuli, ...smileyImages], white_sad, black_happy, trials, true);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "White faces/Sad faces are grouped together, while Black faces/Happy faces are grouped together"
    })
    console.log(fullData)

    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }