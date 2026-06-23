const express = require("express");
const router = express.Router("/");
const {
  createShortURL,
  getVisitHistory,
  redirectURL,
  getAllGeneratedShortURLs,
} = require("../controller/url");

router.post("/", createShortURL);

router.get("/getAllGeneratedShortURLs", getAllGeneratedShortURLs);

router.get("/:shortId", redirectURL);

router.get("/history/:shortId", getVisitHistory);

module.exports = router;
