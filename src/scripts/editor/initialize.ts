import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { html } from "@codemirror/lang-html";
import { keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { matchBrackets, bracketMatching, Config } from "@codemirror/language";

let state = EditorState.create({
  extensions: [
    basicSetup,
    keymap.of([indentWithTab]),
    html(),
    EditorView.updateListener.of((v) => {
      if (v.selectionSet) {
        // console.log(v);
        getSelection();
      }
    }),
    // bracketMatching({
    //   renderMatch()
    // })
  ],
});

let view = new EditorView({
  state: state,
  parent: document.querySelector(".echo-editor-code"),
});

const getSelection = () => {
  console.log(matchBrackets(state, 2, 1));
};
