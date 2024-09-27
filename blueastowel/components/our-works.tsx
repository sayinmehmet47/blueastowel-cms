'use client';

import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// Define the types of the image data
interface ImageData {
  url: string;
  title: string;
}

// Reusable ImageCard component
const ImageCard: React.FC<{
  imageData: ImageData;
  index: number;
  onClick: (index: number) => void;
}> = ({ imageData, index, onClick }) => (
  <div
    className="relative transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:brightness-105"
    onClick={() => onClick(index)}
  >
    <div className="h-64 overflow-hidden rounded-lg shadow-lg border-4 border-gray-200 relative group">
      <Image
        className="object-cover w-full h-full cursor-pointer"
        src={`/api/fetch-image?path=${imageData.url}`}
        alt={imageData.title}
        width={300}
        height={200}
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
      />
      {/* Transparent text shown on hover */}
      <div className="absolute bottom-0 left-0 w-full p-2 text-center text-white bg-black bg-opacity-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {imageData.title}
      </div>
    </div>
  </div>
);

// Fetch images function, extracted for separation of concerns
const fetchImages = async (): Promise<ImageData[]> => {
  try {
    const response = await fetch('/api/our-works');
    const data = await response.json();
    return data.docs.map((doc: { image: { url: string }; title: string }) => ({
      url: doc.image.url,
      title: doc.title,
    }));
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
};

const OurWorks: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  // Load images with useEffect
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const imageUrls = await fetchImages();
      setImages(imageUrls);
      setLoading(false);
    };
    loadImages();
  }, []);

  // Handle click on image to open lightbox
  const handleImageClick = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((imageData, index) => (
        <ImageCard
          key={index}
          imageData={imageData}
          index={index}
          onClick={handleImageClick}
        />
      ))}
      {/* Lightbox component */}
      <Lightbox
        index={selectedIndex}
        slides={images.map((imageData) => ({
          src: `/api/fetch-image?path=${imageData.url}`,
        }))}
        close={() => setSelectedIndex(-1)}
        open={selectedIndex >= 0}
      />
    </div>
  );
};

export default OurWorks;
