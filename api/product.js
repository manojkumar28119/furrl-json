const { readFileSync } = require("fs");
const { join } = require("path");

module.exports = (req, res) => {
  const data = readFileSync(join(__dirname, "../data.json"));
  res.status(200).json(JSON.parse(data));
};