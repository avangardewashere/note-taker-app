import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai"
import { action } from "./_generated/server";

export const ingest = action({
  args: {},
  handler: async (ctx) => {
    await ConvexVectorStore.fromTexts(
      ["Hello world", "Bye bye", "What s this?"],
      [{ props: 2 }, { prop: 1 }, { prop: 3 }],
        new GoogleGenerativeAIEmbeddings({
            apiKey:"AIzaSyDmE-uX7BywWaZ5rNpuig3XNhKA6qr9Egc",
            model: "text-embedding-004", // 768 dimensions
            taskType:TaskType.RETRIEVAL_DOCUMENT,
            title:"Document title",
        }),
      { ctx }
    );
  },
});
