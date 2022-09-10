const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const client = new Client({ puppeteer: { headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']} });
const data = fs.readFileSync('prospect.txt', 'UTF-8');
const lines = data.split(/\r?\n/);
/*
lines.forEach((line) => {
    time_sleep = 10 * 1000
    setTimeout(function() {
        console.log(line);
    },time_sleep);
});
*/
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
        console.log('Iniciou!');
        // Number where you want to send the message.
        const number = "+554298234079";
        // Your message.
        const text = 'Emoji Test -> 😍😍😍😍 '+"Oi amor, este é um teste feito pelo robo whats app"+' Emoji Test -> 🥰🥰🥰🥰🥰🥰';
        // Getting chatId from the number.
        // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
        const chatId = number.substring(1) + "@c.us";
        // Sending message.
        client.sendMessage(chatId, text);
    });


client.initialize();