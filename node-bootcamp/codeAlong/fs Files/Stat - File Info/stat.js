const fs = require('fs');

statFileAsync();

function statFileAsync() {
  fs.stat('textFile.txt', (err, stat) => {
    console.log('Stats:', stat);
  });
};