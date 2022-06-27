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
                data.description = "Practice: User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            } else if (outerIndex === 1) {
                data.description = "User clicks a happy face for an image of a white person, and a sad face for an image of a black person";
            } else if (outerIndex === 2) {
                data.description = "User clicks a sad face for an image of a white person, and a happy face for an image of a black person";
            }
            data.testType = "IBT Black-White";
        } else if (test.testType === "Gender_Toy") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a male toy, and the female face for an image of a female toy";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a male toy, and the male face for an image of a female toy";
            }
            // data.testType = "IBT Gender-Toy";

        } else if (test.testType === "Gender_Subject") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the male face for an image of a letter, and the female face for an image of a number";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a letter, and the female face for an image of a number";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a letter, and the male face for an image of a number";
            }
            // data.testType = "IBT Gender-Subject";

        } else if (test.testType === "Gender_Roles") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the male face for an image of a kitchen item, and the female face for an image of a office item";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a kitchen item, and the female face for an image of a office item";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a kitchen item, and the male face for an image of a office item";
            }
            // data.testType = "IBT Gender-Roles";
        } else if (test.testType === "Gender_Color") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the male face for an image of a blue color, and the female face for an image of a pink color";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a blue color, and the female face for an image of a pink color";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a blue color, and the male face for an image of a pink color";
            }
            // data.testType = "IBT Gender-Color";
        } else if (test.testType === "Gender_Clothing") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the male face for an image of a male clothing, and the female face for an image of a female clothing";
            } else if (outerIndex === 1) {
                data.description = "User clicks the male face for an image of a male clothing, and the female face for an image of a female clothing";
            } else if (outerIndex === 2) {
                data.description = "User clicks the female face for an image of a male clothing, and the male face for an image of a female clothing";
            }
            // data.testType = "IBT Gender-Clothing";
        } else if (test.testType === "Cat_Dog") {
            if (outerIndex === 0) {
                data.description = "Practice: User clicks the dog for a happy face, and the cat for a sad face";
            } else if (outerIndex === 1) {
                data.description = "User clicks the dog for a happy face, and the cat for a sad face";
            } else if (outerIndex === 2) {
                data.description = "User clicks the dog for a sad face, and the cat for a happy face";
            }
            // data.testType = "IBT Gender-Clothing";
        }

        data.stimulus = data.image;
        data.testType = version;
        data.stimulusOrder = innerIndex + 1;
        delete data.image;
        delete data.name;
        delete data.visibility;
        delete data.isImg;
        delete data.randomNo;
        delete data.currentTest
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