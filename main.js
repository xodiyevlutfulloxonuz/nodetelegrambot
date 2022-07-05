const TelegramBot = require('node-telegram-bot-api')

require('dotenv').config()


const TOKEN=process.env.TOKEN 
const bot = new TelegramBot(TOKEN, {polling: true});

let user={}

let state=0 


bot.on('message',async(message)=>{
    const chatId=message.chat.id 
    const name=message.from.first_name
    const username=message.from.username
    let keyboards={
        resize_keyboard:true,
        one_time_keyboard:true,
        keyboard:[
            ['Sherik Kerak','Ish joyi kerak'],
            ['Xodim kerak','Ustoz kerak'],
            ['Shogird kerak']
        ]

    }
    
    
    if(message.text=='/start'){
        

        
    
        bot.sendMessage(chatId,`<b> Assalomu alaykum ${name}\nUstozShogird kanalining rasmiy botiga xush kelibsiz</b>!

/help yordam buyrugi orqali nimalarga qodir ekanligimni  bilib \noling!
        `,{
            parse_mode:'HTML',
            reply_markup:keyboards
        })
    }
   else if(message.text=='/help'){

        bot.sendMessage(chatId,`UzGeeks faollari tomonidan tuzilgan Ustoz-Shogird kanali. 

  Bu yerda Programmalash bo'yicha
#Ustoz,  
#Shogird,
#oquvKursi,
#Sherik,  
#Xodim va 
#IshJoyi 
topishingiz mumkin. 
        
E'lon berish: @UstozShogirdBot
        
Admin @UstozShogirdAdminBot`)
        
    }
    else if(message.text=='Sherik Kerak'){
        bot.sendMessage(chatId,`Sherik topish uchun ariza berish

Hozir sizga bir nechta savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi togri bolsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`)
        bot.sendMessage(chatId,'<b> Ism familiyangizni kiriting.</b>',{
            parse_mode:"HTML"
        })
        state=1 
    }

    else if(state==1){
        user.full_name=message.text 
        bot.sendMessage(chatId,`📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
 Texnologiya nomlarini vergul bilan ajrating. Masalan, 
        
Java, C++, C#`)
      state=2 
    }
 else if(state==2){
    user.texnalogiya=message.text 

    bot.sendMessage(chatId,`📞 Aloqa: 

 Boglanish uchun raqamingizni kiriting?
 Masalan, +998 90 123 45 67`)
 state=3 
 }
 else if(state==3){
    user.aloqa=message.text 
    bot.sendMessage(chatId,`🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
state=4
 }
 else if(state==4){
    user.hudud=message.text 
    bot.sendMessage(chatId,`💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?`)
state=5 
 }
 else if(state==5){
    user.narx=message.text 
    bot.sendMessage(chatId,`👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki oqiysizmi?
 Masalan, Talaba`)
 state=6
 }
 else if(state==6){
    user.kasb=message.text 
    bot.sendMessage(chatId,`🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
  state=7 
 }

 else if(state==7){
    user.vaqt=message.text 
    bot.sendMessage(chatId,`🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.`)
  state=8 
 }
 else if(state==8){
    user.maqsad=message.text 
    bot.sendMessage(chatId, `Sherik kerak:

🏅 Sherik: ${user.full_name}
📚 Texnologiya: ${user.texnalogiya}
🇺🇿 Telegram: @${username}
📞 Aloqa: ${user.aloqa}
🌐 Hudud: ${user.hudud}
💰 Narxi: ${user.narx}
👨🏻‍💻 Kasbi: ${user.kasb}
🕰 Murojaat qilish vaqti: ${user.vaqt}
🔎 Maqsad: ${user.maqsad}
    
#sherik`)


let tasdiq_keyboards={
    resize_keyboard:true,
    one_time_keyboard:true,
    keyboard:[
        ['Ha','Yoq'],
        
    ]

}
bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
  reply_markup:tasdiq_keyboards
})
state=9 
     
 }

 else if(message.text=='Ha' && state==9){
    bot.sendMessage(chatId, `📪 So'rovingiz tekshirish uchun adminga jo'natildi!

 E'lon 24-48 soat ichida kanalda chiqariladi.`)
 }
 else if(message.text=='Yoq' && state==9){  
    bot.sendMessage(chatId, 'Malumotlaringiz qabul qilinmadi',{
        reply_markup:keyboards
    })
 }
 
 
})



