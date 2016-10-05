// reading in file input here:


fs.readFile('C:\\Users\\mcravens\\dev\\reactCompGenV2\\src\\ComponentTemplate.jsx', 'utf-8',
  (err, templateFileString) => {

    if (err) throw err;
    else {

      var fileNm = process.cwd().split('\\'); // TODO: This makes it Windows-only.
      fileNm = fileNm[fileNm.length - 1];
      fs.readFile(`${process.cwd()}\\${fileNm}.jsx`, 'utf-8',
        (err, parentFileConcatenated) => {
          if (err) throw err;
          else {
            var matchThis = new RegExp('<([A-Z].*)\/>', 'g');
            var myArr,
                matches = [];
            while ((myArr = matchThis.exec(parentFileConcatenated)) !== null) {
              matches.push(myArr[1]);
            }


            for (let component of matches) {

              const newFolderName = `${process.cwd()}\\${component}`;

              fs.mkdir(newFolderName,
                err => {
                  if (err) throw err;
                  else {

                    // create new JSX && SCSS files for new component:
                    const modifiedData = templateFileString.replace(/##component_name##/g, component);

                    fs.appendFile(`${newFolderName}/${component}.jsx`, modifiedData,

                      err => {
                        if (err) throw err;
                        else {

                          fs.appendFile(`${newFolderName}/${component}.scss`, '',

                            err => {
                              if (err) throw err;

                              else {

                                // TODO: To start tomorrow, you'll have to make the parent component file be read again - it changes on each loop!
                                // const strLength = "// Import React Child Components:".length;
                                //
                                // const idx = parentFileConcatenated.indexOf("// Import React Child Components:") + strLength;
                                //
                                //
                                // var replaceText = [parentFileConcatenated.slice(0, idx), importStringValue, parentFileConcatenated.slice(idx)].join('');
                                // TODO: This is all excessive anyway (in terms of callback hell), but this write x times is excessive. Should just write once. I need two things (1. Use callbacks properly and return stuff) (2. Import and export functions - modularization.)
                                // fs.writeFile(`${process.cwd()}\\${fileNm}.jsx`, replaceText,
                                //   err => {
                                //     if (err) throw err;
                                //     else
                                //       process.exit();
                                //   }
                                // );
                              }

                            }

                          );


                        }
                      }

                    );

                  }
                }
              );


            }


          }
        }
      );

    }

  }

);
