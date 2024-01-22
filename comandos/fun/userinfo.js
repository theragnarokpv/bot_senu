const { MessageFlags } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "userinfo",
    desc: "Comando para solicitar informacion de un  usuario",
    run: async (client, message, args, inter, prefix) => {

        const usuario = message.mentions.members.first() || message.member;

        function formatDate (template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                return template.split(specs[i]).join(item)
            }, template)
        }

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Información del usuario ${usuario}`)
            .setThumbnail(usuario.user.disoplayAvatarURL)
            .addField(`Nickname`,`${usuario.user.tag}`)
            .addField(`Apodo del usuario`,`${usuario.nickname !== null ? `${usuario.nickname}`:
            'ninguno'}`)
            .addField(`ID`,`${usuario.user.id}`)
            .addField("Union al servidor", formatDate('DD/MM/YYYY, a las HH:mm:ss', usuario.joinedAt))
            .addField("Creacion de la cuenta", formatDate('DD/MM/YYYY, a las HH:mm:ss', usuario.user.createdAt))
            .addField(`Roles`, usuario.roles.cache.map(roles => `\ ${roles.name} \'`).join(","))
            .addField(`Boosts`, usuario.premiumSince ? `Usuario booster` : `Usuario no booster`)
            .setThumbnail(usuario.user.displayAvatarURL( {format: "png", dynamic: "true"} ))
        return message.channel.send({embeds: [embed]});
    }
}