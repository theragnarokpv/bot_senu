console.clear();

///CONSTANTE NECESARIAS///
const Discord = require('discord.js');
const config = require('./config/config.json')
const fs = require('fs');
const discordModals = require('discord-modals')

const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['Message', 'Channel', 'REACTION', 'GUILD_MEMBER','User'],
    intents:[
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
});

discordModals(client);

client.commands= new Discord.Collection();
client.aliases= new Discord.Collection();


client.on('ready', () => {
    client.user.setPresence({ activities: [{ name: "a los enemigos!.", type: "WATCHING"}], status: "online" });
    console.log('Soy tus ojos en el cielo!.');
})

function requerirhandlers() {
    ["command", "events"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
    })
}
requerirhandlers();

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))