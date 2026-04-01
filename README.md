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

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Install & Run Ollama

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

### 4️⃣ Start Backend Server

```bash
npm run dev
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
  "sources": [
    { "page": 1 },
    { "page": 3 }
  ]
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

## 🎯 Future Improvements

* Multi-document support
* Persistent vector database (Chroma)
* Streaming responses
* Authentication & user sessions

---

## 💡 Interview Talking Point

> This project demonstrates a full RAG pipeline using Node.js, integrating document parsing, embeddings, vector search, and local LLM inference for real-time question answering.

---

## 👨‍💻 Author

Bhupendra Joshi
