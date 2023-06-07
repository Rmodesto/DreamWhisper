import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Embed the text using OpenAI API
export async function embedText(text: string): Promise<number[]> {
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: text,
  });

  return response.data[0].embedding;
}
