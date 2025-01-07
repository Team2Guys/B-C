'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Editor } from '@tinymce/tinymce-react';

declare global {
  interface Window {
    tinymce: any;
  }
}

const MyEditor = ({
  values,
  setFieldValue,
  placeholder,
  handleDebouncedMutation,
}: any) => {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState(values.content || '');

  useEffect(() => {
    setContent(values.content);
  }, [values.content]);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    setFieldValue('content', newContent);
    handleDebouncedMutation({
      ...values,
      content: newContent,
    });
  };

  const handleBlur = (newContent: string) => {
    setContent(newContent);
    setFieldValue('content', newContent);
    handleDebouncedMutation({
      ...values,
      content: newContent,
    });
  };
  const config = useMemo(() => ({
    height: 400,
    menubar: true,
    placeholder: placeholder || 'Start typing...',
    file_picker_types: 'file image media',
    automatic_uploads: true,
    image_advtab: true,
    image_dimensions: true,
    image_caption: true,
    image_title: true,
    autosave_interval: '10s',
    a11y_advanced_options: true,
    quickbars_insert_toolbar: true,
    quickbars_image_toolbar: 'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',
    plugins: [
      'advlist', 'autolink','accordion','quickbars','autosave','importword','restoredraft','upload', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
      'searchreplace', 'wordcount', 'visualblocks','insertimage', 'visualchars', 'code', 'fullscreen', 'insertdatetime','quickbars image editimage',
      'media', 'table', 'emoticons', 'help'
    ],
    toolbar: 'undo redo | styles |restoredraft| bold italic|accordion |quickimage|quicktable| importword | restoredraft | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
    menu: {
      file: { title: 'File', items: 'newdocument restoredraft | preview | importword exportpdf exportword | print | deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
      view: { title: 'View', items: 'code revisionhistory | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
      insert: { title: 'Insert', items: 'image link media addcomment pageembed codesample inserttable | upload image |upload | math | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
      format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
      tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
      table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
      help: { title: 'Help', items: 'help' }
      },
      contextmenu: [
        'cut copy paste | link image inserttable | image | tableprops deletetable | cell row column',
        'bold italic underline | removeformat | forecolor backcolor',
        'insertdatetime emoticons | code'
      ],
      file_picker_callback: (cb: (url: string, meta: any) => void, value: string, meta: any) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.onchange = () => {
          const file = input.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              const id = 'blobid' + new Date().getTime();
              const blobCache = window.tinymce.activeEditor?.editorUpload.blobCache;
              const base64 = reader.result?.toString().split(',')[1];
              
              if (base64 && blobCache) {
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
              }
            };
            reader.readAsDataURL(file);
          }
        };
      
        input.click();
      },
      
    }), [placeholder]);

  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINY_API}
      ref={editorRef}
      value={content}
      init={config}
      onBlur={(evt, editor) => handleBlur(editor.getContent())}
      onEditorChange={(newContent, editor) => handleContentChange(newContent)}
    />
  );
};

export default MyEditor;
