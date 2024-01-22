const discord = require('discord.js')

module.exports = {
  name: "canal",
    desc: "Comando para crear un nuevo canal",
    run: async (client, message, args, inter, prefix) => {
    const roleIDs = ["696045769454518313", "696043230793302066"];
    if(message.member.roles.cache.some(role => roleIDs.includes(role.id))){
      const nombre = args.splice(0).join(' ');
      if(!nombre) return message.reply('Debe darle un nombre al canal');

      message.guild.channels
      .create(`🧡┊${nombre}`, {
        type: "text",
      })
      .then((channel) => {
        const categoria = '856624401192714297'
        channel.setParent(categoria)
      })
    
      message.channel.send({content: `¡Canal creado exitosamente! ${message.author}`})
    }else (message.reply("**No tiene permisos para usar este comando**"));
  }
}