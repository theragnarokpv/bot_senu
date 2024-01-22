const discord = require('discord.js');

module.exports = {
  name: "rps",
  desc: "Juego de piedra, papel  o tijera",
  run: async (client, message, args, inter, prefix) => {

    const embed = new discord.MessageEmbed()
      .setTitle("JUEGO RPS")
      .setDescription("Reacciona para jugar")
      .setTimestamp();

    const msg = await message.channel.send({ embeds: [embed] });

    await msg.react("🗻")
    await msg.react("✂")
    await msg.react("🧻")

    const filter = (reaction, user) => {
      return ["🗻", "✂", "🧻"].includes(reaction.emoji.name) && user.id === message.author.id;
    }

    const choices = ["🗻", "✂", "🧻"];

    const me = choices[Math.floor(Math.random() * (choices.length))];

    msg.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] }).then(async (collected) => {

      const reaction = collected.first();

      const result = new discord.MessageEmbed()
        .setTitle("RESULTADO")
        .addField("Su elección", `${reaction.emoji.name}`)
        .addField("Mi elección", `${me}`);

      await msg.edit({ embeds: [result] });

      if ((me === "🗻" && reaction.emoji.name === "✂") ||
        (me === "🧻" && reaction.emoji.name === "🗻") ||
        (me === "✂" && reaction.emoji.name === "🧻")) {
        return message.reply("Ud perdio!");
      } else if (me === reaction.emoji.name) {
        return message.reply("Es un empate!");
      } else {
        return message.reply("Ud ganó!");
      }

    }).catch(collected => {
      return message.reply('El juego se cancelara si ud no responde a tiempo');
    });
  }
}