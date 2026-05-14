import type {CommandContext, Context} from "grammy"
import {proxyAiCaller} from "../proxy/proxyAiCaller.js"


export const rateCommand = async (ctx: CommandContext<Context>): Promise<void> => {
    const rate = ctx.match?.trim().toUpperCase()

    if (!rate) {
        await ctx.reply(
            'Please provide a currency code.\nExample: /r EUR\nExample: /r GEL'
        )
        return
    }

    await ctx.reply('⏳ Fetching exchange rate...')

    const prompt = `What is the current exchange rate for ${rate} against USD?
    Use reliable sources like xe.com, exchangerate-api.com, or Google Finance.
    Keep the answer short and clear.
    Use this template:
    
    💱 Exchange Rate: ${rate}
    
    • 1 USD = X.XX ${rate}
    • 1 ${rate} = X.XX USD
    
    📊 Trend today: slightly up / slightly down / stable
    🕐 Updated: today
    
    If the currency code is invalid or unrecognized, respond with exactly: INVALID_CURRENCY`

    const response = await proxyAiCaller(prompt)

    if (!response || response.includes('INVALID_CURRENCY')) {
        await ctx.reply(`❌ "${rate}" is not a valid currency code. Please try again.\nExample: /r EUR`)
        return
    }

    await ctx.reply(response, {parse_mode: 'Markdown'})
}