"use client";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import React, { useState } from "react";
import { LoaderIcon } from "lucide-react";

function UploadPDFDialog({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<any>();
  const generateUploadUrl = useMutation(api.dfStorage.generateUploadUrl);

  const onFileSelect = (e: any) => {
    setFile(e);
  };

  const OnUpload = async () => {
    if (!file) return; // Exit early if no file is selected

    setLoading(true);

    try {
      // Step 1: Generate the upload URL from Convex
      const postUrl = await generateUploadUrl();

      // Step 2: Prepare the file content and make the request
      const result = await fetch(postUrl, {
        method: "POST",
        // headers: {
        //   "Content-Type":  "", // Use file.type to get the correct MIME type
        // },
        body: file, // Send the file directly in the body
      });

      if (!result.ok) {
        throw new Error(
          `Failed to upload file. Server responded with ${result.status}`
        );
      }
      console.log(file.type, " here");
      // Step 3: Parse the storageId from the response
      const { storageId } = await result.json();
      console.log("Storage ID:", storageId);

      setLoading(false);
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full h=20">{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload PDF File</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="mt-5">Select a file to Upload</h2>
              <div className="  gap-2 rounded-md border">
                <input
                  type="file"
                  accept="application/pdf"
                  name="pdffile"
                  id=""
                  onChange={onFileSelect}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="Filename">
                  File Name <span>*</span>
                </label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <div className="w-full bg-slate-100 text-balck flex justify-center my-2 rounded-md border border-slate-300">Close</div>
          </DialogClose>
          <Button>
           
            <div onClick={OnUpload}>
              {loading ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <Button>Upload</Button>
              )}
            </div>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPDFDialog;
