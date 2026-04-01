const { OllamaEmbeddings } = require("@langchain/ollama");

function getEmbeddings() {

  return new OllamaEmbeddings({
    model: "nomic-embed-text"
  });

}

module.exports = { getEmbeddings };