const readParentComponent = require('./readParentComponent');

module.exports = function regexComponentMatch(cb) {
  readParentComponent(
    (parentString, parentPath) => {
      var matchThis = new RegExp('<([A-Z].*)\/>', 'g');
      var myArr,
          matches = [];
      while ((myArr = matchThis.exec(parentString)) !== null) {
        matches.push(myArr[1]);
      }
      cb(matches, parentString, parentPath);
    }
  );
}
