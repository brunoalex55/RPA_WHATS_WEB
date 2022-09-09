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
});

client.on('message', async msg => {
    client.sendMessage('554298234079', 'Oi amor, este é um teste feito pelo robo whats app');
});

client.initialize();