
export default function (section, trials) {
    let fullData = []
    const trial = {
        2: "1 4",
        3: "2 4 1",
        4: "4 5 1 2",
        5: "1 3 4 5 2"
    }

    const faces = trial[trials].split(' ');
    for (let i = 0; i < faces.length; i++) {
        let imgLink = `${section}/${section}_${faces[i]}.jpg`;
        fullData.push({ img: imgLink, cN: `N${faces[i]}.jpg`, id: `N${faces[i]}`, accuracy: 100 });
        i === 0 ? fullData[i].visibility = "block" : fullData[i].visibility = "none";
    }

    console.log(fullData)
    return fullData
}


export function IT_Name_Trials(section, trials) {
    let fullData = [];
    if (section === "White") {
        let names = ["John", "Lucas", "Mark", "Joe", "James"];

        for (let i = 0; i < trials; i++) {
            fullData.push({name: names[i], visibility: "none", img: `White/${names[i]}.jpg`});
        }
    }

    fullData[0].visibility = "block"

    console.log("full data", fullData)
    return fullData
}