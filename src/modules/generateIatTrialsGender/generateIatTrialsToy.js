import validateTrialData from "../validateTrialData";

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
    { accuracy: 100, image: "C_M12.jpg" }
]

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
]

const male_toy_images = [
    { accuracy: 100, image: "T_M01.jpg" },
    { accuracy: 100, image: "T_M02.jpg" },
    { accuracy: 100, image: "T_M03.jpg" },
    { accuracy: 100, image: "T_M04.jpg" },
    { accuracy: 100, image: "T_M05.jpg" },
    { accuracy: 100, image: "T_M01.jpg" },
    { accuracy: 100, image: "T_M02.jpg" },
    { accuracy: 100, image: "T_M03.jpg" },
    { accuracy: 100, image: "T_M04.jpg" },
    { accuracy: 100, image: "T_M05.jpg" },
]

const female_toy_images = [
    { accuracy: 100, image: "T_F01.jpg" },
    { accuracy: 100, image: "T_F02.jpg" },
    { accuracy: 100, image: "T_F03.jpg" },
    { accuracy: 100, image: "T_F04.jpg" },
    { accuracy: 100, image: "T_F05.jpg" },
    { accuracy: 100, image: "T_F01.jpg" },
    { accuracy: 100, image: "T_F02.jpg" },
    { accuracy: 100, image: "T_F03.jpg" },
    { accuracy: 100, image: "T_F04.jpg" },
    { accuracy: 100, image: "T_F05.jpg" },
]
// IAT block 1 and 5
function testData_Block1(male, female, trials) {
    let fullData = [];

    //Get the male images and attack the male key to it
    const images_male = JSON.parse(JSON.stringify(shuffleObjects(male_images)));
    images_male.forEach((el) => el.key = male)

    //Get the female images and attack the female key to it
    const images_female = JSON.parse(JSON.stringify(shuffleObjects(female_images)))
    images_female.forEach((el) => el.key = female)

    //Split the trials in half, and push two halfs of the two objects into it
    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female[i]);
        fullData.push(images_male[i]);
    }

    //Shuffle the object
    fullData = shuffleObjects(fullData)
        fullData = validateTrialData(fullData);


    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between male images and female images"
    })

    // console.table(fullData)


    return fullData

}

// IAT 2
function testData_Block2(male_toy, female_toy, trials) {

    let fullData = [];

    let images_male_toy = shuffleObjects(JSON.parse(JSON.stringify(male_toy_images)))
    images_male_toy.forEach((el) => el.key = male_toy);


    let images_female_toy = shuffleObjects(JSON.parse(JSON.stringify(female_toy_images)))
    images_female_toy.forEach((el) => el.key = female_toy);



    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_toy[i]);
        fullData.push(images_male_toy[i]);
    }

    fullData = shuffleObjects(fullData)
        fullData = validateTrialData(fullData);


    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between male toys and female toys"
    })
    // console.table(fullData)

    return fullData;
}

//   Click E for Male and male toys, and I for Female and female toys
//   IAT block 3 and 4
function testData_Block3(male_and_male_toy, female_and_female_toy, trials, practice = false) {

    let fullData = [];

    const images_male_toys = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...male_toy_images]))))
    images_male_toys.forEach((el) => el.key = male_and_male_toy);

    const images_female_toys = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...female_toy_images])))
    images_female_toys.forEach((el) => el.key = female_and_female_toy);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_toys[i]);
        fullData.push(images_female_toys[i])
    }

    fullData = shuffleObjects(fullData)
        fullData = validateTrialData(fullData);


    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice === false){
            el.description = "Male images and Male toys are grouped together, while Female images and Female toys are grouped together"
        } else if(practice === true) {
            el.description = "Practice: Male images and Male toys are grouped together, while Female images and Female toys are grouped together"
        }
    })

    // console.table(fullData)

    return fullData
}

// IAT block 6 and 7
function testData_Block4(male_and_female_toys, female_and_male_toys, trials, practice = false) {
    let fullData = [];

    let images_male_and_female_toys = shuffleObjects(JSON.parse(JSON.stringify([...male_images, ...female_toy_images])));
    images_male_and_female_toys.forEach((el) => el.key = male_and_female_toys)

    let images_female_and_male_toys = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...male_toy_images])));
    images_female_and_male_toys.forEach((el) => el.key = female_and_male_toys)

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_and_male_toys[i]);
        fullData.push(images_male_and_female_toys[i])
    }

    fullData = shuffleObjects(fullData)
        fullData = validateTrialData(fullData);


    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice === false){
            el.description = "Male images and Female toys are grouped together, while Female images and Male toys are grouped together"
        } else if(practice === true) {
            el.description = "Practice: Male images and Female toys are grouped together, while Female images and Male toys are grouped together"
        }
    })

    // console.table(fullData)

    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }