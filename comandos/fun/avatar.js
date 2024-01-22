const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Mira la foto de un usuario en un tamaño mayor",
    
    run: async (client, message, args, prefix) => {
        const user = message.mentions.users.first() || message.author;


        const embed = new Discord.MessageEmbed()
        .setTitle("Ud sabra que hace con esta foto 😏😏")
        .setImage(user.displayAvatarURL({dynamic: false, format: "png", size: 1024}))
        .setColor('#b68e0d')
        .setTimestamp()

    return message.reply({embeds: [embed]});
    }
}