// mang la` du lieu cho nen dem qua day
let studentList = [
  {
    id: 1,
    fullName: "Ly tran bao minh",
    age: 21,
    numberClass: 14,
  },
  {
    id: 2,
    fullName: "Luc My Ngan",
    age: 22,
    numberClass: 15,
  },
  {
    id: 3,
    fullName: "Le van bay",
    age: 28,
    numberClass: 15,
  },
];

const getList = () => {
  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

//findIndex la` dang thao tac voi du lieu
const getDetail = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const student = studentList[index];
    return student;
  } else {
    return false;
  }
};

const create = (student) => {
  const newStudent = {
    id: Math.random(),
    ...student,
  };
  studentList = [...studentList, newStudent];
  return newStudent;
};

const update = (id, student) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const studentOld = studentList[index];
    //thang nao thay doi thi` no se ghi de len lai ; o day id khong doi
    const studentUpdated = { ...studentOld, ...student };

    studentList[index] = studentUpdated;
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  const index = studentList.findIndex((student) => student.id == id);
  if (index !== -1) {
    const studentDelete = studentList[index];
    studentList = studentList.filter((student) => student.id !== id);
    return studentDelete;
  } else {
    return false;
  }
};

module.exports = { getList, getDetail, create, update, deleteById };
