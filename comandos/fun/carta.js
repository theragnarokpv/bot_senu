const Discord = require("discord.js");

module.exports = {
    name: "carta",
    desc: "Comando para mandar una carta anonima",
    run: async (client, message, args, prefix) => {
        const mencionado = message.mentions.users.first();
        if (!mencionado){
            return message.channel.send("¿Con quien te quieres disculpar?")
        }

        var texto = args.splice(1).join(' ');
        if(!texto) {
            return message.channel.send("¿Porque te disculpas?")
        }

        const embed = new Discord.MessageEmbed()
            .setTitle("✉️ **Te ha llegado una carta** ✉️")
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setColor('#f7b014')
            .setDescription(`──────────────────•☆•───────────────────\n\n`
                +`**Buenos dias/tardes/noches**\n\n`
                +`Estimad@ ${mencionado} :\n\n`
                +`${texto} \n\n`
                +`──────────────────•☆•───────────────────\n\n`
                +"De antemano muchas gracias por su atención")
            .setImage(`https://binternational.net/wp-content/uploads/2020/09/carta-recomendacion.jpg`)


        message.channel.send({embeds: [embed]});
        message.delete();
    }
}