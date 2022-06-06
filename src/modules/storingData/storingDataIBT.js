import { getDatabase, ref, set } from "firebase/database"

export function updateIBTData(Data, test, cMonth, cDay, cYear, whereToStore, version) {
    // const db = getDatabase();
    let dataclone = JSON.parse(JSON.stringify(Data));
    dataclone.forEach((outerdata, outerIndex) => {
    outerdata.forEach((data, innerIndex) => {
        //adding the current test, browser type, and the date taken
        data.currentTest = whereToStore;
        data.browser = navigator["userAgent"];
        data.dateTaken = `${cMonth}-${cDay}-${cYear}`;

        if (test.testType === "Black_White") {
            if (outerIndex === 0) {
                data.description = "Practice: clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            } else if (outerIndex === 1) {
                data.description = "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            } else if (outerIndex === 2) {
                data.description = "User clicks a sad face for an image of a white person, and a happy face for an image of a black person";
            }
            data.testType = "IBT Black-White";
        } else if (test.testType === "Gender_Toy") {
            if (outerIndex === 0) {
                data.description = "Practice: clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
            data.testType = "IBT Gender-Toy";
        }


        data.stimulus = data.image;
        data.testType = version;
        data.stimulusOrder = innerIndex + 1;
        delete data.image;
        delete data.name;
        delete data.visibility;
        delete data.isImg;
        delete data.randomNo
    })
});
    test.$store.state[version] = dataclone;
}

export function storeIBTGroupData(version, test, role, individualUid, familyUid) {
    const db = getDatabase();
    set(ref(db, `Group-data/Family-${familyUid}/${role}-${individualUid}/${version}`), {
        data: test.$store.state[version],
    });
}

export function storeIBTIndividualData(version, test) {
    const db = getDatabase();
    set(ref(db, `${version}/User-${test.$store.state.uid}`), {
        data: test.$store.state[version],
    });
}