const discord = require('discord.js')

module.exports = {
  name: 'jumbo',
  desc: "Has un emoji lo en gran tamaño.",
  run: async (client, message, args, prefix) => {
    const emoji = message.guild.emojis.cache.find(X => X.name === args[0].split(":")[1])
    if(!emoji){
        return message.channel.send("El emoji no es valido, o no se ha encontrado.")
    }

    message.channel.send(emoji.url)
  }
}