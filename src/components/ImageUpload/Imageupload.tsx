'use client';
import React, {
  useState,
  DragEvent,
  ChangeEvent,
  useRef,
  SetStateAction,
} from 'react';
import { BsCloudDownload, BsCloudUpload } from 'react-icons/bs';
import { uploadPhotosToBackend } from 'utils/helperFunctions';

interface PROPS {
  setImagesUrl?: React.Dispatch<SetStateAction<any[]>>;
  setposterimageUrl?:| React.Dispatch<SetStateAction<any[] | null | undefined>>| any;
  sethoverImage?: React.Dispatch<SetStateAction<any[] | null | undefined>>;
}

const UploadFile = ({
  setImagesUrl,
  setposterimageUrl,
  sethoverImage,
}: PROPS) => {
  const [isDraggableArea, setIsDraggableArea] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files) as File[];
    let file;
    if (setposterimageUrl || sethoverImage) {
      file = e.dataTransfer.files[0];
    }
console.log(files, "files")
    try {
      const response = await uploadPhotosToBackend(file ? [file] : files);
      setImagesUrl && setImagesUrl((prev) => [...prev, response]);
      setposterimageUrl && setposterimageUrl([response]);
      sethoverImage && sethoverImage([response]);

    } catch (error) {
      console.error('Failed to upload photos:', error);
    } finally {
      setIsDraggableArea(false);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files ? Array.from(e.target.files) : [];
    try {
      const response = await uploadPhotosToBackend(files);
      setImagesUrl && setImagesUrl((prev) => [...prev, response]);
      setposterimageUrl && setposterimageUrl([response]);
      sethoverImage && sethoverImage([response]);
    } catch (error) {
      console.error('Failed to upload photos:', error);
    }
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`m-2 cursor-pointer ${isDraggableArea ? 'border =' : 'border '}`}
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggableArea(true);
      }}
      onDragEnter={() => {
        setIsDraggableArea(true);
      }}
      onDragLeave={() => {
        setIsDraggableArea(false);
      }}
      onClick={handleDivClick}
    >
      <div className="p-4 text-center text-black dark:bg-lightdark dark:text-white">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
          ref={fileInputRef}
        />
        {isDraggableArea ? (
          <BsCloudDownload className="inline-block mb-2 text-4xl text-gray-500 dark:text-white" />
        ) : (
          <BsCloudUpload className="inline-block mb-2 text-4xl text-gray-500 dark:text-white" />
        )}
        <p className="text-black dark:text-white">
          Drag & Drop or Click to Upload
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
