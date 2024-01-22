const { MessageFlags } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "motivación",
    desc: "Comando para solicitar una frase motivadora",
    run: async (client, message, args, inter, prefix) => {
        
        const frase1 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Michael Jordan", "https://www.eluniverso.com/resizer/b9uykCBsyge9bPPKSl_VrQV4LRA=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/MVA7AMHLBJER7LJACGCRHF2MAE.jpg")
            .setColor('RANDOM')
            .setDescription("Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo")
            .setImage(`https://images.clarin.com/2020/05/21/subastan-unos-calzoncillos-muy-usados___-Tnyga7H2-_340x340__1.jpg`)
        
        const frase2 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Henry Ford", "https://emprendedoresnews.com/wp-content/uploads/2012/04/henry-ford-18-e1496273968925.jpg")
            .setColor('RANDOM')
            .setDescription("No busques los errores, busca un remedio")
            .setImage(`https://oroinformacion.com/wp-content/uploads/2021/09/henry-ford.jpg`)
        
        const frase3 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Rafael Nadal", "https://upload.wikimedia.org/wikipedia/commons/0/0c/Rafael_Nadal_%2812054444625%29_%28cropped%29.jpg")
            .setColor('RANDOM')
            .setDescription("Si no pierdes, no puedes disfrutar de las victorias")
            .setImage(`https://estaticos-cdn.sport.es/clip/72a41a1d-41b6-4147-9eac-d62ef374528d_alta-libre-aspect-ratio_default_0.jpg`)

        const frase4 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Walt Disney", "https://www.biografiasyvidas.com/biografia/d/fotos/disney.jpg")
            .setColor('RANDOM')
            .setDescription("La mejor manera para empezar es callándote y empezar a hacer")
            .setImage(`https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RJZ7Y7O2SFHUJL6YSOECSFGBJM.jpg`)

        const frase5 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Oprah Winfrey", "https://soygirlpower.com/wp-content/uploads/2019/07/nota_apple-apuesta-al-negocio-de-la-tv-de-la-mano-de-oprah-winfrey.jpg")
            .setColor('RANDOM')
            .setDescription("Transforma tus heridas en sabiduría")
            .setImage(`https://www.chicagotribune.com/resizer/NFVUl4xELm_1FhBBGwb5_2_-mPQ=/415x342/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/BVHKYJP52JCW3MXY4SBQQ5LANI.jpg`)

        const frase6 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Albert Einstein", "https://imagenes.elpais.com/resizer/vpQd5f9ltsO9YJ_264p3BJdUuUs=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/V46Y3WWAFB7YAVTR7WGIGWIQC4.jpg")
            .setColor('RANDOM')
            .setDescription("La vida es como montar en bicicleta. para mantener el equilibrio tienes que avanzar")
            .setImage(`https://www.superprof.es/blog/wp-content/uploads/2016/03/12782555_10209119959340390_1143215607_n.jpg`)

        const frase7 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Marilyn Monroe", "https://cdn2.vogue.es/uploads/images/thumbs/201317/marilyn_monroe_2905_620x.jpg")
            .setColor('RANDOM')
            .setDescription("No pares cuando estés cansado. Para cuando hayas terminado")
            .setImage(`https://tn.com.ar/resizer/n7YQ3zOEyxL0plleG0myfiQdwow=/1440x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/3VKXC4CSAAMDHXMI6XXJT247GY.jpg`)

        const frase8 = new Discord.MessageEmbed()
            .setTitle("Alguna vez dijo:")
            .setAuthor("Confucio", "https://www.frasesypensamientos.com.ar/imagenes/autor/confucio.jpg")
            .setColor('RANDOM')
            .setDescription("No pares cuando estés cansado. Para cuando hayas terminado")
            .setImage(`https://www.latercera.com/resizer/Hjv6AK0-fPyBD9tQPkVSxGnmkXM=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/D7MCNYKRQJEJ7AYC7MVPDIQWHA.jpg`)
        
        var embeds = [
            frase1,
            frase2,
            frase3,
            frase4,
            frase5,
            frase6,
            frase7,
            frase8,
        ];
    
        const randomembeds = embeds[Math.floor(Math.random() * embeds.length)];
        return message.channel.send({content: `${message.author}`, embeds: [randomembeds]})
    }
}