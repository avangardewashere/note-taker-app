import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function WorkspaceHeader({ fileName }: { fileName: string }) {
  return (
    <div className="p-0 flex justify-between h-[10vh] shadow-md ">
      <div
        className="imageLogo ml-2"
        style={{ width: "140px", height: "90%", marginBlock: "auto" }}
      ></div>

      <h2 className="flex items-center font-bold">{fileName}</h2>

      <div className="h-full flex items-center gap-4 mr-4">
        {/* to do: save functionality */}
        <Button>Save Document</Button>
        <UserButton />
      </div>
    </div>
  );
}
