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
            try {
                envia_msg('+557598245773');
                sleep.sleep(20);
                envia_msg('+556699293821');
                sleep.sleep(20);
                envia_msg('+5511953355399');
                sleep.sleep(20);
                envia_msg('+5518996996028');
                sleep.sleep(20);
                envia_msg('+5515997037340');
                sleep.sleep(20);
                envia_msg('+558399967626');
                sleep.sleep(20);
                envia_msg('+5513997379714');
                sleep.sleep(20);
                envia_msg('+557488367311');
                sleep.sleep(20);
                envia_msg('+557188382515');
                sleep.sleep(20);
                envia_msg('+556195806351');
                console.log("finalizou");
                
            }catch(err) {
                console.log("Não consegui enviar msg")
            }
        
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
    client.sendMessage(chatId, text);
    client.sendMessage(chatId, text2);
    client.sendMessage(chatId, text3);
    client.sendMessage(chatId, text4);
    client.sendMessage(chatId, text5);
    console.log("Enviou")
}

client.initialize();