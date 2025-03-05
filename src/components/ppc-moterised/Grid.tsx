"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import SelectedImage from "components/Rollerblind/BlackoutImages/tabdata/SelectedImage";
import "../../style/gallery.css";


const images = [
  { src: "/assets/images/ppc-blinds/g5.png", width: 397, height: 301 },
  { src: "/assets/images/ppc-blinds/g1.png", width: 397, height: 466 },
  { src: "/assets/images/ppc-blinds/g4.png", width: 322, height: 241 },
  { src: "/assets/images/ppc-blinds/vanright.png", width: 323, height: 526 },
  { src: "/assets/images/ppc-blinds/g6.png", width: 236, height: 322 },
  { src: "/assets/images/ppc-blinds/g3.png", width: 482, height: 445 },
  { src: "/assets/images/ppc-blinds/g7.png", width: 236, height: 322 },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const splitIntoColumns = (images: any[], numColumns: number): any[][] => {
    const columns: any[][] = Array.from({ length: numColumns }, () => []);
    images.forEach((image, index) => {
      columns[index % numColumns].push(image);
    });
    return columns;
  };

  const columns = splitIntoColumns(images, 4);
  const totalGroups = columns.length;

  return (
    <Container>
      <div className="flex justify-center items-center text-center xl:text-20 font-normal font-proxima mt-7 mx-auto">
        When you book an appointment, a van from Two Guys Home Furnishings (our sister company) will visit your home with experts to guide you, show fabric samples, and take precise measurements for a perfect fit.
      </div>

      <div className="p-4 my-7">
        <div className="row">
          {columns.map((column, arrayIndex) => (
            <div className="Gallery_column" key={arrayIndex}>
              {column.slice(0, ).map((image, index) => (
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
                    style={{ width: '100%', height: 'auto' }}
                    width={image.width}
                    height={image.height}
                    loading="eager"
                    className="object-cover w-full"
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
