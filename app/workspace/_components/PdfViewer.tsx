import React from "react";

interface IPdfViewer {
  fileId?: string | string[];
  fileUrl?: string;
}

const PdfViewer = (props: IPdfViewer) => {
  const { fileId, fileUrl } = props;
  return (
    <div>
      {/* <span>spdf viewer for {fileId ?? "file Id not found"}</span> */}
      <iframe src={fileUrl} className="h-[90vh]" width={"100%"}  />
    </div>
  );
};

export default PdfViewer;
