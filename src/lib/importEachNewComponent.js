
const regexComponentMatch = require('./regexComponentMatch');
const readTemplate = require('./readTemplate');


module.exports = function importEachNewComponent(cb) {
  const fs = require('fs');
  const templateFileContents = fs.readFileSync('C:\\Users\\mcravens\\dev\\reactCompGenV2\\src\\ComponentTemplate.jsx', 'utf-8');
  regexComponentMatch(
    (matches, parentString, parentPath) => {
      var appendStr = "\n\/\/ Import React Child Components:";

        for (let component of matches) {
          appendStr += `\nimport ${component} from \'.\/${component}\/${component}\'\;`;

          // make new components:
          const newDir = `${process.cwd()}\\${component}`;
          fs.mkdir(newDir,
            err => {
              if (err) throw err;
              else {

                const endComponentJSX = templateFileContents.replace(/##component_name##/g, component);

                fs.appendFileSync(`${newDir}\\${component}.jsx`, endComponentJSX);
                fs.appendFileSync(`${newDir}\\${component}.scss`, `.${component} \{\n\n\}`);

              }
            }
          );
        }

      const searchStr = 'react\'\;'
      const endOfReactImport = parentString.indexOf(searchStr) + searchStr.length;
      const newImportsText = [parentString.slice(0, endOfReactImport), appendStr, parentString.slice(endOfReactImport)].join('');
      cb(newImportsText, parentPath);
    }
  );


};
