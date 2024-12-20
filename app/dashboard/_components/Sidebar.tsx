"use client";
import { LayoutDashboard, Shield } from "lucide-react";
import React from "react";
import UploadPDFDialog from "./UploadPDFDialog";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Progress } from "@/components/ui/progress";

function Sidebar() {
  const { user } = useUser();

  const fileList = useQuery(api.dfStorage.GetUserFiles, {
    userEmail: `${user?.primaryEmailAddress?.emailAddress}`,
  });

  return (
    <div className="shadow-md h-screen p-7">
      <div className="imageLogo"></div>

      <div className="mt-10">
        <UploadPDFDialog>
          <div className="w-full bg-[#00aa98] h-full rounded-md text-white p-2 hover:bg-[#00aa68] ">
            Upload PDF
          </div>
        </UploadPDFDialog>

        <div className="flex gap-2 items-center p-3 mt-5 hover:bg-[#00aa68] rounded-lg cursor-pointer">
          <LayoutDashboard />
          <h2>Workspace</h2>
        </div>

        <div className="flex gap-2 items-center p-3 mt-5 hover:bg-[#00aa68] rounded-lg cursor-pointer">
          <Shield />
          <h2>Upgrade</h2>
        </div>
      </div>

      <div className="absolute bottom-24 w-[80%]">
        <Progress value={(fileList ? fileList?.length/5 : 2/5)*100}/>
        <p className="text-sm mt-1"> {fileList?.length ?? "0"} out of 5 PDF Uploaded</p>
        <p className="text-sma text-gray-400 mt-2">Upgrade to Upload More!</p>
      </div>
    </div>
  );
}

export default Sidebar;
