'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from './Toolbar';
import { Heading  } from "@tiptap/extension-heading"
import Underline from '@tiptap/extension-underline';

interface Props {
  content: string;
  onChange: (richText: string) => void;
}

const Tiptap = ({content, onChange}: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline
    ],
    editorProps: {
      attributes: {
        class: "flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none min-h-[300px] max-h-[300px] overflow-auto"
      }
    },
    content,
    onUpdate({editor}){
        onChange(editor.getHTML())
    }
  })

  return (
    <div className='flex flex-col justify-stretch min-h-[250px] text-white  h-full'>
        <Toolbar editor={editor} />
        <EditorContent style={{whiteSpace: "pre-line"}} editor={editor} />
    </div>
  )
}

export default Tiptap