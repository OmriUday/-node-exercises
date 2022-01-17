const resultUtils = require('./utils')
console.log('This is The All Object With All Functions');
console.log('resultUtils', resultUtils);

// לשים לב שמה שלקחתי מהקובץ של הפונקציות זה אובייקט שלם שבתוכו יש את כל הפונקציות שאני רוצה להשתמש בהן אז אני מפעיל אותן כך :
console.log('This is The Result from the Hello World Function:');
resultUtils.ConsoleHelloWorld();
console.log('This is The Result from the Bye Bye Function:');
resultUtils.ConsoleByeBye();

console.log('This is The Result from the Random Yes Or No Function:');
resultUtils.YesOrNo()
  .then(contentsFromYesOrNoFunction => console.log(contentsFromYesOrNoFunction))
console.log('Check Async Working (i need to be first even i after the code ...)');