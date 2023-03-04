require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { fetchSubjects, addSubject, saveSubjectDetails } = require('./controller/subject.controller');
const { fetchRooms, postRoom, deleteRoom } = require('./controller/room.controller');

mongoose.connect(process.env.MONGODB_URI)
    .then((res) => console.log('Successfully connected to the database...'))
    .catch((err) => console.log("Failed to connect to the database!"));

app.use(express.json());

app.get('/subjects', fetchSubjects);
app.patch('/subjects', saveSubjectDetails);
app.post('/subjects', addSubject);

app.get('/rooms', fetchRooms);
app.post('/rooms', postRoom);


app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}...`));