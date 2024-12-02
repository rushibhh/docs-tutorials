import { Extension } from "@tiptap/react";
import "@tiptap/extension-text-style";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
      unSetFontSize: () => ReturnType;
    };
  }
}

export const fontSizeExtensions = Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize,
            renderHTML: (attribute) => {
              if (!attribute.fontSize) {
                return {};
              } else {
                return {
                  style: `font-size: ${attribute.fontSize}`,
                };
              }
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", {
              fontSize,
            })
            .run();
        },
      unSetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", {
              fontSize: null,
            })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },
});
