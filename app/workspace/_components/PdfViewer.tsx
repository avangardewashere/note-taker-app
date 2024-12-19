import React from 'react'

interface IPdfViewer{
    fileId?:string | string[],
}

const PdfViewer = (props:IPdfViewer) => {
    const {fileId} = props;
  return (
    <div>
      <span>spdf viewer for {fileId ?? "file Id not found"}</span>
    </div>
  )
}

export default PdfViewer
