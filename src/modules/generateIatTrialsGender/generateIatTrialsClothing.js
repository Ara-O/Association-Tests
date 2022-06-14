function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

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

const female_clothing_images = [
    { accuracy: 100, image: "CL_F01.jpg"},
    { accuracy: 100, image: "CL_F02.jpg"},
    { accuracy: 100, image: "CL_F03.jpg"},
    { accuracy: 100, image: "CL_F04.jpg"},
]


let male_clothing_images = [
    { accuracy: 100, image: "CL_M01.jpg"},
    { accuracy: 100, image: "CL_M02.jpg"},
    { accuracy: 100, image: "CL_M03.jpg"},
    { accuracy: 100, image: "CL_M04.jpg"},
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

    //Attach the visibility and description
    fullDataShuffled.forEach((el) => {
        el.visibility = "none",
        el.description = "User chooses between male faces and female faces"
    });
    
    fullData[0].visibility = "block"
    // console.log("Test data 1: ", fullDataShuffled)
    return fullData
}

export function testData_Block2(male_clothing, female_clothing, trials) {
    let fullData = [];
    //! Only 8 objects, double trials if 10 trials necessary...     
    const images_male_clothing = JSON.parse(JSON.stringify(shuffleObjects(male_clothing_images)))
    images_male_clothing.forEach((el) => el.key = male_clothing)
    
    const images_female_clothing = JSON.parse(JSON.stringify(shuffleObjects(female_clothing_images)))
    images_female_clothing.forEach((el) => el.key = female_clothing)

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_clothing[i]);
        fullData.push(images_female_clothing[i])
    }

    fullData = shuffleObjects(fullData);

    fullData.forEach((el) => {
        el.visibility = "none";
        el.description = "User chooses between female clothing and male clothing"
    })
    fullData[0].visibility = "block"

    // console.log("Test data 2: ", fullData)

    return fullData
}

export function testData_Block3(male_and_male_clothing, female_and_female_clothing, trials) {
    let fullData = [];

    const images_male_male_clothing = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...male_clothing_images]))))
    images_male_male_clothing.forEach((el) => el.key = male_and_male_clothing);

    const images_female_female_clothing = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...female_clothing_images])))
    images_female_female_clothing.forEach((el) => el.key = female_and_female_clothing);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_female_clothing[i]);
        fullData.push(images_male_male_clothing[i])
    }

    fullData.forEach((el) => {
        el.visibility = "none";
        el.description = "User chooses between male and male clothing and female and female clothing"
    })

    fullData[0].visibility = "block"

    // console.log("Test data 3: ", fullData)
    return fullData

}

export function testData_Block4(male_and_female_clothing, female_and_male_clothing, trials) {
    let fullData = [];

    const images_male_female_clothing = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...female_clothing_images]))))
    images_male_female_clothing.forEach((el) => el.key = male_and_female_clothing);

    const images_female_male_clothing = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...male_clothing_images])))
    images_female_male_clothing.forEach((el) => el.key = female_and_male_clothing);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_female_clothing[i]);
        fullData.push(images_female_male_clothing[i])
    }

    fullData.forEach((el) => {
        el.visibility = "none";
        el.description = "User chooses between male and female clothing and female and male clothing"
    })

    fullData[0].visibility = "block"
    // console.log("Test data 4: ", fullData)
    return fullData

}