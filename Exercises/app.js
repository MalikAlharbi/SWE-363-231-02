//get dir name & read & count # of files

const fileSystem = require("fs");
if (process.argv.length !== 3) {
  console.error("Usage node app <dir name>");
  process.exit();
}

fileName = process.argv[2];

fileSystem.readdir(fileName, (err, files) => {
  if (err) console.log("cannot read directory");
  else console.log(files);
  process.exit();
});
