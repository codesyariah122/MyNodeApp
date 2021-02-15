const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'c288ccf3',
  apiSecret: 'Wn5ZAeT7vw3ZOMjF',
});

const from = 'Uji GantenG';
const to = '6288222668778';
const text = 'Testing Api Secret';

const sms = nexmo.message.sendSms(from, to, text);

if(!sms){
    console.log('gagal')
}else{
  console.log('berhasil ')
}