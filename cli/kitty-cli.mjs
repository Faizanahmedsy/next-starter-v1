import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Made by Faizanahmed Saiyed
// https://faizansaiyed.vercel.app/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moduleName = process.argv[2];
const templatesDir = path.join(__dirname, "module-templates");

if (!moduleName) {
  console.error("Please provide a module name.");
  process.exit(1);
}

// Capitalize the first letter of the moduleName
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const moduleFolder = moduleName.toLowerCase();
const modulePath = path.join(__dirname, moduleFolder);

// Check if module already exists
if (fs.existsSync(modulePath)) {
  console.error(
    `Module "${moduleFolder}" already exists. Please choose a different name.`
  );
  process.exit(1);
}

// Function to read and replace template content
const getTemplateContent = (templateFile) => {
  const templatePath = path.join(templatesDir, templateFile);
  if (!fs.existsSync(templatePath)) {
    console.error(`Template file "${templateFile}" not found.`);
    process.exit(1);
  }

  let templateContent = JSON.parse(
    fs.readFileSync(templatePath, "utf-8")
  ).content;
  templateContent = templateContent.replace(
    /\{moduleName\}/g,
    capitalizeFirstLetter(moduleName)
  );
  templateContent = templateContent.replace(
    /\{moduleName.toLowerCase\(\)\}/g,
    moduleName.toLowerCase()
  );

  return templateContent;
};

// Define paths for different module files
const paths = [
  {
    path: `${moduleFolder}/list/${capitalizeFirstLetter(moduleName)}List.tsx`,
    content: getTemplateContent("ListComponent.json"),
  },
  {
    path: `${moduleFolder}/list/${capitalizeFirstLetter(
      moduleName
    )}ListTable.tsx`,
    content: getTemplateContent("ListTable.json"),
  },
  {
    path: `${moduleFolder}/list/columns.tsx`,
    content: getTemplateContent("Columns.json"),
  },
  {
    path: `${moduleFolder}/list/ActionsCell.tsx`,
    content: getTemplateContent("ActionsCell.json"),
  },
  {
    path: `${moduleFolder}/${capitalizeFirstLetter(moduleName)}.hook.ts`,
    content: getTemplateContent("ApiHook.json"),
  },
  {
    path: `${moduleFolder}/mutate/CreateUpdate${capitalizeFirstLetter(
      moduleName
    )}.tsx`,
    content: getTemplateContent("CreateUpdateComponent.json"),
  },
  {
    path: `${moduleFolder}/mutate/${capitalizeFirstLetter(moduleName)}Form.tsx`,
    content: getTemplateContent("ComponentForm.json"),
  },
  {
    path: `${moduleFolder}/${capitalizeFirstLetter(moduleName)}.types.ts`,
    content: getTemplateContent("types.json"),
  },
];

console.log("Script directory:", __dirname);

// Create files from templates
paths.forEach(({ path: filePath, content }) => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);

  // Create the folder if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`🟢 ⤳ Created directory: ${dir}`);
  }

  // Create the file with the provided content
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`🟢 ╰› Created file: ${fullPath}`);
  }
});

const fixedArt = `

.·:'''''''''''''''''''''''''''''''''''':·.
: : ░█░█░▀█▀░▀█▀░▀█▀░█░█░░░█▀▀░█░░░▀█▀ : :
: : ░█▀▄░░█░░░█░░░█░░░█░░░░█░░░█░░░░█░ : :
: : ░▀░▀░▀▀▀░░▀░░░▀░░░▀░░░░▀▀▀░▀▀▀░▀▀▀ : :
'·:....................................:·'

Module "${moduleFolder}" created successfully.

 ∧,,,∧
( •·•)
/  づ♡  Happy Coding! 🚀
`;

console.log(fixedArt);
