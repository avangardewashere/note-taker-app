import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Meow World!</p>",
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
