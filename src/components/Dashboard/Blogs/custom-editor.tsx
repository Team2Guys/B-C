import React, { useEffect, useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface MyEditorProps {
  values: { content: string };
  setFieldValue: (field: string, value: string) => void;
  placeholder?: string;
}

const MyEditor: React.FC<MyEditorProps> = ({ values, setFieldValue, placeholder }) => {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState<string>(values.content || '');

  useEffect(() => {
    setContent(values.content);
  }, [values.content]);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    setFieldValue('content', newContent);
  };

  return (
    <Editor 
      apiKey={process.env.tinyApi}
      onInit={(evt, editor) => (editorRef.current = editor)}
      value={content}
      init={{
        height: 500,
        menubar: true,
        placeholder: placeholder || 'Start typing...',
        plugins: [
          'advlist', 'autolink','importword','restoredraft','upload','upload image', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
          'searchreplace', 'wordcount', 'visualblocks','insertimage', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
          'media', 'table', 'emoticons', 'help'
        ],
        toolbar: 'undo redo | styles | bold italic| upload image | upload  | importword | restoredraft | alignleft aligncenter alignright alignjustify | ' +
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
        }
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default MyEditor;


