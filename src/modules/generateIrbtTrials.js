function shuffleObjects(array) {
    for (var a = 0; a < array.length; a++) {
        var x = array[a];
        var y = Math.floor(Math.random() * (a + 1));
        array[a] = array[y];
        array[y] = x;
    }
    return array;
}

export default function (white, black, trials) {
    let all_children_stimulus_black = [
        { image: "B_CF01.jpg", emotion: black, },
        { image: "B_CF02.jpg", emotion: black, },
        { image: "B_CF03.jpg", emotion: black, },
        { image: "B_CM01.jpg", emotion: black, },
        { image: "B_CM02.jpg", emotion: black, },
        { image: "B_CM03.jpg", emotion: black, },]

    let all_children_stimulus_white = [
        { image: "W_CF01.jpg", emotion: white },
        { image: "W_CF02.jpg", emotion: white },
        { image: "W_CF03.jpg", emotion: white },
        { image: "W_CM01.jpg", emotion: white },
        { image: "W_CM02.jpg", emotion: white },
        { image: "W_CM03.jpg", emotion: white }]
    let irbt_data = [];


    //Starts with an object of what to push
    /*accuracy: 100
    emotion: "sad.jpg"
    happyFacePosition: "Right"
    image: "B_F05.jpg"
    randomNo: 1
    sadFacePosition: "Left"
    visibility: "none" */

    //shuffling the two data
    all_children_stimulus_black = shuffleObjects(all_children_stimulus_black);
    all_children_stimulus_white = shuffleObjects(all_children_stimulus_white);

    //Making sure there is half for both races
    for (let i = 0; i < trials / 2; i++) {
        irbt_data.push(all_children_stimulus_black[i])
    }
    for (let i = 0; i < trials / 2; i++) {
        irbt_data.push(all_children_stimulus_white[i])
    }

    for (let i = 0; i < irbt_data.length; i++) {
        //setting the visibility to block for the first data
        i === 0 ? irbt_data[i].visibility = "block" : irbt_data[i].visibility = "none";
        let randomNo = Math.floor(Math.random() * 2);

        //Setting the position of the clicker faces randomized
        irbt_data[i].randomNo = randomNo;
        if (randomNo === 0) {
            irbt_data[i].sadFacePosition = "Left";
            irbt_data[i].happyFacePosition = "Right"
        } else {
            irbt_data[i].sadFacePosition = "Right";
            irbt_data[i].happyFacePosition = "Left";
        }

        irbt_data[i].accuracy = 100;
    }



  //  console.log(irbt_data)
    return irbt_data;
}