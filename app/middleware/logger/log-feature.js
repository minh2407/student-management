const logFeature = (req, res, next) => {
  console.log("day la middleware");
  //next chiu trach nhiem chay xuong middleware tiep theo
  next();
};

module.exports = { logFeature };
