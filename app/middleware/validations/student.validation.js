const checkEmpty = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;
  if (fullName && age && numberClass) {
    next();
  } else {
    //500 la loi server
    res.status(500).send("khong duoc de trong cac truong du lieu");
  }
};

const checkNumberClass = (req, res, next) => {
  const { numberClass } = req.body;
  if (numberClass > 0 && numberClass <= 12) {
    next();
  } else {
    res.status(500).send("phai nhap tu 1-12");
  }
};

module.exports = { checkEmpty, checkNumberClass };
