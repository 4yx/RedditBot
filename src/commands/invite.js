const TurndownService = require('turndown')
const turndownService = new TurndownService()

async function invite(message) {
    try {
            const embed = {
                    title: 'I have a link for you:',
                    description: turndownService.turndown(`<a href="https://discordapp.com/oauth2/authorize?client_id=545356515754639475&permissions=8&scope=bot">Click here to invite me!</a>`),
                    color: 16729344,
                    footer: {
                    text: 'Reddit Bot by IcyzDevelopment',
                }
            }

        await message.channel.send( { embed } )

    } catch(error) {
        console.log(error)
    }
}

module.exports = invite
