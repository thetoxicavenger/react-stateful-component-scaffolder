const importEachNewComponent = require('./importEachNewComponent');

module.exports = function writeToParent() {
  importEachNewComponent(
    (newImportsText, parentPath) => {
      var fs = require('fs');
      fs.writeFile(parentPath, newImportsText, 'utf-8',
        err => {
          if (err) throw err;
        }
      );
    }
  );
}
