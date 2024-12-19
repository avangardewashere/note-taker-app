import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Bold from "@tiptap/extension-bold";
import EditorExtension from "./EditorExtension";
import Italic from '@tiptap/extension-italic'
const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start Taking your notes Here",
      }),
      Bold, Italic,
    ],
    // content: "<p>Meow World!</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none h-[90vh]",
      },
    },
  });
  return (
    <div>
      <EditorExtension editor={editor ??  null} />
      <div className="p-4 overflow-auto h-[88vh] ">
        <EditorContent editor={editor}></EditorContent>
      </div>
    </div>
  );
};

export default TextEditor;
