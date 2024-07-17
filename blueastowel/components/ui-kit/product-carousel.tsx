'use client';

import React, { useState, useEffect } from 'react';
import Carousel from '../ui/corousel/carousel';

const OPTIONS = { loop: true };

const fetchImageUrls = async () => {
  const response = await fetch('/api/main-page-carousel');
  const data = await response.json();
  return data;
};

export function ProductCarousel() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageUrls()
      .then((imageUrls) => {
        setImages(imageUrls);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(images);

  return <Carousel slides={images} options={OPTIONS} />;
}
