const getParentFilePath = require('./getParentFilePath');
const parentFilePath = getParentFilePath(process.cwd());

module.exports = function readParentComponent(cb) {
  const fs = require('fs');
  fs.readFile(parentFilePath, 'utf-8',
    (err, parentFileString) => {
      if (err) throw err;
      else {
        cb(parentFileString, parentFilePath);
      }
    }
  );
}
