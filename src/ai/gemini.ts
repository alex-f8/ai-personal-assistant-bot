import {google} from "@ai-sdk/google"
import {generateText} from "ai"


export const aiAgentGemini = async (prompt: string): Promise<string> => {
    const response = await generateText({
        model: google('gemini-2.5-flash-lite'),
        prompt: prompt
    })
    return String(response.output)
}