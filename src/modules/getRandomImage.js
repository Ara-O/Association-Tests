//Passes in the key for male or female

export default function (male, female) {
    //B_F
    let fullImgLink = "";
    let race = ''; 
    let key = '';

    //Get race ( B_ or W_ )
    let raceType = Math.floor(Math.random() * 2);
    raceType == 1 ? race = "B_" : race = "W_";
    fullImgLink += race;

    //Get gender ( M or F ) and assign a key to it
    let gender = '';
    let genderType = Math.floor(Math.random() * 2);
    genderType == 1 ? gender = "F" : gender = "M";
    fullImgLink += gender;

    // Values passed in for female and male would be used as key 
    if (gender === "F") {
        key = female
    } else if (gender === "M") {
        key = male;
    }

    //Get random number for image ( from 01 to 10 )
    let imgIdType = Math.floor(Math.random() * 10 + 1);
    imgIdType < 10 ? imgIdType = String(imgIdType).padStart(2, 0) : 0;
    fullImgLink += imgIdType;

    fullImgLink += ".jpg";

    // *GENERATE RANDOM NAME
    //* 20, 10 male, 10 female, random no. between 1 and 20

    const names = [
        { name: "John", key: male },
        { name: "Sophia", key: female },
        { name: "Hannah", key: female },
        { name: "Andrew", key: male },
        { name: "Lucas", key: male },
        { name: "Justin", key: male },
        { name: "Brandon", key: male },
        { name: "Lily", key: female },
        { name: "Lucy", key: female },
        { name: "Noah", key: male },
        { name: "Amelia", key: female },
        { name: "Sarah", key: female },
    ]

    let chosenName = names[Math.floor(Math.random() * 12)];

    return { fullImgLink, key, chosenName }
}