import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { NextRequest, NextResponse } from "next/server";

const pdfUrl =
  "https://wooden-ant-266.convex.cloud/api/storage/e9bf bd5c-7ca8-404b-b5ac-736772f3a8d7";
const pdfUrl2 =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
export async function GET(req: NextRequest) {
  //1, laod the pdfFile
  const resp = await fetch(pdfUrl2);
  const data = await resp.blob();

  const loader = new WebPDFLoader(data);
  const docs = await loader.load();
  

  let pdfTextContent = '' ;

  docs.forEach(doc=>{
    pdfTextContent=pdfTextContent+doc.pageContent
  })


  return NextResponse.json({ result: pdfTextContent });
}
