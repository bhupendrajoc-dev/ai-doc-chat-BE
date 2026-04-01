const { Chroma } = require("@langchain/community/vectorstores/chroma");
const { getEmbeddings } = require("./embeddingService");

async function storeDocuments(docs) {
  const embeddings = getEmbeddings();
  const vectorStore = await Chroma.fromDocuments(
    docs,
    embeddings,
    {
      collectionName: "docs",
      url: "http://localhost:8000"
    }
  );
  return vectorStore;
}

module.exports = { storeDocuments };