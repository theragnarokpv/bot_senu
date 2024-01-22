const serverSchema = require(`${process.cwd()}/modelos/servidor.js`);
const warnSchema = require(`${process.cwd()}/modelos/warns.js`);
const config = require(`${process.cwd()}/config/config.json`);
const Discord = require('discord.js')

module.exports = {
    asegurar_todo
}

async function asegurar_todo(guildid, userid) {
    let serverdata = await serverSchema.findOne({ guildID: guildid })
        if (!serverdata) {
            console.log(`Asegurado: Config de Server`);
            serverdata = await new serverSchema({
                guildID: guildid,
                prefijo: config.prefix
            });
            await serverdata.save();
        }

        if(guildid && userid){
            let warn_data = await warnSchema.findOne({ guildID: guildid, userID: userid })
            if (!warn_data) {
                console.log(`Asegurado: Warnings de ${userid} en ${guildid}`);
                warn_data = await new warnSchema({
                    guildID: guildid,
                    userID: userid,
                    warnings: [],
                });
                await warn_data.save();
            }
        }

}