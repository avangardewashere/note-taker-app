import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const AddFileEntryToDb = mutation({
  args: {
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    fileUrl: v.string(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("pdfFiles", {
      fileId: args.fileId,
      fileName: args.fileName,
      storageId: args.storageId,
      createdBy: args.createdBy,
      fileUrl: args.fileUrl,
    });

    return "Inserted";
  },
});

export const getFileUrl = mutation({
  args: {
    storageId: v.string(),
  },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  },
});

export const GetFileRecord = query({
  args: {
    fileId: v.string(),
  },
  handler: async (ctx, args) => {

    const result = await ctx.db
      .query("pdfFiles")
      .filter((q) => q.eq(q.field("fileId"), args.fileId))
      .collect();

    console.log(result)
  return result[0];
  },

});
