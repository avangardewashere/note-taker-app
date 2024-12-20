import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { action } from "./_generated/server";
import { v } from "convex/values";

export const ingest = action({
    args: {
      splitText: v.any(), // Array of text chunks
      fileId: v.string(), // File identifier
    },
    handler: async (ctx, args) => {
      const metadataArray = args.splitText.map((_:string, index:number) => ({
        fileId: args.fileId,
        chunkIndex: index,
      }));
  
      await ConvexVectorStore.fromTexts(
        args.splitText, // Array of text chunks
        metadataArray, // Array of metadata objects
        new GoogleGenerativeAIEmbeddings({
          apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
          model: "text-embedding-004", // 768 dimensions
          taskType: TaskType.RETRIEVAL_DOCUMENT,
          title: "Document title",
        }),
        { ctx }
      );
  
      return "Completed";
    },
  });

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const vectorStores = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey: "AIzaSyDmE-uX7BywWaZ5rNpuig3XNhKA6qr9Egc",
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );

    const resultOne = await (
      await vectorStores.similaritySearch(args.query, 1)
    ).filter((q) => q.metadata.fileId == args.fileId);


    console.log("Raw similaritySearch results:", resultOne);
 
    return JSON.stringify(resultOne); 
  },
});
