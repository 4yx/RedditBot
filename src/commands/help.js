async function help(message) {
    const embed = {
        title: `Check my crazy commands below!`,
        author: {
            name: 'FlyingMemes',
        },
        description: `**Prefix: -**\n
**Commands:**
- help
- invite (If you want to invite me on your server just use this command)
- discord (RedditBot support server)
----------------------------------------
**Reddit commands:**
- new [subreddit name] <Number of posts>
- hot [subreddit name] <Number of posts>
- top [subreddit name] <Number of posts>
- random <Number of posts>
- user [username] (looking for users)`,
        timestamp: new Date(),
        color: 16729344,
        footer: {
            text: 'Reddit Bot by IcyzDevelopment',
        },
    }
  await message.channel.send({ embed })
}

module.exports = help
