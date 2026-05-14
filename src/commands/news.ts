import type {CommandContext, Context} from "grammy"
import {proxyAiCaller} from "../proxy/proxyAiCaller.js"


export const newsCommand = async (ctx: CommandContext<Context>) => {
    const news = ctx.match?.trim()

    if (!news) {
        await ctx.reply('Please provide a topic.\nExample: /n technology')
        return
    }

    await ctx.reply('⏳ Fetching latest news...')

    const prompt = `Give me the 3 latest news headlines about: ${news}
    Use reliable news sources (BBC, Reuters, CNN, TechCrunch, etc).
    Keep each headline short with a brief 1-sentence summary.
    Make it visually clear and readable.
    Use this template:
    
    📰 Latest news: ${news}
    
    1️⃣ *Headline one*
    Brief summary of the news item.
    
    2️⃣ *Headline two*
    Brief summary of the news item.
    
    3️⃣ *Headline three*
    Brief summary of the news item.
    
    🕐 Updated: today
    
    If you cannot find relevant news, respond with exactly: UNAVAILABLE`

    const response = await proxyAiCaller(prompt)

    if (!response || response.includes('UNAVAILABLE')) {
        await ctx.reply('❌ Could not retrieve news. Please try again later.')
        return
    }

    await ctx.reply(response, {parse_mode: 'Markdown'})
}