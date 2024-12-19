import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder"
const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit,Placeholder.configure({
        placeholder:"Start Taking your notes Here"
    })],
    // content: "<p>Meow World!</p>",
    editorProps:{
        attributes:{
            class:'focus:outline-none h-[90vh]'  
        }
    }
  });
  return (
    <div>
      <div>
        <EditorContent editor={editor}></EditorContent>
      </div>
    </div>
  );
};

export default TextEditor;
