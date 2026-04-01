const { loadPDF } = require("../utils/pdfLoader");
const { splitDocument } = require("../services/documentProcess");
const { storeDocuments } = require("../services/vectorStore");

exports.uploadDoc = async (req, res) => {

  const text = await loadPDF(req.file.path);
  // const docs = await splitDocument(text);

  await storeDocuments(text);

  res.json({ message: "Document indexed successfully" });

};