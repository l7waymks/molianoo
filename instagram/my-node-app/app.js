const axios = require('axios');

// رمز التوكن الخاص بالبوت الذي حصلت عليه من BotFather
const token = '7680322085:AAHE-IUBEEv91_IZQkYXiMGkiM2mTpxV8xE';  // استبدل بـ التوكن الخاص بك

// معرف المحادثة (chat ID) للمستخدم الذي ستوجه إليه الرسالة
const chatId = '7535466524';  // استبدل بـ معرف المحادثة الخاص بك

// رابط API الخاص بـ Telegram
const url = `https://api.telegram.org/bot${token}/sendMessage`;

// الرسالة التي تريد إرسالها
const message = 'مرحبًا! هذه رسالة من بوت تلغرام بواسطة Node.js';

// إرسال الطلب باستخدام Axios
axios.post(url, {
  chat_id: chatId,
  text: message,
})
  .then(response => {
    console.log('تم إرسال الرسالة بنجاح:', response.data);
  })
  .catch(error => {
    console.error('حدث خطأ أثناء إرسال الرسالة:', error);
  });
