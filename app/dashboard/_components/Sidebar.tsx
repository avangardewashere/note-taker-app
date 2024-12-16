import { Button } from "@/components/ui/button";
import { LayoutDashboard, Shield } from "lucide-react";
import React from "react";
import UploadPDFDialog from "./UploadPDFDialog";

function Sidebar() {
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
    </div>
  );
}

export default Sidebar;
