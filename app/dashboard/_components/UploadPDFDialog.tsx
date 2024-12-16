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

import React from "react";

function UploadPDFDialog({ children }: { children: React.ReactNode }) {
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
                <input type="file" accept="application/pdf" name="pdffile" id="" />
              </div>
              <div className="mt-2">
                <label htmlFor="Filename">
                  File Name <span>*</span>
                </label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <Button>Upload</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
         className="sm:justify-end">
            <DialogClose asChild>
                <Button type="button" variant={"secondary"}>Close</Button>
            </DialogClose>
            <Button>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPDFDialog;
