const fs = require("fs");
const path = require("path");

// List of directories to be cleaned
const directories = ["node_modules", "build", "dist"];

// List of file extensions to be cleaned
const extensions = [".log", ".cache"];

directories.forEach((dir) => {
  fs.rmdirSync(path.join(__dirname, dir), { recursive: true });
  console.log(`${dir} directory deleted`);
});

extensions.forEach((ext) => {
  const files = fs.readdirSync(__dirname).filter((file) => file.endsWith(ext));
  files.forEach((file) => {
    fs.unlinkSync(path.join(__dirname, file));
    console.log(`${file} file deleted`);
  });
});
