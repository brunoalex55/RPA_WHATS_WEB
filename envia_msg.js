const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({ puppeteer: { headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']} });

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
      // Number where you want to send the message.
 const number = "+55998234079";

 // Your message.
const text = 'Emoji Test -> 😍😍😍😍 '+"Oi amor, este é um teste feito pelo robo whats app"+' Emoji Test -> 🥰🥰🥰🥰🥰🥰';

 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
const chatId = number.substring(1) + "@c.us";

// Sending message.
client.sendMessage(chatId, text);

});


client.initialize();