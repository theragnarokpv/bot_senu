const { MessageFlags } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "patada",
    desc: "Comando para mandar una patada a alguien",
    run: async (client, message, args, inter, prefix) => {
        let user = message.mentions.users.first();
        if (!user){
            return message.channel.send("Por favor dime a quien quiere darle una patada")
        }
    
        var videos = [
            "https://24.media.tumblr.com/tumblr_lw1z1ngYE41r3gb3zo1_400.gif",
            "https://k30.kn3.net/taringa/2/6/7/0/2/6/40/jusescrust/7E0.gif",
            "https://media1.giphy.com/media/l3V0j3ytFyGHqiV7W/giphy.gif",
            "https://media.giphy.com/media/l3V0owRecDARCvcHu/giphy.gif",
            "https://reactiongifs.me/wp-content/uploads/2013/08/gtfo-kick.gif",
            "https://media4.giphy.com/media/5kFzbgWGWEFndMHUW1/giphy.gif",
            "https://media1.tenor.com/images/e1ca875ef6da8fb064a83ff1d907ad29/tenor.gif?itemid=13202864",
            "https://thumbs.gfycat.com/AntiqueAgileBalloonfish-small.gif",
        ];

        var randomvideos = videos[Math.floor(Math.random() * videos.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#e22dee')
            .setImage(`${randomvideos}`)
        return message.channel.send({content: `${message.author} le mando una patada a ${user}`, embeds: [embed]})
    }
}