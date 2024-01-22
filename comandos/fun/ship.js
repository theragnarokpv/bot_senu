const Discord = require("discord.js");

module.exports = {
    name: "ship",
    desc: "Comando para shipear a 2 personas",
    run: async (client, message, args, inter, prefix) => {
        let mencionado = message.mentions.users.first();
        let mencionado2 = message.mentions.users.first(-1);
        let porcentaje = Math.floor(Math.random() * 100) + 1;
    
        if (!mencionado){
            return message.channel.send("Debes mencionar a 2 personas")
        }
        if (!mencionado2){
            mencionado = message.author
        }
        const embed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle("¡¡Hay nuevo shipeo en el servidor!!")
            .setDescription(`Cuanta posibilidad hay de que ellos sean pareja\n\n${mencionado} ❤️+❤️ ${mencionado2}`)
            .addField("---------------------------------------------------------------", `${porcentaje}%`,true)
            .setImage(`https://i.pinimg.com/originals/ec/d2/c5/ecd2c54620f4e7e21db851bc146bb087.gif`)
            .setFooter(`Solicitado por: ${message.author.username}`)
        message.channel.send({embeds: [embed]});
    }
}