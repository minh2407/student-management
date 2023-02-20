const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
} = require("../services/student.services");

let studentList = getList();

const getStudentList = (req, res) => {
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("not found");
  }
};

const getStudentDetailById = (req, res) => {
  const param = req.params;
  const id = param.id;

  const student = getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("not found");
  }
};

const createStudent = (req, res) => {
  let student = req.body;
  const newStudent = create(student);
  if (newStudent) {
    res.status(201).send(student);
  } else {
    res.status(404).send("not found");
  }
};

const updateStudentById = (req, res) => {
  const { id } = req.params;
  const student = req.body;
  const studentUpdated = update(id, student);

  if (studentUpdated) {
    res.status(200).send(studentUpdated);
  } else {
    res.status(404).send("not found");
  }
};

const deleteStudenById = (req, res) => {
  const { id } = req.params;
  const studentDeleted = deleteById(id);
  if (studentDeleted) {
    res.status(200).send(studentDeleted);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getStudentList,
  getStudentDetailById,
  createStudent,
  updateStudentById,
  deleteStudenById,
};
