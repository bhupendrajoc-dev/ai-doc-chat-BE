const { ChatOllama } = require("@langchain/ollama");
const { Chroma } = require("@langchain/community/vectorstores/chroma");
const { getEmbeddings } = require("./embeddingService");

async function askQuestion(question) {

  const embeddings = getEmbeddings();

  const vectorStore = await Chroma.fromExistingCollection(
    embeddings,
    { collectionName: "docs",
      url: "http://localhost:8000"
     }
  );

  const results = await vectorStore.similaritySearch(question, 4);

  const context = results.map(r => r.pageContent).join("\n");

  const model = new ChatOllama({
    model: "llama3"
  });

  const response = await model.invoke(`
Answer using the context below.

Context:
${context}

Question:
${question}
`);

  return response.content;

}

module.exports = { askQuestion };