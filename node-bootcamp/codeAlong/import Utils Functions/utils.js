const axios = require('axios');

module.exports = {
  ConsoleHelloWorld,
  ConsoleByeBye,
  YesOrNo
}

function ConsoleHelloWorld() {
  console.log('Hello World');
}

function ConsoleByeBye() {
  console.log('Bye Bye');
}

// Axios : מושך מאתר פשוט מאד 2 תשובות רנדומליות - Yes \ No
function YesOrNo() {
  return axios.get('http://yesno.wtf/api').then(res => res.data);
}