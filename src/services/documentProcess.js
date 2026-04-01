const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

async function splitDocument(text) {

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 100
  });
  const docs = await splitter.createDocuments([text]);
  console.log("==============text", docs)

  return docs;
}

module.exports = { splitDocument };