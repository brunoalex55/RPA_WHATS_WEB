const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
var sleep = require('sleep');
const fs = require('fs');
const client = new Client({ puppeteer: { headless: true,args: ['--no-sandbox', '--disable-setuid-sandbox']} });

client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
        console.log('Iniciou!');
        var array = fs.readFileSync('prospect.txt').toString().split("\n"); //reading file
        for (i in array) {
            console.log(array[i]);
            saved.push(array[i].substring(1)); //array with number 
        }
        const contacts = [];
        for (var i = 0; i < saved.length; i++) {
            contacts.push(await client.getContactById(saved[i] + '@c.us')); 
        
        }
        console.log(contacts);        
    });

 
function envia_msg(numero){
    // Number where you want to send the message.
    const number = numero;
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
    sleep.sleep(1);
    client.sendMessage(chatId, text);
    sleep.sleep(1);
    client.sendMessage(chatId, text2);
    sleep.sleep(1);
    client.sendMessage(chatId, text3);
    sleep.sleep(1);
    client.sendMessage(chatId, text4);
    sleep.sleep(1);
    client.sendMessage(chatId, text5);
    console.log("enviou para o numero "+numero)
}

client.initialize();