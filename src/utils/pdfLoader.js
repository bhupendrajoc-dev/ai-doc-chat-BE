const fs = require("fs");
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");

async function loadPDF(filePath) {
  const data = new Uint8Array(fs.readFileSync(filePath));

  const pdf = await pdfjsLib.getDocument({ data }).promise;

  const docs = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    const text = content.items.map(item => item.str).join(" ");

    docs.push({
      pageContent: text,
      metadata: {
        source: filePath,
        page: i
      }
    });
  }

  return docs;
}

module.exports = { loadPDF };