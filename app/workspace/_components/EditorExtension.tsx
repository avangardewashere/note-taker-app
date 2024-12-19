"use client"
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";
import { Italic, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { Editor } from "@tiptap/core";
import { chatSession } from "@/configs/AIModel";
interface IEditorExtension{
    editor:Editor | null,
    
}
interface Metadata {
    chunkIndex: number;
    fileId: string;
  }
  
  interface UnformattedAnswer {
    pageContent: string;
    metadata: Metadata;
  }
const EditorExtension = ({editor, }:IEditorExtension) => {
    if(editor === null) return
    //initialize the action
    const searchAi = useAction(api.myAction.search);
    const { fileId } = useParams();
    


    const onAiClick = async () =>{
      
      const selectedText=editor.state.doc.textBetween(
        editor?.state.selection.from,
        editor?.state.selection.to,
        ' '
      );
    
      const result = await searchAi({
        query:selectedText,
        fileId:fileId?.toString() ?? '',
      })

      

      const unformattedAns: UnformattedAnswer[] = JSON.parse(result);

      let AllUnformattedAnswer = ' ';
      unformattedAns.forEach((item: UnformattedAnswer) => {
        AllUnformattedAnswer = AllUnformattedAnswer+ " "+ item.pageContent + " "; // Concatenate page content
      });

      const Prompt ='For question :'+ selectedText + " and with the given content as answer ,"+" please give an appropriate answer in HTML format. The answer content is: " + AllUnformattedAnswer;


      const AIModelResult = await chatSession.sendMessage(Prompt)
      console.log(AIModelResult.response.text())
      const FinalAnswer = AIModelResult.response.text().replace("```","").replace('html','').replace("```","");
      const AllText =editor.getHTML()
      editor.commands.setContent(AllText+'<p><strong>Answer: </strong> '+FinalAnswer +' </p>')
    }

  return (
    <div className="p-5">
      <div className="control-group flex items-center">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={editor?.isActive("bold") ? "is-active" : ""}
        >
          <b>B</b>
        </button>
        <button 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor?.isActive('italic') ? 'is-active' : ''}
          >
          <Italic size={14} className="mt-1 ml-3"/> 
          </button>

          <button 
            onClick={() => onAiClick()}
            className={editor?.isActive('italic') ? 'is-active' : ''}
          >
          <Sparkles  size={14} className="mt-1 ml-3 hover:text-blue-300"/> 
          </button>

          {/* todo  add more extensions*/}
      </div>
    </div>
  );
};

export default EditorExtension;
