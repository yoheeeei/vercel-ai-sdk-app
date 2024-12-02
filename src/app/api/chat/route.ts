import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const POST = async (req: Request) => {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    messages,
  });

  return result.toDataStreamResponse();
};
