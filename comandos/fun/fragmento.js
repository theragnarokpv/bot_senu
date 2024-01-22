const Discord = require("discord.js");

module.exports = {
    name: "fragmento",
    desc: "Descripcion de los fragmentos",
    run: async (client, message, args, prefix) => {
        
        const principal = new Discord.MessageEmbed()
            .setTitle("Fragmentos del eden")
            .setColor('#b19b25')
            .setDescription("¿Quieres conocer los fragmentos del eden que existen dentro de la saga de assanssins creed?.\n\n"
            + "Los fragmentos son herramientas que eran utilizadas por una primera civilización para intentar controlar a la humanidad.")
            .setImage(`http://pm1.narvii.com/6687/b47860fbbebd4b8fb1840a7113b5c762ef9496b9_00.jpg`)
            .setFooter('Solicitado por:' + message.member.displayName, message.author.avatarURL())
        
        const fragmento1 = new Discord.MessageEmbed()
            .setTitle("Frutos del eden")
            .setColor('#b19b25')
            .setDescription("Los Frutos del Edén, conocidos también como Manzanas del Edén, son Fragmentos del Edén creados por la Primera Civilización con el fin de controlar" 
            + "a los humanos, su creación y mano de obra.")
            .setImage(`https://static.wikia.nocookie.net/theassassinscreed/images/c/cc/Apple_of_Eden.png/revision/latest/scale-to-width-down/350?cb=20160220215558&path-prefix=es`)
            .addField("Categoria de artefacto", "Artefacto de control.")
            .addField("Poderes","Su principal habilidad es la de crear ilusiones y proyecciones de gran realismo. pueden lanzar ataques de energía en forma de rayos, ráfagas, "
            +"ondas o esferas que reaccionan violentamente al contacto. Al menos un Fruto del Edén ha mostrado la habilidad de lanzar ataques cinéticos capaces de ralentizar "
            +"enemigos e incluso de volver invisible a su portador por tiempo limitado. Asimismo pueden neutralizar los poderes de otros artefactos como los Cetros del Edén.")
            .addField("Curiosidades","🟠 El héroe mitológico Heracles recibió doce trabajos encargados por Euristeo, uno de los cuales consistía en robar las manzanas del Jardín de las Hespérides. El héroe fue capaz de cumplir con el encargo, sin embargo tales manzanas eran en realidad Frutos del Edén\n\n"
            +"🟠 Durante las bodas de Tetis y Peleo apareció Eris, uno de Los Que Vinieron Antes, prometiendo entregar una 'manzana de oro' a la mujer más hermosa.  Aquel título quedó en disputa entre Hera, Atenea y Afrodita por lo que Zeus decidió que Paris tomase la decisión final\n\n"
            +"🟠 El héroe mitológico Heracles recibió doce trabajos encargados por Euristeo, uno de los cuales consistía en robar las manzanas del Jardín de las Hespérides. El héroe fue capaz de cumplir con el encargo, sin embargo tales manzanas eran en realidad Frutos del Edén.")
            .setFooter('Solicitado por:' + message.member.displayName, message.author.avatarURL())
        
        const fragmento2 = new Discord.MessageEmbed()
            .setTitle("Centro del Edén")
            .setColor('#b19b25')
            .setDescription("Los Centros del Edén son Fragmentos del Edén creados por la Primera Civilización para mantener dominados a los humanos. Aunque en diferentes aspectos, los Cetros siempre representan soberanía y habilidad de mando.")
            .setImage(`https://static.wikia.nocookie.net/theassassinscreed/images/8/8b/AC2_Staff_of_Eden_render.png/revision/latest/scale-to-width-down/150?cb=20160221161600&path-prefix=es`)
            .addField("Categoria de artefacto", "Artefacto de control.")
            .addField("Poderes","Los Cetros son capaces de generar ilusiones poderosas que permiten a su portador mantener una posición de ventaja frente a sus oponentes. También tienen el poder de volverlo invisible durante un breve período de "
            +"tiempo. Según su diseño, un Cetro del Edén puede funcionar junto con un Fruto amplificando sus poderes y permitiendo acceder a templos o cámaras precursores")
            .addField("Curiosidades","🟠 Uno de los primeros portadores conocidos de un Cetro del Edén es el profeta Moisés, que se valió de los poderes del artefacto para crear la mítica ilusión de abrir el Mar Rojo liberando así a los hebreos de Egipto\n\n"
            +"🟠 El faraón Shebitku, de la Dinastía XXV de Egipto, usó un Cetro para gobernar alrededor del siglo VII a. e. c.\n\n"
            +"🟠 En 1839, mientras exploraban las cavernas bajo el Palacio de Verano de Amritsar en busca del Koh-i-Noor, Arbaaz Mir y Raza Soora se toparon con una estatua de Durga. Esta, además del mencionado diamante, llevaba las representaciones de otros dos Fragmentos del Edén: un Fruto y un Cetro muy parecido al cetro imperial")
            .setFooter('Solicitado por:' + message.member.displayName, message.author.avatarURL())

        const fragmento3 = new Discord.MessageEmbed()
            .setTitle("Tridente del Edén")
            .setColor('#b19b25')
            .setDescription("La existencia del Tridente fue descubierta de manera accidental generando gran interés tanto de templarios como Asesinos.")
            .setImage(`https://static.wikia.nocookie.net/theassassinscreed/images/9/99/Tridente_del_Ed%C3%A9n_completo.jpg/revision/latest/scale-to-width-down/191?cb=20180711140514&path-prefix=es`)
            .addField("Categoria de artefacto", "Artefacto de control.")
            .addField("Poderes", "Fue un artefacto precursor con la capacidad de proyectar sobre los seres humanos al menos tres emociones distintas: fe ciega, miedo y devoción.")
            .addField("Curiosidades","🟠 Uno de los primeros portadores conocidos de un Cetro del Edén es el profeta Moisés, que se valió de los poderes del artefacto para crear la mítica ilusión de abrir el Mar Rojo liberando así a los hebreos de Egipto\n\n"
            +"🟠 El faraón Shebitku, de la Dinastía XXV de Egipto, usó un Cetro para gobernar alrededor del siglo VII a. e. c.\n\n"
            +"🟠 En 1839, mientras exploraban las cavernas bajo el Palacio de Verano de Amritsar en busca del Koh-i-Noor, Arbaaz Mir y Raza Soora se toparon con una estatua de Durga. Esta, además del mencionado diamante, llevaba las representaciones de otros dos Fragmentos del Edén: un Fruto y un Cetro muy parecido al cetro imperial")
            .setFooter('Solicitado por:' + message.author, message.author.avatarURL())
        
        
        
    
        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("Fragmentos de control")
            .setPlaceholder("Ninguna opcion selecionada")
            .setMaxValues(2)
            .addOptions([
                {
                    label: "Fruto del eden",
                    description: "Fragmento de control",
                    value: "fruto" 
                },
                {
                    label: "Centro del eden",
                    description: "Fragmento de control",
                    value: "centro" 
                },
                {
                    label: "Tridente del eden",
                    description: "Fragmento de control",
                    value: "tridente" 
                }
            ])
        )
        
        const msg = await message.channel.send({ embeds: [principal], components: [row]})

        const ifilter = i => i.user.id === message.author.id;
        
        const collector = msg.createMessageComponentCollector({ filter: ifilter})

        collector.on("collect", async i =>{
            if(i.values[0] === "fruto"){
                await i.deferUpdate()
                i.editReply({embeds: [fragmento1], components: []})
            }
            if(i.values[0] === "centro"){
                await i.deferUpdate()
                i.editReply({embeds: [fragmento2], components: []})
            }
            if(i.values[0] === "tridente"){
                await i.deferUpdate()
                i.editReply({embeds: [fragmento3], components: []})
            }
        })
    }
}