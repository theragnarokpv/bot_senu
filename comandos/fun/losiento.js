const Discord = require("discord.js");
const { Modal, TextInputComponent, showModal } = require("discord-modals");

module.exports = {
    name: "losiento",
    desc: "Comando para pedir disculpas alguien",
    run: async (client, message, args, inter, prefix) => {
        const mencionado = message.mentions.users.first();
        if (!mencionado){
            return message.channel.send("¿Con quien te quieres disculpar?")
        }

        var reason = args.splice(1).join(' ');
        if(!reason) {
            return message.channel.send("¿Porque te disculpas?")
        }

        const echocolate = "🍫"
        const epizza = "🍕"
        const eflores = "🌻"
        const esalida = "🏝️"
        const edado = "🎲"

        const embed = new Discord.MessageEmbed()
            .setTitle("**Una persona te quiere pedir disculpas**")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${message.author} cree que ha hecho alguna idiotes por lo cual debe disculparse. Asi que como buen amigo de esta persona, ${mencionado} te pedimos que lo perdones`)
            .addField("Su razon es:" ,`${reason}`)
            .addField("Para que lo perdones podras elegir como perdonarlo:\n\n",  `🍫 = Chocolates\n`
            +'🍕 = Pizza\n'
            +'🌻 = Flores\n'
            +'🏝️ = Salir algun lado (cita)\n'
            +'🎲 = A tu elección')
            .setImage(`https://i.gifer.com/mgF.gif`)

        const mchocolates = new Discord.MessageEmbed()
            .setTitle("🍫 **CHOCOLATES** 🍫")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${mencionado} ha eligido chocolates, ${message.author} tendras que buscar la forma de entregarle la cantidad que creas que sea necesaria para que te perdone`)
            .setImage(`https://i.pinimg.com/originals/52/11/77/521177ec319345bc89b1b2e9d5b590e4.gif`)

        const mpizza = new Discord.MessageEmbed()
            .setTitle("🍕 **PIZZA** 🍕")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${mencionado} ha eligido chocolates, ${message.author} tendras que buscar la forma de entregarle la cantidad que creas que sea necesaria para que te perdone`)
            .setImage(`https://i.pinimg.com/originals/b2/9d/dc/b29ddc3f53254716afd48bd9863cb121.gif`)

        const mflores = new Discord.MessageEmbed()
            .setTitle("🌻 **FLORES** 🌻")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${mencionado} ha eligido flores, ${message.author} busca un ramo de flores y entregaselo.`)
            .setImage(`https://media0.giphy.com/media/6bcfcd1Qkt0wPiW862/200.gif`)

        const msalida = new Discord.MessageEmbed()
            .setTitle("🏝️ **SALIDA ALGUN LADO** 🏝️")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${mencionado} ha eligido una salida ${message.author} si tienen intenciones de salir como algo mas, di aprovecha a salir de una vez con ese objetivo. Si son solo amigos, pues una salida de vez en cuando sirve`)
            .setImage(`https://i.pinimg.com/originals/9a/b0/66/9ab06630a91eff903e0630bcadb4ce3a.gif`)

        const mdado = new Discord.MessageEmbed()
            .setTitle("🎲 **A SU DECISIÓN** 🎲")
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor('RANDOM')
            .setDescription(`${mencionado} ha eligido que queda a su desición, ${message.author} deberas preguntarle directamente que es lo que desea. Por favor has caso a lo que dice para ser perdonado`)
            .setImage(`https://c.tenor.com/EVAvj5EWgWYAAAAM/fry-futurama.gif`)

         
            const msg = await message.channel.send({embeds: [embed]});
            await msg.react(echocolate);
            await msg.react(epizza);
            await msg.react(eflores);
            await msg.react(esalida);
            await msg.react(edado);
    
            
            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
    
                if (reaction.emoji.name === echocolate) {
                    await msg.edit({embeds: [mchocolates]});
                }
                if (reaction.emoji.name === epizza) {
                    await msg.edit({embeds: [mpizza]});
                }
                if (reaction.emoji.name === eflores) {
                    await msg.edit({embeds: [mflores]});
                }
                if (reaction.emoji.name === esalida) {
                    await msg.edit({embeds: [msalida]});
                }
                if (reaction.emoji.name === edado) {
                    await showModal(modal, {
                        client: client,
                        interaction: inter 
                    })
                    await msg.edit({embeds: [mdado]});
                }
            });
    }
}