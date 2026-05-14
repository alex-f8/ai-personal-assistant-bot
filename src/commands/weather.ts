import {type CommandContext, Context} from "grammy"
import {proxyAiCaller} from "../proxy/proxyAiCaller.js"


export const weatherCommand = async (ctx: CommandContext<Context>): Promise<void> => {
    const city: string = ctx.match?.trim()

    if (!city) {
        await ctx.reply('Please provide a city name.\nExample: /w London')
        return
    }

    await ctx.reply('⏳ Getting weather info...')

    const promptWeather = `What is the current weather in ${city}?
    Use accuweather.com or any reliable weather source.
    Keep the answer short but informative.
    Make it visually appealing with relevant emojis (not too many).
    Use this template:
    
    🌤️ Weather in ${city}:
    
    **Temperature**: +25°C 🌡️
    **Condition**: Partly cloudy
    **Wind**: 10 km/h 🍃
    **Humidity**: 50% 💧
    
    Have a great day! 😊
    
    If you cannot retrieve real weather data, respond with exactly: UNAVAILABLE`

    const resp: string = await proxyAiCaller(promptWeather)

    if (!resp || resp.includes('UNAVAILABLE')) {
        await ctx.reply('❌ Could not retrieve weather data. Please try again later.')
        return
    }
    await ctx.reply(resp, {parse_mode: 'Markdown'})
}