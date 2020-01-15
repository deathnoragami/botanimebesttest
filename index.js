const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjY2ODE5MzA1MzQ1NjQ2NTk1.Xh7Fcg.RCWO37Si8Upoooc2_O4ftFhex_4'; 


import { Glitch } from 'glitch-api'
const { Glitch } = require('glitch-api')
const glitch = new Glitch({ token: '5ca5f624-0a66-4915-bef7-1e9000ffa0ee' }) 
const { api } = glitch

// Get a user profile
api.users.get({ id: 1 }).then(user => console.log) // → User

bot.on('ready', () =>{
    console.log('Online!');
    bot.user.setActivity('на AnimeBest.org', { type: 'WATCHING'}).catch(console.error);

const guild = bot.guilds.get('666001545741074485');


const totalUsers = bot.channels.get('666836314229964813');
const onlineUsers = bot.channels.get('666836390440337438');
const codeMonkeys = bot.channels.get('666836339563561030');


setInterval(function() {
  console.log('Обновляем стату...')


  var userCount = guild.memberCount;
  var onlineCount = guild.members.filter(m => m.presence.status !== 'offline').size
  var coderCount = guild.roles.get('666030253571047440').members.size;
  

  console.log("Всего пользователей: " + userCount);
  console.log("Онлайн: " + onlineCount);
  console.log("Админов: " + coderCount);

  totalUsers.setName("👥Всего участников: " + userCount)
  .then(newChannel => console.log(`Обновлено: ${newChannel.name}`))
  .catch(console.error);

  onlineUsers.setName("💎Онлайн: " + onlineCount)
  .then(newChannel => console.log(`Обновлено: ${newChannel.name}`))
  .catch(console.error);

  codeMonkeys.setName("😈Админов: " + coderCount)
  .then(newChannel => console.log(`Обновлено: ${newChannel.name}`))
  .catch(console.error);
  }, 60000)

});


bot.on('message', msg=>{
    if(msg.content == "Привет"){
        msg.reply('даров сука'); 
    }
})



bot.login(token);

