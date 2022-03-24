import getRandomImage from "../modules/getRandomImage";

function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}


// IAT block 1 and 5
function testData_Block1(male, female, trials) {
    let i = 0;
    const testData = [];

    while (i < trials) {
        let dontPush = false;
        let objToBePushed = {};
        let isImg;
        let isImgVal = Math.floor(Math.random() * 2);
        isImgVal == 1 ? isImg = true : isImg = false;

        if (isImg) {
            objToBePushed.isImg = true;
            //Get the random image and the key 
            const { fullImgLink, key } = getRandomImage(male, female);
            objToBePushed.image = fullImgLink;
            objToBePushed.key = key;

        } else if (isImg == 0) {
            objToBePushed.isImg = false;
            //Get the random name and key
            const { chosenName } = getRandomImage(male, female);
            objToBePushed.name = chosenName.name;
            objToBePushed.key = chosenName.key;
        }

        i === 0 ? objToBePushed.visibility = 'block' : objToBePushed.visibility = "none";
        objToBePushed.accuracy = 100;
        testData.forEach(function (obj) {
            if (obj.isImg === false && obj.name === objToBePushed.name) {
                dontPush = true;
            } else if (obj.isImg === true && obj.image === objToBePushed.image) {
                dontPush = true;
            }
        })

        testData.push(objToBePushed);
        i++;

        if (dontPush === true) {
            testData.pop();
            i--;
        }
    }

    return testData

}

// IAT 2

function testData_Block2(home, career) {
    const dataset = [
        { name: "Office", key: career, accuracy: 100, visibility: "none" },
        { name: "Desk", key: career, accuracy: 100, visibility: "none" },
        { name: "Garden", key: home, accuracy: 100, visibility: "none" },
        { name: "Marriage", key: home, accuracy: 100, visibility: "none" },
        { name: "Briefcase", key: career, accuracy: 100, visibility: "none" },
        { name: "Boardroom", key: career, accuracy: 100, visibility: "none" },
        { name: "Kitchen", key: home, accuracy: 100, visibility: "none" },
        { name: "Manager", key: career, accuracy: 100, visibility: "none" },
        { name: "Family", key: home, accuracy: 100, visibility: "none" },
        { name: "Children", key: home, accuracy: 100, visibility: "none" },
    ];

    const newData = shuffleObjects(dataset);
    newData[0].visibility = "block";

    return newData;
}

//   Click E for Male and Career, and I for Female and Home
//   IAT block 3 and 4
function testData_Block3(male_career, female_home, trials) {
    const fullData = [];
    const chosenData = [];
    fullData.push(
        { isImg: false, name: "Office", key: male_career },
        { isImg: false, name: "Desk", key: male_career },
        { isImg: false, name: "Garden", key: female_home },
        { isImg: false, name: "Marriage", key: female_home },
        { isImg: false, name: "Briefcase", key: male_career },
        { isImg: false, name: "Boardroom", key: male_career },
        { isImg: false, name: "Kitchen", key: female_home },
        { isImg: false, name: "Manager", key: male_career },
        { isImg: false, name: "Family", key: female_home },
        { isImg: false, name: "Children", key: female_home }
    );

    //adds data from the test datablock 1 to the full data
    let data = testData_Block1(male_career, female_home, 11);

    data.shift();

    fullData.push(...data);
   // console.log(fullData)

    fullData.forEach((data) => {
        data.visibility = "none"
        data.accuracy = 100;
    })

    shuffleObjects(fullData)
    let trial = 0;
    let numOfFirst = 0, numOfSecond = 0;
    do {
        let currentTrial = fullData[Math.floor(Math.random() * fullData.length)];
        if (currentTrial.key === male_career && numOfFirst < Math.floor(trials / 2)) {
            numOfFirst++
            chosenData.push(Object.assign({}, currentTrial));
            trial++
        } else if (currentTrial.key === female_home && numOfSecond < Math.floor(trials / 2)) {
            numOfSecond++
            chosenData.push(Object.assign({}, currentTrial));
            trial++
        }
    } while (trial < trials);
    shuffleObjects(chosenData);
    chosenData.forEach((trial, index) => {
        index == 0 ? trial.visibility = "block" : trial.visibility = "none";
    })

    //console.log(chosenData)
    return chosenData
}

// IAT block 6 and 7
function testData_Block4(male_home, female_career, trials) {
    const fullData = [];
    const chosenData = [];
    fullData.push(
        { isImg: false, name: "Office", key: female_career },
        { isImg: false, name: "Desk", key: female_career },
        { isImg: false, name: "Garden", key: male_home },
        { isImg: false, name: "Marriage", key: male_home },
        { isImg: false, name: "Briefcase", key: female_career },
        { isImg: false, name: "Boardroom", key: female_career },
        { isImg: false, name: "Kitchen", key: male_home },
        { isImg: false, name: "Manager", key: female_career },
        { isImg: false, name: "Family", key: male_home },
        { isImg: false, name: "Children", key: male_home },

    )

    //Loops 10 times, then adds t the fulldata a random image, name, and dataset_2
    let data = testData_Block1(male_home, female_career, 11);
    data.shift();
    fullData.push(...data);
    fullData.forEach((data) => {
        data.visibility = "none"
        data.accuracy = 100;
    })

    shuffleObjects(fullData)

    let trial = 0;
    let numOfFirst = 0, numOfSecond = 0;
    do {
        let currentTrial = fullData[Math.floor(Math.random() * fullData.length)];
        if (currentTrial.key === male_home && numOfFirst < Math.floor(trials / 2)) {
            numOfFirst++
            chosenData.push(Object.assign({}, currentTrial));
            trial++
        } else if (currentTrial.key === female_career && numOfSecond < Math.floor(trials / 2)) {
            numOfSecond++
            chosenData.push(Object.assign({}, currentTrial));
            trial++
        }
    } while (trial < trials);
    shuffleObjects(chosenData);
    chosenData.forEach((trial, index) => {
        index == 0 ? trial.visibility = "block" : trial.visibility = "none";
    })
    //console.log(chosenData)
    return chosenData


}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }