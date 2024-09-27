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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch towels with error handling
  useEffect(() => {
    const fetchTowels = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/towels');
        setTowels(response.data.docs);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError('Failed to load towels. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchTowels();
  }, []);

  // Filter towels by category
  const filteredTowels =
    filter === 'all'
      ? towels
      : towels.filter((towel) => towel.category === filter);

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading towels...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-12">
      <MenuBar headerClassName="bg-sky-300 rounded-lg mt-4" showLogo={true} />
      <div className="container mx-auto p-4">
        {/* Section header */}
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Explore Our Premium Towel Collection
          </h1>
          <p className="text-lg mt-2 text-gray-600">
            Discover a range of luxury towels crafted for ultimate comfort and
            style.
          </p>
        </section>

        {/* Filter buttons */}
        <section className="text-center mb-8 flex flex-wrap gap-3 items-center justify-center">
          {['all', 'bath', 'hand', 'beach'].map((category) => (
            <Button
              key={category}
              className={`btn ${
                filter === category ? 'bg-sky-600 text-white' : ''
              }`}
              onClick={() => setFilter(category)}
              variant="outline"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Towels
            </Button>
          ))}
        </section>

        {/* Towel grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTowels.map((towel) => (
            <TowelCard key={towel.id} towel={towel} />
          ))}
        </section>
      </div>
    </div>
  );
};

// Towel card component
const TowelCard: React.FC<{ towel: Towel }> = ({ towel }) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
    <Image
      src={`/api/fetch-image?path=${towel.image.url}`}
      alt={towel.name}
      width={300}
      height={300}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <h2 className="text-xl font-bold mt-4">{towel.name}</h2>
    <p className="text-gray-700 mt-2">{towel.description}</p>
    <p className="text-gray-900 font-bold mt-4">${towel.price}</p>
  </div>
);

export default ExploreCollection;
