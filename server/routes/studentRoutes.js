const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');
const studentController = new StudentController();

router.get('/', studentController.getAllStudents);

router.post('/', studentController.createStudents);

router.get('/:id', studentController.getStudentById);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);

module.exports = router;