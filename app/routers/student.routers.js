const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getStudentDetailById,
  createStudent,
  updateStudentById,
  deleteStudent,
} = require("../controllers/student.controllers");
const { logFeature } = require("../middleware/logger");
const {
  checkEmpty,
  checkNumberClass,
} = require("../middleware/validations/student.validation");

//lay danh sach hoc sinh
studentRouter.get("/", logFeature, getStudentList);

//lay chi tiet danh sach hoc sinh
studentRouter.get("/:id", getStudentDetailById);

//them hoc sinh -- add thi` dung status 201
// co the check nhieu middleware
studentRouter.post("/", checkEmpty, checkNumberClass, createStudent);

//update hoc sinh
studentRouter.put("/:id", updateStudentById);

//xoa hoc sinh
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
