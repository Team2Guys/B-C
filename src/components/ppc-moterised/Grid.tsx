"use client";

import React from "react";
import { Image as AntImage } from "antd";
import Container from "components/Res-usable/Container/Container";
import { GalleryProps } from "types/interfaces";

const Gallery: React.FC<GalleryProps> = ({ title, images, columns = 4 }) => {
  return (
    <section className="py-8 px-4">
      {/* Dynamic Title */}
      <div className="max-w-6xl mx-auto text-center mb-6">
        <p className="text-lg font-proxima font-normal md:text-xl text-black">
         {title}
        </p>
      </div>
      <Container>
        <div className="p-4 border border-gray-300 my-7">
          <AntImage.PreviewGroup>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-4`}>
              {images.map((image, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <AntImage
                    src={image.src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full rounded-lg cursor-pointer"
                    preview={{
                      mask: <span className="text-white">🔍 Click to Zoom</span>,
                      toolbarRender: (originalNode, { icons }) => [
                        icons.zoomInIcon,
                        icons.zoomOutIcon,
                        icons.rotateLeftIcon,
                        icons.rotateRightIcon,
                        icons.flipXIcon,
                        icons.flipYIcon,
                        icons.prevIcon,
                        icons.nextIcon,
                      ],
                    }}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </AntImage.PreviewGroup>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
