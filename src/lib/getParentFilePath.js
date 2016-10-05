
module.exports = function getParentFilePath(cwd) {
  var file = cwd.split('\\'); // TODO: This makes it Windows-only.
  file = file[file.length - 1];
  return `${cwd}\\${file}.jsx`
}
