'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const MyEditor = ({
  values,
  setFieldValue,
  placeholder,
  handleDebouncedMutation,
}: any) => {
  const editor = useRef(null);
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
  const config = useMemo(
    () => ({
      readonly: false,
      toolbar: true,
      height: 400,
      placeholder: placeholder || 'Start typing...',
      uploader: {
        insertImageAsBase64URI: true,
      },
      buttons: [
        'source',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'superscript',
        'subscript',
        '|',
        'ul',
        'ol',
        '|',
        'outdent',
        'indent',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'align',
        '|',
        'link',
        'image',
        'video',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'hr',
        'eraser',
        'fullsize',
      ],
      toolbarSticky: false,
    }),
    [placeholder],
  );

  const handleBlur = (newContent: string) => {
    setContent(newContent);
    setFieldValue('content', newContent);
    handleDebouncedMutation({
      ...values,
      content: newContent,
    });
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={handleBlur}
      onChange={handleContentChange}
    />
  );
};

export default MyEditor;
