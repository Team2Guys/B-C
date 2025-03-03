"use client";
import React, { useState } from "react";
import Image from "next/image";
import SelectedImage from "components/Rollerblind/BlackoutImages/tabdata/SelectedImage";
import Container from "components/Res-usable/Container/Container";

interface ImageGridProps {
  images: { src: string; className: string }[];
  title: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto text-center mb-6">
        <p className="text-lg md:text-xl text-gray-600">{title}</p>
      </div>
      <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-full image-container ${image.className} cursor-pointer`}
            onClick={() => openModal(image.src)}
          >
            <Image
              src={image.src}
              alt={`Blind ${index + 1}`}
              fill
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
      </Container>

      {selectedImage && <SelectedImage selectedImage={selectedImage} closeModal={closeModal} />}
    </section>
  );
};

export default ImageGrid;
