const { nanoid } = require("nanoid");
const URL = require("../models/url");

// Controller functions

const createShortURL = async (req, res) => {
  const shortId = nanoid(8); // Generate a unique short ID of length 8
  console.log("redirectURL:", req.body);
  const redirectURL = req.body; // Get the original URL from the request body

  if (!redirectURL.url) {
    return res.status(400).json({ error: "redirectURL is required" });
  }

  await URL.create({ shortId, redirectURL: redirectURL.url, visitHistory: [] }); // Save the short URL to the database
  return res
    .status(201)
    .json({ shortId, redirectURL: redirectURL.url, success: true }); // Return the short ID and original URL in the response
};

const getAllGeneratedShortURLs = async (req, res) => {
  const urls = await URL.find({});
  return res.json(urls);
};

const redirectURL = async (req, res, next) => {
  // Logic to redirect to the original URL
  const shortId = String(req.params.shortId);
  console.log("shortId:", typeof shortId);
  const url = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
  );

  if (!url) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.redirect(url.redirectURL);
};

const getVisitHistory = async (req, res) => {
  const shortId = String(req.params.shortId);
  const url = await URL.findOne({ shortId });

  if (!url) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  return res.json({
    totalVisits: url.visitHistory.length,
    visitHistory: url.visitHistory,
  });
};

module.exports = {
  createShortURL,
  redirectURL,
  getVisitHistory,
  getAllGeneratedShortURLs,
};
