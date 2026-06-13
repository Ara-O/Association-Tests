import validateTrialData from "../validateTrials/validateTrialData";

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
    { accuracy: 100, image: "C_M12.jpg" },
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

let blue_colors = [
    { accuracy: 100, image: "blue1.jpg" },
    { accuracy: 100, image: "blue2.jpg" },
    { accuracy: 100, image: "blue3.jpg" },
    { accuracy: 100, image: "blue4.jpg" },
    { accuracy: 100, image: "blue1.jpg" },
    { accuracy: 100, image: "blue2.jpg" },
    { accuracy: 100, image: "blue3.jpg" },
    { accuracy: 100, image: "blue4.jpg" },
]

const pink_colors = [
    { accuracy: 100, image: "pink1.jpg" },
    { accuracy: 100, image: "pink2.jpg" },
    { accuracy: 100, image: "pink3.jpg" },
    { accuracy: 100, image: "pink4.jpg" },
    { accuracy: 100, image: "pink1.jpg" },
    { accuracy: 100, image: "pink2.jpg" },
    { accuracy: 100, image: "pink3.jpg" },
    { accuracy: 100, image: "pink4.jpg" },
]



export function testData_Block1(male, female, trials) {
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
    let fullDataShuffled = shuffleObjects(fullData)
    fullData = validateTrialData(fullData);


    //Attach the visibility and description
    fullDataShuffled.forEach((el) => {
        el.visibility = "none",
            el.description = "User chooses between male images and female images"
    });

    fullData[0].visibility = "block"
    // console.log("Test data 1: ", fullDataShuffled)

    return fullData
}

export function testData_Block2(blue, pink, trials) {
    let fullData = [];
    //! Only 8 objects, double trials if 10 trials necessary...     
    const images_blue_color = JSON.parse(JSON.stringify(shuffleObjects(blue_colors)))
    images_blue_color.forEach((el) => el.key = blue)

    const images_pink_color = JSON.parse(JSON.stringify(shuffleObjects(pink_colors)))
    images_pink_color.forEach((el) => el.key = pink)

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_blue_color[i]);
        fullData.push(images_pink_color[i])
    }

    fullData = shuffleObjects(fullData);
    fullData = validateTrialData(fullData);


    fullData.forEach((el) => {
        el.visibility = "none";
        el.description = "User chooses between blue colors and pink colors"
    })
    fullData[0].visibility = "block"

    // console.log("Test data 2: ", fullData)


    return fullData
}

export function testData_Block3(male_blue_color, female_pink_color, trials, practice = false) {
    let fullData = [];

    const images_male_blue_color = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...blue_colors]))))
    images_male_blue_color.forEach((el) => el.key = male_blue_color);

    const images_female_pink_color = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...pink_colors])))
    images_female_pink_color.forEach((el) => el.key = female_pink_color);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_pink_color[i]);
        fullData.push(images_male_blue_color[i])
    }

    fullData = shuffleObjects(fullData);
    fullData = validateTrialData(fullData);


    fullData.forEach((el) => {
        el.visibility = "none";
        if (practice === false) {
            el.description = "Male images and Blue colors are grouped together, while Female images and Pink colors are grouped together"
        } else if (practice === true) {
            el.description = "Practice: Male images and Blue colors are grouped together, while Female images and Pink colors are grouped together"
        }
    })

    fullData[0].visibility = "block"

    // console.log("Test data 3: ", fullData)

    return fullData

}

export function testData_Block4(male_pink_color, female_blue_color, trials, practice = false) {
    let fullData = [];

    const images_male_pink_color = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...pink_colors]))))
    images_male_pink_color.forEach((el) => el.key = male_pink_color);

    const images_female_blue_color = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...blue_colors])))
    images_female_blue_color.forEach((el) => el.key = female_blue_color);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_pink_color[i]);
        fullData.push(images_female_blue_color[i])
    }

    fullData = shuffleObjects(fullData);
    fullData = validateTrialData(fullData);


    fullData.forEach((el) => {
        el.visibility = "none";
        if (practice === false) {
            el.description = "Male images and Pink colors are grouped together, while Female images and Blue colors are grouped together"
        } else if (practice === true) {
            el.description = "Practice: Male images and Pink colors are grouped together, while Female images and Blue colors are grouped together"
        }
    })

    fullData[0].visibility = "block"
    // console.log("Test data 4: ", fullData)

    return fullData

}