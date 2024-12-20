"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import PdfViewer from "../_components/PdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import TextEditor from "../_components/TextEditor";

export default function Workspace() {
  const { fileId ,fileName} = useParams();
  const fileInfo = useQuery(api.dfStorage.GetFileRecord, {
    fileId: fileId as string,
  });
  //   const GetFileInfo = async () => {
  //     const result = await GetFileRecord({fileId:fileId});
  //   };

  useEffect(()=>{
    console.log(fileInfo)
  },[fileInfo])

  return (
    <div>
      <WorkspaceHeader fileName={fileInfo?.fileName ?? ""} />
      <div className="grid grid-cols-2 gap-5">
        <div>{/* text editor */}
            <TextEditor fileId={fileId?.toString() ?? ""}/>
        </div>
        <div>
          <PdfViewer fileId={fileId} fileUrl={fileInfo ? fileInfo?.fileUrl :"" } />
        </div>
      </div>
    </div>
  );
}
