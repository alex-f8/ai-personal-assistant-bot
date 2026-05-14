import {generateText} from "ai"
import {anthropic} from "@ai-sdk/anthropic"


export const aiAgentClaude = async (prompt: string): Promise<string> => {
    const response = await generateText({
        model: anthropic('claude-opus-4.5'),
        prompt: prompt
    })
    return String(response.output)
}