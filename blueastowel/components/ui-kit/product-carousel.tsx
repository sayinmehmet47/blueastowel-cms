'use client';

import React, { useState, useEffect } from 'react';
import Carousel from '../ui/corousel/carousel';

const OPTIONS = { loop: true };

const fetchImageUrls = async () => {
  const response = await fetch('/api/main-page-carousel');
  const data = await response.json();
  const imageUrls = await Promise.all(
    data.docs.map(async (doc: any) => {
      const { url } = doc.image;
      return `${process.env.NEXT_PUBLIC_PAYLOAD_APP_URL}${url}`;
    })
  );
  return imageUrls;
};

export function ProductCarousel() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImageUrls = async () => {
      const imageUrls = await fetchImageUrls();
      setImages(imageUrls);
    };

    loadImageUrls();
  }, []);

  return <Carousel slides={images} options={OPTIONS} />;
}
