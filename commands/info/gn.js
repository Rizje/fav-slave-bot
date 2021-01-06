const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'gn',
    category: 'info',
    description: "Returns gn's socials.",
    run : async(client, message, args) => {
        const embed = new MessageEmbed()
        .addFields(
            {name: 'Discord:', value: '<@391756169217310720>'},
            {name: 'Insta:', value: '[@gnfq](https://instagram.com/gnfq)'},
            {name: 'TikTok:', value: '[@.gnfq](https://tiktok.com/@.gnfq)'}
        )
        message.channel.send(embed)
    }
}