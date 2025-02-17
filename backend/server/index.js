const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // For handling CORS issues

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

var db = mysql.createConnection(process.env.REACT_APP_DB_CONN);


db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// Sample route
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM users;', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});