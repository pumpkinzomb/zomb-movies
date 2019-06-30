var express = require("express");
const path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/toprated", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/popular", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/upcoming", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/detail/:movie_id", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/search/:title", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

router.get("/genresearch/:genre_id", function(req, res, next) {
  res.sendFile(path.join(__dirname, "./../public", "index.html"));
});

module.exports = router;
