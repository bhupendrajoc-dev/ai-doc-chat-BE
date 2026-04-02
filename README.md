# 📄 AI Document Chat Backend (RAG System)

## 🚀 Overview

This backend service powers an **AI-based document chat application** using a **Retrieval-Augmented Generation (RAG)** pipeline.

Users can upload PDF documents and ask questions. The system retrieves relevant content from the document and generates accurate answers using a local LLM.

---

## 🧠 How It Works

```text
PDF Upload → Text Extraction → Embeddings → Vector Store → Query → LLM → Answer
```

1. 📤 User uploads a PDF
2. 📄 PDF is parsed into text chunks
3. 🔢 Text is converted into embeddings
4. 🗂 Stored in a vector database
5. ❓ User asks a question
6. 🔍 Relevant chunks are retrieved
7. 🤖 LLM generates answer using context

---

## 🛠 Tech Stack

* Node.js + Express
* LangChain (JS)
* Ollama (Local LLM runtime)
* LLaMA3 (for answer generation)
* nomic-embed-text (for embeddings)
* MemoryVectorStore / Chroma (vector DB)
* Multer (file upload)

---

## 📁 Project Structure

```text
src/
 ├── server.js              # Entry point
 ├── routes/                # API routes
 ├── controllers/           # Request handlers
 ├── services/              # Business logic (RAG, vector store)
 └── utils/                 # PDF loader
```

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone <your-repo-url>
cd <repo-name>
```

---

### Install Dependencies

```bash
npm install
```

---

### Install & Run Ollama

Install Ollama: https://ollama.com

Pull required models:

```bash
ollama pull llama3
ollama pull nomic-embed-text
```

Start Ollama:

```bash
ollama serve
```

---

## Installing and Using Chroma

Chroma is used as the vector database for storing and retrieving document embeddings. Follow the steps below to install and use Chroma:

### Installation

1. Install Chroma using pip:
   ```bash
   pip install chromadb
   ```

2. Verify the installation:
   ```bash
   chroma --version
   ```

### Running Chroma

1. Start the Chroma server locally:
   ```bash
   chroma run --host localhost --port 8000
   ```

2. Ensure the server is running by visiting `http://localhost:8000` in your browser.

---

### Configuration

- The backend connects to Chroma using the default URL `http://localhost:8000`.
- You can modify the URL in the environment variables or directly in the code if needed.

### Start Backend Server

```bash
npm run start
```

Server runs at:

```text
http://localhost:5000
```

---

## 📡 API Endpoints

### 📤 Upload PDF

```http
POST /upload
```

**Form Data:**

* `file`: PDF file

---

### 💬 Ask Question

```http
POST /chat
```

**Request Body:**

```json
{
  "question": "What is AWS Lambda?"
}
```

**Response:**

```json
{
  "answer": "AWS Lambda is a serverless compute service...",
}
```

---

## 🧠 Key Features

* ✅ PDF document ingestion
* ✅ Semantic search using embeddings
* ✅ Context-aware AI responses (RAG)
* ✅ Page-level source citation
* ✅ Local LLM (no external API cost)

---

## ⚠️ Notes

* Ensure Ollama is running before starting backend
* Models must be downloaded (`llama3`, `nomic-embed-text`)
* For large PDFs, processing may take time

---

## 💡 Interview Talking Point

> This project demonstrates a full RAG pipeline using Node.js, integrating document parsing, embeddings, vector search, and local LLM inference for real-time question answering.

---

## 👨‍💻 Author

Bhupendra Joshi