export default function (thisval, datasource) {
  let feedbackData = Object.entries(datasource);
   
  let that = thisval;
  feedbackData.forEach(function (data) {

    let arrayKey = data[0];

    if (arrayKey === "gender") {
      that.gender = data[1];
    }

    if (arrayKey === "chosenethnicity") {
      that.ethnicities = data[1];
    }

    if (arrayKey == "slider1") {
      that.slider1 = data[1];
    }

    if (arrayKey == "slider2") {
      that.slider2 = data[1];
    }
    if (arrayKey == "opinionofmen") {
      that.opinionofmen = data[1];
    }
    if (arrayKey == "opinionofwomen") {
      that.opinionofwomen = data[1];
    }

    if (data[0][0] == "B") {
      //& looping through the data
      that.blocksAccuracydata.push(data[1]);
    }

    //&Checks whether the data is coming from the blocks
    if (data[0][0] === "B") {
      that.blocks.push(data[1])
    }

  });
}