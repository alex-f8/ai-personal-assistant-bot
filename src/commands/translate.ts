import {type CommandContext, Context} from "grammy"
import {proxyAiCaller} from "../proxy/proxyAiCaller.js"


export const translateCommand = async (ctx: CommandContext<Context>): Promise<void> => {
    const word = ctx.match?.trim()

    if (!word) {
        await ctx.reply(
            'Please provide a language and text to translate.\nExample: /t Spanish Good morning!'
        )
        return
    }

    const parts = word.split(' ')
    if (parts.length < 2) {
        await ctx.reply(
            'Format: /t [language] [text]\nExample: /t French Hello, how are you?'
        )
        return
    }

    const targetLanguage = parts[0]
    const textToTranslate = parts.slice(1).join(' ')

    await ctx.reply('⏳ Translating...')

    const prompt = `Translate the following text to ${targetLanguage}:
    
    "${textToTranslate}"
    
    Respond using this format:
    
    🌍 Translation to ${targetLanguage}:
    
    *Original:* ${textToTranslate}
    *Translation:* [translated text here]
    
    If the target language is invalid or unrecognized, respond with exactly: INVALID_LANGUAGE`

    const response = await proxyAiCaller(prompt)

    if (!response || response.includes('INVALID_LANGUAGE')) {
        await ctx.reply(`❌ "${targetLanguage}" is not a recognized language. Please try again.`)
        return
    }

    await ctx.reply(response, {parse_mode: 'Markdown'})
}