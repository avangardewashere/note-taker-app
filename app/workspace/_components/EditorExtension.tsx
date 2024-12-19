"use client"
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";
import { Italic, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { Editor } from "@tiptap/core";
interface IEditorExtension{
    editor:Editor | null,
    
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
    console.log(selectedText , " is selected")
      const result = await searchAi({
        query:selectedText,
        fileId:fileId ? "":""
      })

      console.log("unformatted ans:", result)
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
