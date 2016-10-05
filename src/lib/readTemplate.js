
module.exports = function readTemplate(templatePath, cb) {
  const fs = require('fs');
  fs.readFile(templatePath, 'utf-8',
    (err, templateFileString) => {
      if (err) throw err;
      else {
        cb(templateFileString);
      }
    }
  );
}
