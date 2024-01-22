const Discord = require("discord.js");


module.exports = {
    name: "8ball",
    desc: "Comando de respuestas por probabilidad",


    run: async (client, message, args, prefix) => {
        ////Se establece el espacio para la pregunta. En caso de no hacerlo le pide que ponga algo////
        const duda = args.splice(0).join(' ');
        if (!duda)
        return message.reply(`❌ **No me has hecho una pregunta**`);
        else {

            ////////Se establecen las posibles respuestas////////
            const respuestas = [
                "✅ Yes, para que te calles ✅",
                "❌ No ❌",
                "🦠 Obvio microbio 🦠",
                "🤷‍♂️ Talvez 🤷‍♂️",
                "🚫 Ni en un millon de años 🚫",
                "🤬 Sea necio 🤬",
                "🕷️ Me extraña araña 🕷️",
                "🤔 Puede ser 🤔"
            ];
        
        ////////Se hace un alelatorio, para que escoja uno al azar////////
        const elegida =
            respuestas[Math.floor(Math.random() * respuestas.length - 1)];
        

        ////////Se establece el embed que respondera////////
        const embed = new Discord.MessageEmbed()
            .addField(`Tu pregunta fue:`, `${duda}`)
            .addField(`My respuesta es:`, `${elegida}`)
            .setColor(`#b68e0d`)
            .setImage(`https://i.imgur.com/lA9kxhG.gif`)
            
        return message.reply({embeds: [embed]});
        }  
    },
}