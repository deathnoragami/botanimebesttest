const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const token = 'NjY2ODE5MzA1MzQ1NjQ2NTk1.Xh5uYQ.ns1EwQluWYnB8Gka81S0UKVKz9E';


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

