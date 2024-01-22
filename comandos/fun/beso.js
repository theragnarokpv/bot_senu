const Discord = require('discord.js')

module.exports = {
    name: "beso",
    aliases: "kiss",
    desc: "Un besos dedicado para alguien",

    run: async (client, message, args, prefix) => {

        let user = message.mentions.users.first();
        if (!user){
            return message.reply(" ❌ **No se ha encontrado un usuario!**")
        }
    
        var videos = [
        "https://data.whicdn.com/images/200053205/original.gif",
        "https://media.tenor.com/images/912baa6ce415c3a783969c3e63a5b6b9/tenor.gif",
        "https://data.whicdn.com/images/217573592/original.gif",
        "https://media3.giphy.com/media/9rcnXeGLgiSBNUWLXs/200.gif",
        "https://c.tenor.com/a_iV6wojRKcAAAAC/blowing-kisses-flying-kiss.gif",
        "https://c.tenor.com/1qy2ml7CusIAAAAC/blow-me-a-kiss.gif",
        "https://thumbs.gfycat.com/AnnualEasygoingHedgehog-size_restricted.gif",
        "https://thumbs.gfycat.com/SpryJauntyAsiansmallclawedotter-max-1mb.gif",
        "https://media0.giphy.com/media/acgj0j7OVdD0Y/giphy.gif",
        "https://i.pinimg.com/originals/f9/97/84/f99784ad331bdf3c035adcb60b8e9a19.gif",
        "https://thumbs.gfycat.com/ColorfulTintedAegeancat-max-1mb.gif"
        ];

        var randomvideos = videos[Math.floor(Math.random() * videos.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#b68e0d')
            .setDescription(`💋 ${message.author} le mando un beso a ${user} 💋`)
            .setImage(`${randomvideos}`)
        return message.reply({embeds: [embed]});
    }

}