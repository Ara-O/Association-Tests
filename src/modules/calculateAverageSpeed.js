export default function (thisval, datasource) {
  let feedbackData = Object.entries(datasource);
  let that = thisval;
  feedbackData.forEach(function (data) {


      that.blocksAccuracydata.push(data[1]);

    //&Checks whether the data is coming from the blocks
 
      that.blocks.push(data[1])

  });
}