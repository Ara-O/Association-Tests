import { getDatabase, ref, set } from "firebase/database";

export function updateITData(thisval, section){
    let data = thisval.$store.state.IT_trials;
    let dataclone = JSON.parse(JSON.stringify(data));
    for (let trial in data) {
        data[trial].forEach((data) => {
            delete data.visibility;
            delete data.id;
        });
    }

    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let dataclonearray = [];
    //!Data clone
    for (let trial in dataclone) {
        dataclone[trial].forEach((data, index) => {
            delete data.visibility;
            delete data.id;
            data.currentTrial = trial;
            data.browserInfo = navigator["userAgent"];
            data.dateTaken = `${cMonth}-${cDay}-${cYear}`;
            
            //From userData
            data.gender = thisval.$store.state.userData.gender || "Not provided";
            data.ethnicity = thisval.$store.state.userData.chosenethnicity || "Not provided";


            //Creating a descriptions column for the data
            if (section == "White") {
                data.description = "Test cycles through the 2-5 faces of white people and tasks the user with memorizing the number associated with each face";
            } else if (section == "Black") {
                data.description = "Test cycles through the 2-5 faces of black people and tasks the user with memorizing the number associated with each face";
            } else if (section == "Asian") {
                data.description = "Test cycles through the 2-5 faces of asian people and tasks the user with memorizing the number associated with each face";
            }
            data.testType =    `IT-${section}`;
            data.stimulusOrder = index + 1;
            delete data.visibility;
            delete data.randomNo;
            delete data.cN;
            dataclonearray.push(data);

        });
    }
    thisval.$store.state.IT_trials_text = dataclonearray;

    thisval.$router.push("/IT_Feedback");
    // const db = getDatabase();

    // set(ref(db, `IT/${section}/User-${thisval.$store.state.uid}`), {
    //     data: thisval.$store.state.IT_trials_text,
    // });
}


export function storeITGroupData(version, test, role, individualUid, familyUid) {
    const db = getDatabase();
    set(ref(db, `Group-data/Family-${familyUid}/${role}-${individualUid}/${version}`), {
        data: test.$store.state.IT_trials_text,
    });
}

export function storeITIndividualData(version, test) {
    const db = getDatabase();
    set(ref(db, `${version}/User-${test.$store.state.uid}`), {
        data: test.$store.state.IT_trials_text,
    });
}