"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SelectedImage from "components/Rollerblind/BlackoutImages/tabdata/SelectedImage";
import "../../style/gallery.css";
import Container from "components/Res-usable/Container/Container";
import { gallerypara } from "data/data";
export interface ImageData {
  src: string;
  width: number;
  height: number;
}
export interface ImageGalleryProps {
  images: ImageData[];
  columns?: number;
}

export default function ImageGallery({ images, columns = 4 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const splitIntoColumns = (images: ImageData[], numColumns: number): ImageData[][] => {
    const cols: ImageData[][] = Array.from({ length: numColumns }, () => []);
    images.forEach((image, index) => {
      cols[index % numColumns].push(image);
    });
    return cols;
  };

  const columnsData = splitIntoColumns(images, columns);

  return (
    <Container>
      <div className="xl:text-20 font-proxima font-normal text-center mt-7">{gallerypara}</div>
      <div className="px-2 mt- lg:my-7">
        <div className="row">
          {columnsData.map((column, colIndex) => (
            <div className="Gallery_column" key={colIndex}>
              {column.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="image-container cursor-pointer bg-black"
                  onClick={() => openModal(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={`Image ${index}`}
                    width={image.width}
                    height={image.height}
                    loading="eager"
                    className="object-cover w-full"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <SelectedImage selectedImage={selectedImage} closeModal={closeModal} />}
    </Container>
  );
}
