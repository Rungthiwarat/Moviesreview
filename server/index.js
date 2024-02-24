const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cruddatabase",
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//create post
app.post("/api/insert", (req, res) => {
  const movieName1 = req.body.movieName;
  const movieReview1 = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_review(movieName,movieReview)VALUES(?,?)";
  db.query(sqlInsert, [movieName1, movieReview1], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data into database");
    } else {
      console.log("Data inserted successfully");
      res.status(200).send("Data inserted successfully");
    }
  });
});
// Test insert data
// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO movie_review(movieName,movieReview)VALUES('Batwomen','very bad film')";
//   db.query(sqlInsert, (err, result) => {
//     res.send("Hello world to you on Sunday");
//   });
// });
app.get("/rungthi", (req, res) => {
  res.send("hello Rungthi");
}); //สร้าง rout
app.listen(3001, () => {
  console.log("running on port 3001");
});
