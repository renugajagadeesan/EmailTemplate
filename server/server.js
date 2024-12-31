const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const segmentRoutes = require('./routes/segmentRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://megarajan55:email123@email.ol2gq.mongodb.net/emailtemplate?retryWrites=true&w=majority&appName=email', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
// app.use('/api/segments', segmentRoutes);
app.use('/', studentRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});