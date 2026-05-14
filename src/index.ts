import {Bot} from "grammy"
import {weatherCommand} from "./commands/weather.js"
import {newsCommand} from "./commands/news.js"
import {translateCommand} from "./commands/translate.js"
import {rateCommand} from "./commands/rate.js"

const token = process.env.TOKEN_KEY
if (!token) {
    process.exit("bot token not found")
}


const bot: Bot = new Bot(token)


bot.command('start', async ctx => {
    const user = ctx.from!.first_name ? ctx.from!.first_name : ctx.from!.username
    await ctx.reply(
        `👋 Hello, ${user}!\n\n` +
        `I'm your personal AI assistant. Here's what I can do:\n\n` +
        `🌤️ /w [city] — current weather\n` +
        `📰 /n [topic] — latest news\n` +
        `🌍 /t [lang] [text] — translate text\n` +
        `💱 /r [currency] — exchange rate\n\n` +
        `Powered by Google Gemini AI 🤖`
    )
})


bot.command('w', weatherCommand)
bot.command('n', newsCommand)
bot.command('t', translateCommand)
bot.command('r', rateCommand)

bot.catch(error => {
    console.error(error)
})

await bot.start()
console.log('Bot is running...')