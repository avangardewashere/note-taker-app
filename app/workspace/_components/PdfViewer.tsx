 
import React from "react";

interface IPdfViewer {
  fileId?: string | string[];
  fileUrl?: string;
}

const PdfViewer = (props: IPdfViewer) => {
  const { fileId, fileUrl } = props;
  return (
    
   
      <iframe src={fileUrl + "#toolbar=0"}  className="h-[90vh] w-[100%]"   />
 
  );
};

export default PdfViewer;
