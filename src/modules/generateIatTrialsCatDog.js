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

//Doubled since the trails may not be enough
const dog_images = [
    { accuracy: 100, image: "Dog1.jpg" },
    { accuracy: 100, image: "Dog2.jpg" },
    { accuracy: 100, image: "Dog3.jpg" },
    { accuracy: 100, image: "Dog4.jpg" },
    { accuracy: 100, image: "Dog5.jpg" },
    { accuracy: 100, image: "Dog1.jpg" },
    { accuracy: 100, image: "Dog2.jpg" },
    { accuracy: 100, image: "Dog3.jpg" },
    { accuracy: 100, image: "Dog4.jpg" },
    { accuracy: 100, image: "Dog5.jpg" },
]

const cat_images = [
    { accuracy: 100, image: "Cat1.jpg" },
    { accuracy: 100, image: "Cat2.jpg" },
    { accuracy: 100, image: "Cat3.jpg" },
    { accuracy: 100, image: "Cat4.jpg" },
    { accuracy: 100, image: "Cat5.jpg" },
    { accuracy: 100, image: "Cat1.jpg" },
    { accuracy: 100, image: "Cat2.jpg" },
    { accuracy: 100, image: "Cat3.jpg" },
    { accuracy: 100, image: "Cat4.jpg" },
    { accuracy: 100, image: "Cat5.jpg" },
]

const happy_face_images = [
    { accuracy: 100, image: "H_F01.jpg" },
    { accuracy: 100, image: "H_F02.jpg" },
    { accuracy: 100, image: "H_F03.jpg" },
    { accuracy: 100, image: "H_F04.jpg" },
    { accuracy: 100, image: "H_F05.jpg" },
    { accuracy: 100, image: "H_F01.jpg" },
    { accuracy: 100, image: "H_F02.jpg" },
    { accuracy: 100, image: "H_F03.jpg" },
    { accuracy: 100, image: "H_F04.jpg" },
    { accuracy: 100, image: "H_F05.jpg" },
]

const sad_face_images = [
    { accuracy: 100, image: "S_F01.jpg"},
    { accuracy: 100, image: "S_F02.jpg"},
    { accuracy: 100, image: "S_F03.jpg"},
    { accuracy: 100, image: "S_F04.jpg"},
    { accuracy: 100, image: "S_F05.jpg"},
    { accuracy: 100, image: "S_F01.jpg"},
    { accuracy: 100, image: "S_F02.jpg"},
    { accuracy: 100, image: "S_F03.jpg"},
    { accuracy: 100, image: "S_F04.jpg"},
    { accuracy: 100, image: "S_F05.jpg"},
]

// IAT race block 1 and 5
function testData_Block1(cat, dog, trials) {
   
    let fullData = [];

    let images_dog = shuffleObjects(JSON.parse(JSON.stringify(dog_images)));
    images_dog.forEach((el)=> el.key = dog)

    let images_cat = shuffleObjects(JSON.parse(JSON.stringify(cat_images)));
    images_cat.forEach((el)=> el.key = cat)

    for(let i =0; i < trials/2; i++){
        fullData.push(images_cat[i])
        fullData.push(images_dog[i])
    }

    
    fullData = shuffleObjects(fullData)
    
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between cats and dogs"
    })
    // console.log("Rest data 1: ", fullData)
    return fullData

}

function testData_Block2(happy, sad, trials) {
    
    let fullData = [];

    let images_happy_faces = shuffleObjects(JSON.parse(JSON.stringify([...happy_face_images, ...happy_face_images])));
    images_happy_faces.forEach((el)=> el.key = happy)

    let images_sad_faces = shuffleObjects(JSON.parse(JSON.stringify([...sad_face_images, ...sad_face_images])));
    images_sad_faces.forEach((el)=> el.key = sad)

    for(let i =0; i < trials/2; i++){
        fullData.push(images_happy_faces[i])
        fullData.push(images_sad_faces[i])
    }

    
    // console.log("Test data 2: ", fullData)
    fullData = shuffleObjects(fullData)
    
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between happy emojis and sad emojis"
    })
    return fullData;
}

//  IAT block 3 and 4
function testData_Block3(dog_happy, cat_sad, trials, practice = false) {
    let fullData = [];

    let dog_happy_faces = shuffleObjects(JSON.parse(JSON.stringify([...dog_images, ...happy_face_images])));
    dog_happy_faces.forEach((el)=> el.key = dog_happy)

    let cat_sad_faces = shuffleObjects(JSON.parse(JSON.stringify([...sad_face_images, ...cat_images])));
    cat_sad_faces.forEach((el)=> el.key = cat_sad)

    for(let i =0; i < trials/2; i++){
        fullData.push(dog_happy_faces[i])
        fullData.push(cat_sad_faces[i])
    }

    
    // console.log("Test data 3/4: ", fullData)
    fullData = shuffleObjects(fullData)
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice === false){
            el.description = "Dogs and Happy faces are grouped together, while Cats and Sad faces are grouped together"
        }else if(practice === true){
            el.description = "Practice: Dogs and Happy faces are grouped together, while Cats and Sad faces are grouped together"
        }
    })

    return fullData
}

// IAT block 6 and 7
function testData_Block4(dog_sad, cat_happy, trials, practice = false) {

    let fullData = [];

    let dog_sad_faces = shuffleObjects(JSON.parse(JSON.stringify([...dog_images, ...sad_face_images])));
    dog_sad_faces.forEach((el)=> el.key = dog_sad)

    let cat_happy_faces = shuffleObjects(JSON.parse(JSON.stringify([...happy_face_images, ...cat_images])));
    cat_happy_faces.forEach((el)=> el.key = cat_happy)

    for(let i =0; i < trials/2; i++){
        fullData.push(dog_sad_faces[i])
        fullData.push(cat_happy_faces[i])
    }

    fullData = shuffleObjects(fullData)
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice === false){
            el.description = "Dogs/Happy faces are grouped together, while Cats/Sad faces are grouped together"
        }else if(practice === true){
            el.description = "Practice: Dogs/Happy faces are grouped together, while Cats/Sad faces are grouped together"
        }
    })

    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }