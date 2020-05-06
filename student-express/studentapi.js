
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3000

let students = [{
    "studentId":"101",
    "studentName":"Dhivya",
    "studentGrade":"First",
    "address":"xyz",
    "phn":"45678",
    "course":"cse"
},

{
    "studentId":"102",
    "studentName":"Reshma",
    "studentGrade":"Second",
    "address":"abc",
    "phn":"45656",
    "course":"it"
},

{
    "studentId":"103",
    "studentName":"Pujitha",
    "studentGrade":"First",
    "address":"lmn",
    "phn":"23456",
    "course":"ece"
}
];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/student', (req, res) => {
    res.json(students);
});

app.post('/student', (req, res) => {
    //  res.json(books);
    const student = req.body;
    console.log(student);
    students.push(student);

    res.send('student is added to the database');
});



app.get('/student/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    for (let student of students) {
        if (student.json === studentId) {
            res.json(student);
            return;
        }
    }
    res.status(404).send('student not found');
});
app.put('/student/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const newStudent = req.body;

    for (let i = 0; i < students.length; i++) {
        let student = students[i]

        if (student.studentId === studentId) {
            students[i] = newStudent;
        }
    }
    res.send('student is edited');
});

app.delete('/student/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    students = students.filter(i => {
        if (i.studentId !== istudentId) {
            return true;
        }
        return false;
    });
    res.send('student is deleted');
});
    app.listen(port, () =>
        console.log(`hello world is listening on port ${port}!`));