// import getRandomImage from "../modules/getRandomImage";
import validateTrialData from "./validateTrials/validateTrialData";

function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

//Doubled since the trials may not be enough
const black_children_images = [
    { accuracy: 100, image: "B_CF01.jpg" },
    { accuracy: 100, image: "B_CF02.jpg" },
    { accuracy: 100, image: "B_CF03.jpg" },
    { accuracy: 100, image: "B_CM01.jpg" },
    { accuracy: 100, image: "B_CM02.jpg" },
    { accuracy: 100, image: "B_CM03.jpg" },
    { accuracy: 100, image: "B_CF01.jpg" },
    { accuracy: 100, image: "B_CF02.jpg" },
    { accuracy: 100, image: "B_CF03.jpg" },
    { accuracy: 100, image: "B_CM01.jpg" },
    { accuracy: 100, image: "B_CM02.jpg" },
    { accuracy: 100, image: "B_CM03.jpg" },
]

const white_children_images = [
    { accuracy: 100, image: "W_CF01.jpg" },
    { accuracy: 100, image: "W_CF02.jpg" },
    { accuracy: 100, image: "W_CF03.jpg" },
    { accuracy: 100, image: "W_CM01.jpg" },
    { accuracy: 100, image: "W_CM02.jpg" },
    { accuracy: 100, image: "W_CM03.jpg" },
    { accuracy: 100, image: "W_CF01.jpg" },
    { accuracy: 100, image: "W_CF02.jpg" },
    { accuracy: 100, image: "W_CF03.jpg" },
    { accuracy: 100, image: "W_CM01.jpg" },
    { accuracy: 100, image: "W_CM02.jpg" },
    { accuracy: 100, image: "W_CM03.jpg" },
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
function testData_Block1(white, black, trials) {
   
    let fullData = [];

    let images_white_children = shuffleObjects(JSON.parse(JSON.stringify(white_children_images)));
    images_white_children.forEach((el)=> el.key = white)

    let images_black_children = shuffleObjects(JSON.parse(JSON.stringify(black_children_images)));
    images_black_children.forEach((el)=> el.key = black)

    for(let i =0; i < trials/2; i++){
        fullData.push(images_black_children[i])
        fullData.push(images_white_children[i])
    }

    
    fullData = shuffleObjects(fullData)
    fullData = validateTrialData(fullData);

    
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between White faces and Black faces"
    })
    // console.log("Rest data 1: ", fullData)
    return fullData

}

//!Work on sad and happy faces - get 5 happy and 5 sad
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
    fullData = validateTrialData(fullData);

    
    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        el.description = "User chooses between happy emojis and sad emojis"
    })
    return fullData;
}

// White and happy faces, black and sad faces
//  IAT block 3 and 4
function testData_Block3(white_happy, black_sad, trials, practice = false) {
    let fullData = [];

    let white_happy_faces = shuffleObjects(JSON.parse(JSON.stringify([...white_children_images, ...happy_face_images])));
    white_happy_faces.forEach((el)=> el.key = white_happy)

    let black_sad_faces = shuffleObjects(JSON.parse(JSON.stringify([...sad_face_images, ...black_children_images])));
    black_sad_faces.forEach((el)=> el.key = black_sad)

    for(let i =0; i < trials/2; i++){
        fullData.push(white_happy_faces[i])
        fullData.push(black_sad_faces[i])
    }

    
    // console.log("Test data 3/4: ", fullData)
    fullData = shuffleObjects(fullData)
    fullData = validateTrialData(fullData);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice){
            el.description = "Practice: White faces/Happy faces are grouped together, while Black faces/Sad faces are grouped together"
        } else {
            el.description = "White faces/Happy faces are grouped together, while Black faces/Sad faces are grouped together"
        }
    })

    return fullData
}

// IAT block 6 and 7
function testData_Block4(white_sad, black_happy, trials, practice = false) {

    let fullData = [];

    let white_sad_faces = shuffleObjects(JSON.parse(JSON.stringify([...white_children_images, ...sad_face_images])));
    white_sad_faces.forEach((el)=> el.key = white_sad)

    let black_happy_faces = shuffleObjects(JSON.parse(JSON.stringify([...happy_face_images, ...black_children_images])));
    black_happy_faces.forEach((el)=> el.key = black_happy)

    for(let i =0; i < trials/2; i++){
        fullData.push(white_sad_faces[i])
        fullData.push(black_happy_faces[i])
    }

    
    // console.log("Test data 6/7: ", fullData)
    fullData = shuffleObjects(fullData)
    fullData = validateTrialData(fullData);

    fullData.forEach((el, index) => {
        index === 0 ? el.visibility = "block" : el.visibility = "none";
        if(practice){
            el.description = "Practice: White faces/Sad faces are grouped together, while Black faces/Happy faces are grouped together"
        }else {
            el.description = "White faces/Sad faces are grouped together, while Black faces/Happy faces are grouped together"
        }
    })

    return fullData

}
export { testData_Block1, testData_Block2, testData_Block3, testData_Block4 }