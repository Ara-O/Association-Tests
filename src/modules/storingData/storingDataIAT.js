import { getDatabase, ref, set } from "firebase/database"

export function updateIATData(Data, test, cMonth, cDay, cYear, whereToStore, version) {
    // const db = getDatabase();
    let dataclone = JSON.parse(JSON.stringify(Data));
    dataclone.forEach((data, index) => {
        // console.log(data)
        //adding the current test, browser type, and the date taken
        data.currentTest = whereToStore;
        data.browser = navigator["userAgent"];
        data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

        data.stimulus = data.image || data.name;
        data.testType = version;
        data.stimulusOrder = index + 1;
        data.gender = test.$store.state.userData.gender || "Not provided";
        data.ethnicity = test.$store.state.userData.chosenethnicity || "Not provided";

        
        // if (test.$store.state.userData.slider2 === 0 || test.$store.state.userData.slider2) {
            //     data.howUserFeelsTowardsGirls = test.$store.state.userData.slider2
            // } else {
                //     data.howUserFeelsTowardsGirls = "Not provided";
                // }
                
                data.userWouldPrefer = test.$store.state.userData.userWouldPrefer || "Not provided";
                
                //Only for iat gender and cat/dog
                if (data.testType[4] === "G" || data.testType[4] === "C") {
                    data.boyWouldPrefer = test.$store.state.userData.boyWouldPrefer || "Not provided";
                    data.girlWouldPrefer = test.$store.state.userData.girlWouldPrefer || "Not provided";
                } else {
                    //Only for iat race
                    if (test.$store.state.userData.slider1 === 0 || test.$store.state.userData.slider1) {
                        data.howUserFeelsTowardsRace1 = test.$store.state.userData.slider1
                    } else {
                        data.howUserFeelsTowardsBoys = "Not provided";
                    }
                    if (test.$store.state.userData.slider2 === 0 || test.$store.state.userData.slider2) {
                        data.howUserFeelsTowardsRace2 = test.$store.state.userData.slider2
                    } else {
                        data.howUserFeelsTowardsBoys = "Not provided";
                    }
            // data.opinionOfBlackAmericans = test.$store.state.userData.opinionofblackamericans;
            // data.opinionOfWhiteAmericans = test.$store.state.userData.opinionofwhiteamericans;
            // data.opinionOfAsianAmericans = test.$store.state.userData.opinionofasianamericans;
        }
        delete data.image;
        delete data.name;
        delete data.visibility;
        delete data.isImg;
    });

    test.$store.state[version].push(dataclone);
}

export function storeIATGroupData(version, test, role, individualUid, familyUid) {
    const db = getDatabase();
    set(ref(db, `Group-data/Family-${familyUid}/${role}-${individualUid}/${version}`), {
        data: test.$store.state[version],
    });
}

export function storeIATIndividualData(version, test) {
    const db = getDatabase();
    set(ref(db, `${version}/User-${test.$store.state.uid}`), {
        data: test.$store.state[version],
    });
}