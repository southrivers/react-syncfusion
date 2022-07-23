import React from 'react'
import {HtmlEditor, Image, Link, QuickToolbar, RichTextEditorComponent, Toolbar, Inject} from '@syncfusion/ej2-react-richtexteditor'
import {EditorData} from '../data/dummy'

const Editor = () => {
  return (
    <>
      <RichTextEditorComponent
        key='rich'
      >
        <EditorData/>
        <Inject services={[HtmlEditor,Image, Toolbar, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </>
  )
}

export default Editor