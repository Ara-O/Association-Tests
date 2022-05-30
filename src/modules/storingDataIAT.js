import { getDatabase, ref, set } from "firebase/database"

export function updateIATData(Data, test, cMonth, cDay, cYear, whereToStore, version) {
    // const db = getDatabase();
    let dataclone = JSON.parse(JSON.stringify(Data));
    dataclone.forEach((data, index) => {
        //adding the current test, browser type, and the date taken
        data.currentTest = whereToStore;
        data.browser = navigator["userAgent"];
        data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

        data.stimulus = data.image || data.name;
        data.testType = version;
        data.stimulusOrder = index + 1;
        data.gender = test.$store.state.userData.gender || "Not provided";
        data.ethnicity = test.$store.state.userData.chosenethnicity || "Not provided";
        data.howUserFeelsTowardsMen = test.$store.state.userData.slider1 || "Not provided";
        data.howUserFeelsTowardsWomen = test.$store.state.userData.slider2 || "Not provided";
        data.opinionOfMen = test.$store.state.userData.opinionofmen || "Not provided";
        data.opinionOfWomen = test.$store.state.userData.opinionofwomen || "Not provided";
        delete data.image;
        delete data.name;
        delete data.visibility;
        delete data.isImg;
    });

    test.$store.state[version].push(dataclone);

    //!Store data in firebase
    // set(ref(db, `${version}/User-${test.$store.state.uid}`), {
    //     data: test.$store.state[version],
    // });
}

export function storeIATGroupData(version, test, role, individualUid, familyUid) {
    const db = getDatabase();
    set(ref(db, `Group-data/Family-${familyUid}/${role}-${individualUid}/${version}`), {
        data: test.$store.state[version],
    });
    // test.$store.state[version] = [];
}

export function storeIATIndividualData(version, test) {
    const db = getDatabase();
    set(ref(db, `${version}/User-${test.$store.state.uid}`), {
        data: test.$store.state[version],
    });
    // test.$store.state[version] = [];
}