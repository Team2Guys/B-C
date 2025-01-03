'use client';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const MyEditor = ({
  values,
  setFieldValue,
  placeholder,
  addBlogMutation,
}: any) => {
  const editor = useRef(null);
  const [content, setContent] = useState(values.content || '');
  // eslint-disable-next-line no-undef
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setContent(values.content);
  }, [values.content]);

  useEffect(() => {
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, []);

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

  const handleDebouncedMutation = (newContent: string) => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      addBlogMutation.mutate({ ...values, content: newContent });
    }, 5000);
  };

  const handleBlur = (newContent: string) => {
    setContent(newContent);
    setFieldValue('content', newContent);
    handleDebouncedMutation(newContent);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={handleBlur}
      onChange={(newContent) => {
        setContent(newContent);
        setFieldValue('content', newContent);
        handleDebouncedMutation(newContent);
      }}
    />
  );
};

export default MyEditor;
