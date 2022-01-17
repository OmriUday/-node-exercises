// נהוג לשמור את הספרייה הזו בתור משתנה של מקו תחתון (_)
const _ = require('lodash');
// זה מערך של פוסטים
var posts = [
  {
    id: '123',
    name: 'Omri',
    title: 'First Post',
    content: 'Bla Bla ...'
  },
  {
    id: '123456',
    name: 'Omri Uday',
    title: 'Second Post',
    content: 'Bla Bla Bla Bla ...'
  }
]
// נותן ללואד-דאש את המערך שלמעלה ואני אומר לו בעזרת השימוש בפונקציה שלו כלומר קי-ביי , שומע תמיין לי את כל המערך לפי ה-איי-די של כל פוסט כדי שאוכל לגשת לפוסט מסוים שאני רוצה בהנחה שיש לי את ה-איי-די שלו. ( אפשר גם סינונים אחרים ולאוו דוקא איי-די) ואם אין התאמה אז זה יחזיר לי אנדפיין
var postsMap = _.keyBy(posts, 'id');
var post = postsMap['123456'];

console.log('postsMap:', postsMap);
console.log('Post:', post);