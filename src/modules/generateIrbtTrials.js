
import fullImgLink from './getRandomImage.js'

export default function (expectedSmiling, expectedSad, trials) {

    let num1 = 0;
    let num2 = 0;
    let trial = 0;
    let zeros = 0;
    // let ones = 0;
    const irbt_data = [];

    do {
        const { fullImgLink: imgLink } = fullImgLink();

        let firstLetter = imgLink[0];

        //Starts with an object of what to push

        const whatToPush = { image: imgLink, };

        //!Generate random number half and half

        // let randomNo = Math.floor(Math.random() * 2);

        if (zeros < trials / 2) {
            whatToPush.happyFacePosition = "Left";
            whatToPush.sadFacePosition = "Right";
            whatToPush.randomNo = 0;
            zeros++
        } else {
            whatToPush.happyFacePosition = "Right";
            whatToPush.sadFacePosition = "Left";
            whatToPush.randomNo = 1;
            //  ones++;
        }
        whatToPush.accuracy = 100;
        trial === 0 ? whatToPush.visibility = 'block' : whatToPush.visibility = 'none';

        if (firstLetter === "B" && num1 < trials / 2) {
            num1++
            if (expectedSmiling === "Black") {
                whatToPush.emotion = "happy.jpg"
            } else {
                whatToPush.emotion = "sad.jpg"
            }

            irbt_data.push(
                whatToPush
            )

            ++trial

        } else if (firstLetter === "W" && num2 < trials / 2) {
            num2++;
            if (expectedSmiling === "White") {
                whatToPush.emotion = "happy.jpg"
            } else {
                whatToPush.emotion = "sad.jpg"
            }
          irbt_data.push(
                whatToPush
            )

            ++trial

        }

    } while (trial < trials)

    return irbt_data;
}