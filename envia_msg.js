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
        lines.forEach((line) => {
            time_sleep = 1 * 1000
            setTimeout(function() {
                console.log(line);
            },time_sleep);
        });

        // Number where you want to send the message.
        const number = "+554298234079";
        // Your message.
        const text = 'Oi tudo bem com você? 💝😊';
        const text2 = 'Me chamo Trindade sou mãe e empreendedora digital, hoje eu trabalho em casa usando apenas meu celular e internet 😍';
        const text3 = 'Ajudo pessoas a terem suas vidas transformadas com rendas altamente lucrativas através da internet  🤩';
        const text4 = 'Se quiser saber mais, responda "quero"  🥰';
        const text5 = 'Eu terei o maior prazer em fazer um atendimento personalizado para você ❤'
        // Getting chatId from the number.
        // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
        const chatId = number.substring(1) + "@c.us";
        // Sending message.
        client.sendMessage(chatId, text);
        client.sendMessage(chatId, text2);
        client.sendMessage(chatId, text3);
        client.sendMessage(chatId, text4);
        client.sendMessage(chatId, text5);
        
   
    });


client.initialize();