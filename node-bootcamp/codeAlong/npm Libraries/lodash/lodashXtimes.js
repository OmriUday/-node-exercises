const lodash = require('lodash');

// פונקציה שמחזירה מערך של 5 מספרים רנדומליים (אבל זה לא בגלל הלודאש זאת סתם פונקציה פשוטה)
function getRandomScore() {
  return Math.round(Math.random() * 100);
}
// ה-lodash גורם לכך שבמקום לרשום לולאת פור-איץ' או משהו כזה כדי שיכניס כל פעם איבר לתוך המערך שאני יוצר , הפונקציה המובנת הזאת עושה את זה אוטומטי אני רק מציין כמה פעמים אני רוצה ובמקרה הזה זה 5 פעמים
var result = lodash.times(5, getRandomScore);
console.log('Result', result);