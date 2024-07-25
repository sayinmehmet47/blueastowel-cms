'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import MenuBar from '@/components/ui-kit/menu-bar';
import { Button } from '@/components/ui/button';
import { Towel } from '@/types/towel';

const ExploreCollection = () => {
  const [towels, setTowels] = useState<Towel[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchTowels = async () => {
      const response = await axios.get('/api/towels');
      setTowels(response.data.docs);
    };
    fetchTowels();
  }, []);

  const filteredTowels =
    filter === 'all'
      ? towels
      : towels.filter((towel) => towel.category === filter);

  return (
    <div className="w-full flex-col gap-24">
      <MenuBar headerClassName="bg-sky-300 rounded-lg mt-4 " showLogo={true} />
      <div className="container mx-auto p-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Explore Our Premium Towel Collection
          </h1>
          <p className="text-lg mt-2">
            Discover a range of luxury towels crafted for ultimate comfort and
            style
          </p>
        </section>

        <section className="text-center mb-8 flex gap-3 items-center justify-center">
          <Button
            className="btn"
            onClick={() => setFilter('all')}
            variant="outline"
          >
            All
          </Button>
          <Button
            className="btn"
            onClick={() => setFilter('bath')}
            variant="outline"
          >
            Bath Towels
          </Button>
          <Button
            className="btn"
            onClick={() => setFilter('hand')}
            variant="outline"
          >
            Hand Towels
          </Button>
          <Button
            className="btn"
            onClick={() => setFilter('beach')}
            variant="outline"
          >
            Beach Towels
          </Button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTowels.map((towel) => (
            <div key={towel.id} className="bg-white rounded-lg shadow-md p-4">
              <Image
                src={`/api/fetch-image?path=${towel.image.url}`}
                alt="Towel"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-4">{towel.name}</h2>
              <p className="text-gray-700 mt-2">{towel.description}</p>
              <p className="text-gray-900 font-bold mt-4">${towel.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ExploreCollection;
