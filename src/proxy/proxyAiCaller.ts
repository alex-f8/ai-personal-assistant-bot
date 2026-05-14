import {aiAgentGemini} from "../ai/gemini.js"
import {aiAgentClaude} from "../ai/claude.js"


export const proxyAiCaller = async (prompt: string): Promise<string> => {
    let response = 'UNAVAILABLE'
    try {

        response = await aiAgentGemini(prompt)

    } catch (err) {
        console.error(err)

        try {
            response = await aiAgentClaude(prompt)
        } catch (e) {
            console.error(err)
        }

    }
    return response
}