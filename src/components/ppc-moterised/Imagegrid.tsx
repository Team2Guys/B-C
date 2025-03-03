"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import React from "react";

interface ImageGridProps {
  images: { src: string; className: string }[];
  title: string;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, title }) => {
  return (
    <section className="py-8 px-4">
     <Container>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-xl text-gray-600 mb-6">{title}</p>
      </div>

      {/* Image Grid */}
     
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          {images.map((image, index) => (
            <div key={index} className={`relative w-full ${image.className}`}>
              <Image
                src={image.src}
                alt={`Installation ${index + 1}`}
                fill
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ImageGrid;
