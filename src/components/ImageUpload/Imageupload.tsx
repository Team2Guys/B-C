"use client";
import axios, { AxiosResponse } from "axios";
import showToast from "components/Toaster/Toaster";

import React, { ChangeEvent, DragEvent, SetStateAction, useRef, useState } from "react";
import { BsCloudDownload, BsCloudUpload } from "react-icons/bs";


export interface ImagesProps {
  imageUrl: string;
  public_id: string;
}

interface PROPS {
  setImagesUrl?: React.Dispatch<SetStateAction<any[]>>;
  setposterimageUrl?: React.Dispatch<SetStateAction<any[] | null | undefined>>;
  sethoverImage?: React.Dispatch<SetStateAction<any[] | undefined>>;
  video?: boolean
  multiple?: boolean
  s3Flag?:boolean
}



const UploadFile = ({ setImagesUrl, setposterimageUrl, sethoverImage, video, multiple,s3Flag }: PROPS) => {
  const [isDraggableArea, setIsDraggableArea] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  const uploadPhotosToBackend = async (files: File[]) => {
    if (files.length === 0) throw new Error('No files found');

    const Response_data: ImagesProps[] = [];
let urlsEndpoint = s3Flag ? "file-upload/upload-s3" : "file-upload"

      for (const file of files) {
        const isImage = file.type.startsWith('image/');
        const isVideo = file.type.startsWith('video/');
        if (!isImage && !isVideo) {
          showToast("error", `Skipped unsupported file type: ${file.name}`);
          continue;
        }

        const maxImageSize = 1 * 1024 * 1024; // 1 MB
        const maxVideoSize = 20 * 1024 * 1024; // 2 MB

        if ((isImage && file.size > maxImageSize) || (isVideo && file.size > maxVideoSize)
        ) {
          showToast("error", `Skipped large file: ${file.name} Please upload file in less size`);
          continue;
        }

        const formData = new FormData();
        formData.append("file", file);
     const response: AxiosResponse<any> = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${urlsEndpoint}`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

   
        if (response.data) {
          Response_data.push(response.data)
        }
      }

      return Response_data;

    } 
  



  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files) as File[];
    let file;
    if (setposterimageUrl || sethoverImage) {
      file = e.dataTransfer.files[0];
    }
    try {
      const response = await uploadPhotosToBackend(file ? [file] : files);
      setImagesUrl?.((prev = []) => [...prev, ...response]);
      setposterimageUrl?.(response);
      sethoverImage?.(response);
    } catch (error) {
      throw error;
    } finally {
      setIsDraggableArea(false);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files ? Array.from(e.target.files) : [];
    try {
      const response = await uploadPhotosToBackend(files);
      setImagesUrl?.((prev = []) => [...prev, ...response]);
      setposterimageUrl?.(response);
      sethoverImage?.(response);
    } catch (error) {
      console.log(error, "error")
      throw error;
    }
  };


  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`m-4 cursor-pointer bg-white dark:bg-primary ${isDraggableArea ? 'border border-sky-500' : 'border border-stroke'}`}
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
      <div className="p-4 text-center text-black dark:text-white">
        <input
          type="file"
          accept={video ? "video/*" : "image/*"}
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
          ref={fileInputRef}
          multiple={multiple ? true : false}
        />
        {isDraggableArea ? (
          <BsCloudDownload className="inline-block mb-2 text-4xl  text-white" />
        ) : (
          <BsCloudUpload className="inline-block mb-2 text-4xl text-white" />
        )}
        <p className="text-black dark:text-white">
          Drag & Drop or Click to Upload
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
