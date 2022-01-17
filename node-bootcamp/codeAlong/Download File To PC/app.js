const downloadService = require('./downloadService');
const url = 'https://thumbs.dreamstime.com/b/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg';
downloadService.download(url, 'download/img.png')
  .then(() => {
    console.log('The Image Download Succesfully');
  });