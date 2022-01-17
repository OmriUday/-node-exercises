// עשיתי התקנה לספרייה של רקווסט כי יש כאן שימוש בה
const request = require('request');
const fs = require('fs');

module.exports = {
  download
};

function download(url, fileName) {
  return new Promise((resolve, reject) => {
    request(url)
      .pipe(fs.createWriteStream(fileName))
      .on('close', resolve)
      .on('error', reject)
  });
};