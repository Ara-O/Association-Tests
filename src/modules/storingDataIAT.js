import { getDatabase, ref, set } from "firebase/database"

export function storeIATData(Data, test, cMonth, cDay, cYear, whereToStore, version) {
    const db = getDatabase();
    let dataclone = JSON.parse(JSON.stringify(Data));
    dataclone.forEach((data, index) => {
        //adding the current test, browser type, and the date taken
        data.currentTest = whereToStore;
        data.browser = navigator["userAgent"];
        data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

        //Creating a descriptions column for the data
        if(data.currentTest == "Block1" || data.currentTest == "Block1_TS"){
            data.description = "User clicks E for male names/images and I for female name/images";
        }else if(data.currentTest == "Block2"|| data.currentTest == "Block2_TS"){
            data.description = "User clicks E for career and I for home";
        }else if(data.currentTest == "Block3"|| data.currentTest == "Block3_TS"){
            data.description = "Practice: User clicks E for male name/images and career, and clicks I for female name/images and home";
        }else if(data.currentTest == "Block4"|| data.currentTest == "Block4_TS"){
            data.description = "User clicks E for male name/images and career, and clicks I for female name/images and home";
        }else if(data.currentTest == "Block5"|| data.currentTest == "Block5_TS"){
            data.description = "Reversed Letters: User clicks I for male name/images and career, and clicks E for female name/images and home";
        }else if(data.currentTest == "Block6"|| data.currentTest == "Block6_TS"){
            data.description = "Practice: User clicks E for male name/images and career, and clicks I for female name/images and home";
        }else if(data.currentTest == "Block7"|| data.currentTest == "Block7_TS"){
            data.description = " User clicks E for male name/images and career, and clicks I for female name/images and home";
        }

        data.stimulus = data.image || data.name;
        data.testType = version;
        data.stimulusOrder = index + 1;
        data.gender = test.$store.state.userData.gender || "Not provided";
        data.ethnicity = test.$store.state.userData.chosenethnicity.join("-") || "Not provided";
        data.howUserFeelsTowardsMen = test.$store.state.userData.slider1 || "Not provided";
        data.howUserFeelsTowardsWomen = test.$store.state.userData.slider2 || "Not provided";
        data.opinionOfMen =test.$store.state.userData.opinionofmen ||  "Not provided"; 
        data.opinionOfWomen =test.$store.state.userData.opinionofwomen || "Not provided"; 
        delete data.image;
        delete data.name;
        delete data.visibility;
        delete data.isImg;
    });

    test.$store.state[version].push(dataclone);

    //!Store data in firebase
    set(ref(db, `${version}/User-${test.$store.state.uid}`), {
        data:  test.$store.state[version],
    });
}