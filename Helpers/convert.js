async function replacePlaceholderInDocx(docxPath, obj, file_name) {
  try {
    const path = require("path");

    const fs = require("fs");
    const PizZip = require("pizzip");
    const Docxtemplater = require("docxtemplater");

    if (!fs.existsSync(docxPath)) {
      console.error("Error: File not found.");
      return;
    }

    const content = fs.readFileSync(docxPath, "binary");
    const zip = new PizZip(content);
    const doc = new Docxtemplater().loadZip(zip);

    doc.render(obj);

    const buffer = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });
    // console.log("buffer",__dirname);
    const filePath = path.join(
      __dirname,
      "..",
      "Media",
      "doc",
      `${file_name}.docx`
    );
    // console.log(filePath);
    fs.writeFileSync(filePath, buffer);

    console.log("Placeholder replaced successfully.");
    convertDocxToPdf(filePath, file_name);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
const axios = require("axios");

async function convertDocxToPdf(docxPath, pdfPath) {
  const fs = require("fs");
  const path = require("path");
  const { exec } = require("child_process");

  console.log(">>>>>>>>>>>>>>>",__dirname);
  console.log(path.join(__dirname, "..", "Media", "pdf"));

  const filePath = path.join(__dirname, "..", "Media", "pdf", `${pdfPath}.pdf`);
  console.log(filePath);

  // exec(`python convert.py ${docxPath} ${filePath}`, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`exec error: ${error}`);
  //     return;
  //   }
  //   console.log(`Python function output: ${stdout}`);
  // });

  // async function addNumbers(docxPath, num2) {
  try {
    const response = await axios.post("https://fast-property.onrender.com/items", {
      docxPath,
      filePath,
    });
    console.log(response);
    const result = response.data.result;
    console.log(`Result of adding ${docxPath} and ${filePath}: ${result}`);
  } catch (error) {
    console.error("Error calling Python API:", error.message);
  }
  // }
}
module.exports = { replacePlaceholderInDocx, convertDocxToPdf };
