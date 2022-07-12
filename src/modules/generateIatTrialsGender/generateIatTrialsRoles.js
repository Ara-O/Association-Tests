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

const kitchen_images = [
    { accuracy: 100, image: "H01-cookerhood.jpg"},
    { accuracy: 100, image: "H02-cuttingboard.jpg"},
    { accuracy: 100, image: "H03-pan.jpg"},
    { accuracy: 100, image: "H04-refrigerator.jpg"},
    { accuracy: 100, image: "H05-spatula.jpg"},
    { accuracy: 100, image: "H06-washingsink.jpg"},
    { accuracy: 100, image: "H01-cookerhood.jpg"},
    { accuracy: 100, image: "H02-cuttingboard.jpg"},
    { accuracy: 100, image: "H03-pan.jpg"},
    { accuracy: 100, image: "H04-refrigerator.jpg"},
    { accuracy: 100, image: "H05-spatula.jpg"},
    { accuracy: 100, image: "H06-washingsink.jpg"}
]


let office_images = [
    { accuracy: 100, image: "W01-chair.jpg"},
    { accuracy: 100, image: "W02-computer.jpg"},
    { accuracy: 100, image: "W04-filecabinet.jpg"},
    { accuracy: 100, image: "W03-desk.jpg"},
    { accuracy: 100, image: "W05-pen.jpg"},
    { accuracy: 100, image: "W06-phone.jpg"},
    { accuracy: 100, image: "W01-chair.jpg"},
    { accuracy: 100, image: "W02-computer.jpg"},
    { accuracy: 100, image: "W04-filecabinet.jpg"},
    { accuracy: 100, image: "W03-desk.jpg"},
    { accuracy: 100, image: "W05-pen.jpg"},
    { accuracy: 100, image: "W06-phone.jpg"},
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
        el.description = "User chooses between male images and female images"
    });
    
    fullData[0].visibility = "block"
    // console.log("Test data 1: ", fullDataShuffled)
    return fullData
}

export function testData_Block2(office, kitchen, trials) {
    let fullData = [];
    
    const images_office = JSON.parse(JSON.stringify(shuffleObjects(office_images)))
    images_office.forEach((el) => el.key = office)
    
    const images_kitchen = JSON.parse(JSON.stringify(shuffleObjects(kitchen_images)))
    images_kitchen.forEach((el) => el.key = kitchen)

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_office[i]);
        fullData.push(images_kitchen[i])
    }

    fullData = shuffleObjects(fullData);

    fullData.forEach((el) => {
        el.visibility = "none";
        el.description = "User chooses between office images and kitchen images"
    })
    fullData[0].visibility = "block"

    // console.log("Test data 2: ", fullData)

    return fullData
}

export function testData_Block3(male_and_office, female_and_kitchen, trials, practice = false) {
    let fullData = [];

    const images_male_office = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...office_images]))))
    images_male_office.forEach((el) => el.key = male_and_office);

    const images_female_kitchen = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...kitchen_images])))
    images_female_kitchen.forEach((el) => el.key = female_and_kitchen);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_female_kitchen[i]);
        fullData.push(images_male_office[i])
    }

    fullData = shuffleObjects(fullData);

    fullData.forEach((el) => {
        el.visibility = "none";
        if(practice === false){
            el.description = "Male images and Office items are grouped together, while Female images and Kitchen items are grouped together"
        }else if(practice === true){
            el.description = "Practice: Male images and Office items are grouped together, while Female images and Kitchen items are grouped together"
        }
    })

    fullData[0].visibility = "block"

    // console.log("Test data 3: ", fullData)
    return fullData

}

export function testData_Block4(male_and_kitchen, female_and_office, trials, practice = false) {
    let fullData = [];

    const images_male_kitchen = shuffleObjects(JSON.parse(JSON.stringify(([...male_images, ...kitchen_images]))))
    images_male_kitchen.forEach((el) => el.key = male_and_kitchen);

    const images_female_office = shuffleObjects(JSON.parse(JSON.stringify([...female_images, ...office_images])))
    images_female_office.forEach((el) => el.key = female_and_office);

    for (let i = 0; i < trials / 2; i++) {
        fullData.push(images_male_kitchen[i]);
        fullData.push(images_female_office[i])
    }

    fullData = shuffleObjects(fullData);

    fullData.forEach((el) => {
        el.visibility = "none";
        if(practice === false){
            el.description = "Male images and Kitchen items are grouped together, while Female images and Office items are grouped together"
        }else if(practice === true){
            el.description = "Practice: Male images and Kitchen items are grouped together, while Female images and Office items are grouped together"
        }
    })

    fullData[0].visibility = "block"

    // console.log("Test data 4: ", fullData)
    return fullData

}