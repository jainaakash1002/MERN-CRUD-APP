const Student = require('../models/studentModel');

class controller {
    getAllStudents = async (req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };
    getStudentById = async (req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };
    createStudents = async (req, res) => {
        const student = req.body;
        const newStudent = new Student(student);
        try {
            await newStudent.save();
            res.status(201).json(newStudent);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
    updateStudent = async (req, res) => {
        let student = await Student.findById(req.params.id);
        student = req.body;
        const updated = new Student(student);
        try {
            await Student.updateOne({ _id: req.params.id }, updated);
            res.status(201).json(updated);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
    deleteStudent = async (req, res) => {
        try {
            await Student.deleteOne({ _id: req.params.id });
            res.status(201).json("Student deleted Successfully");
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    };
}

module.exports = controller;