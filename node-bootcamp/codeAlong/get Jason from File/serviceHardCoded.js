const fs = require('fs');

getJSONFromFile('./data.json', (err, dataResult) => {
  if (err) return console.log('The Issues:', err);
  console.log('The Data is:', dataResult);
})


// מה קורה בפונקציה כאן ?
// שורה 2 : הפונקציה בשורה השניה בעצם אומרת טוב יאללה בוא נקרא את הקובץ שהמשתמש נתן לי את הנתיב \ שם שלו
//  שורה 3 : אם היה אירור שגיאה מסיבה כלשהי אולי שם הקובץ לא נכון למשל ואז בגלל שהיה אירור אני יפעיל את הקולבאק שלך ואז אני נשלח לפונקציה למעלה עם אירור שגיאה ואני אקבל שגיאה בקונסול בגלל זה ...אם לא קיבלנו שגיאה אז אנחנו בעצם אומרים לו בשורה החמישית - תנסה לקחת את הדאטה שקראת מהקובץ גייסון שציינתי לך , ותנסה להפוך אותו לסוג גייסון ואז אם הצלחת אז אחלה .. אם לא הצלחת , (שורה אחת אחרי כלומר הקאץ) אז אני מפעיל שוב פעם את הקולבאק עם אירור שגיאה כלומר מחזיר לקולבאק אירור שוב ואם הכל הולך חלק מגיע לשורת קוד האחרונה ושם ההוצאה לפועל התקינה
function getJSONFromFile(filename, cb) {
  fs.readFile(filename, (err, data) => {
    if (err) return cb(err);
    var json;
    try {
      json = JSON.parse(data);
    } catch (e) {
      return cb(e);
    }
    cb(null, json); // כאשר הכל עבר בצורה תקינה 
  });
};