const { askQuestion } = require("../services/ragService");

exports.ask = async (req, res) => {

  const { question } = req.body;

  const answer = await askQuestion(question);

  res.json({ answer });

};