'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';

const BeachTowelDesigns = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    fetch('/api/rounded-towels')
      .then((response) => response.json())
      .then(async (data) => {
        const imageUrls = await Promise.all(
          data.docs.map(async (doc: { image: { url: string } }) => {
            const imageUrl = doc.image.url;
            return imageUrl;
          })
        );
        setImages(imageUrls);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:brightness-105"
        >
          <div className="h-64 overflow-hidden rounded-lg shadow-lg border-4 border-gray-200">
            <Image
              className="object-cover w-full h-full cursor-pointer"
              src={`/api/fetch-image?path=${imageUrl}`}
              alt="Beach Towel Design"
              width={300}
              height={200}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,..."
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        </div>
      ))}
      <Lightbox
        index={selectedIndex}
        slides={images.map((imageUrl) => ({
          src: `/api/fetch-image?path=${imageUrl}`,
        }))}
        close={() => setSelectedIndex(-1)}
        open={selectedIndex >= 0}
      />
    </div>
  );
};

export default BeachTowelDesigns;
