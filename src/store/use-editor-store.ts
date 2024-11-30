import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface IEditorState {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<IEditorState>((set) => ({
  editor: null,
  setEditor: (editor) =>
    set({
      editor,
    }),
}));
