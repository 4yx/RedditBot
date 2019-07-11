const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function invite(message) {
    try {
            const embed = {
                    author: {
                        name: 'FlyingMemes',
                        url: 'https://flowradio.ml',
                    },
                    description: turndownService.turndown(`<a href="https://discord.gg/BY5BPnR">Join support server</a>`),
                    color: 16729344,
                    footer: {
                    icon_url: 'https://hackbrightacademy.com/content/uploads/2018/08/Reddit-logo.png',
                    text: 'Reddit Bot by IcyzDevelopment',
                }
            }

        await message.channel.send( { embed } )

    } catch(error) {
        console.log(error)
    }
}

module.exports = invite
