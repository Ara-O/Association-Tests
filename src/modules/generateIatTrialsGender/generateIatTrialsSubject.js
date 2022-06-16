
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


const math_images = [
    { accuracy: 100, image: "Math_01.jpg" },
    { accuracy: 100, image: "Math_02.jpg" },
    { accuracy: 100, image: "Math_03.jpg" },
    { accuracy: 100, image: "Math_04.jpg" },
]

const reading_images = [
    { accuracy: 100, image: "Reading_01.jpg" },
    { accuracy: 100, image: "Reading_02.jpg" },
    { accuracy: 100, image: "Reading_03.jpg" },
    { accuracy: 100, image: "Reading_04.jpg" },
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

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between male faces and female faces"
    })

    // console.table(fullData)

    return fullData

}

// IAT 2
function testData_Block2(math, reading, trials) {

    let fullData = [];

    let images_math = shuffleObjects(JSON.parse(JSON.stringify(math_images)))
    images_math.forEach((el) => el.key = math);


    let images_reading = shuffleObjects(JSON.parse(JSON.stringify(reading_images)))
    images_reading.forEach((el) => el.key = reading);



    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_math[i]);
        fullData.push(images_reading[i]);
    }

    fullData = shuffleObjects(fullData)

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between math and reading"
    })
    // console.table(fullData)
    return fullData;
}

//   Click E for Male and math, and I for Female and reading
//   IAT block 3 and 4
function testData_Block3(male_math, female_reading, trials) {

    let fullData = [];

    const images_male_math = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...math_images]))))
    images_male_math.forEach((el) => el.key = male_math);

    const images_female_reading = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...reading_images])))
    images_female_reading.forEach((el) => el.key = female_reading);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_math[i]);
        fullData.push(images_female_reading[i])
    }

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "Male faces/Math are grouped together, while Female faces/Reading are grouped together"
    })

    // console.table(fullData)
    return fullData
}

// IAT block 6 and 7
function testData_Block4(male_and_reading, female_and_math, trials) {
    let fullData = [];

    let images_male_reading = shuffleObjects(JSON.parse(JSON.stringify([...male_images, ...reading_images])));
    images_male_reading.forEach((el) => el.key = male_and_reading)

    let images_female_math = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...math_images])));
    images_female_math.forEach((el) => el.key = female_and_math)

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_math[i]);
        fullData.push(images_male_reading[i])
    }

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "Male faces/Reading are grouped together, while Female faces/Math are grouped together"
    })

    // console.table(fullData)
    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }