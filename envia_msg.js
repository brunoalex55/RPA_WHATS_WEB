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
client.on('ready', async () => {
        console.log('Iniciou!');
        var array = fs.readFileSync('prospect.txt').toString().split("\n"); //reading file
        for (i in array) {
            console.log("enviando");
            numero = array[i];
            console.log('Enviando para : '+numero)
            envia_msg('+'array[i])
            await sleep.sleep(5);        
        }
    });

 
function envia_msg(numero){
    console.log(numero)
    // Number where you want to send the message.
    const number = numero;
    // Your message.
    const text = 'Seu dia a dia anda estressante e você não consegue ter disposição na cama não é mesmo?\n'+
    '\n'+
    'Saiba que  isto é muito mais comum do que você imagina.\n'+
    '\n'+
    'Meu nome é Bruno e estou aqui para ajudá-lo com um produto 100% natural e APROVADO PELA ANVISA.\n'+
    '\n'+
    'Este produto não tem contra-indicações e melhora em:\n'+
    '\n'+
    '✅ Mais disposição no seu dia.\n'+
    '\n'+
    '✅ Intensifica os níveis hormonais\n'+
    '\n'+
    '\n'+
    'É altamente eficiente e, diferente dos demais do mercado, ele não influencia só a área do pênis, mas sim no organismo como um todo.\n'+
    '\n'+
    '\n'+
    'Se você é HOMEM, como otimiza o fluxo de sangue na zona pélvica, ele ainda consegue garantir uma ereção máxima, com o aumento do tamanho do pênis, tanto na espessura quanto no comprimento, além de:\n'+
    '\n'+
    '✅ Ter ereções mais poderosas \n'+
    '\n'+
    '✅ Expandir as dimensões do pênis\n'+
    '\n'+
    '✅ Melhorar a sensibilidade da região pélvica à estímulos.\n'+
    '\n'+
    '\n'+
    'Utilize por, no mínimo, 2 meses para que os efeitos cheguem o auge de desempenho.\n'+
    '\n'+
    '\n'+
    'Quero ajudá-lo, me chame aqui, terei o prazer de conversar contigo.\n'+
    '';
    // Getting chatId from the number.
    // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
    const chatId = number.substring(1) + "@c.us";
    // Sending message.
    sleep.sleep(1);
    client.sendMessage(chatId, text);
    console.log("enviou para o numero "+numero)
}
client.initialize();