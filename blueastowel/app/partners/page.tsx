'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Partner {
  name: string;
  logo: {
    url: string;
  };
}

interface PartnersSectionProps {
  partners: Partner[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logos = logosRef.current;
    if (logos) {
      const animation = logos.animate(
        [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }],
        {
          duration: 30000, // 30 seconds for slower animation
          iterations: Infinity,
          easing: 'linear',
        }
      );

      return () => animation.cancel();
    }
  }, []);

  return (
    <section className="partners-section py-8 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>
      <div ref={logosRef} className="flex flex-nowrap gap-16 justify-center">
        {partners.map((partner) => (
          <div key={partner.name} className="partner-logo p-4">
            <Image
              src={`/api/fetch-image?path=${partner.logo.url}`}
              alt={partner.name}
              width={120} // Increased width
              height={75} // Increased height
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
