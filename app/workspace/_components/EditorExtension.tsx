import { Italic } from "lucide-react";
import React from "react";

interface IEditorExtension{
    editor:any
}

const EditorExtension = ({editor}:IEditorExtension) => {
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
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
          <Italic size={14} className="mt-1 ml-3"/> 
          </button>
      </div>
    </div>
  );
};

export default EditorExtension;
