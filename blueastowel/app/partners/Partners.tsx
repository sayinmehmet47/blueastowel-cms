'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export interface Partner {
  name: string;
  logo: {
    url: string;
  };
}

export interface PartnersSectionProps {
  partners: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  partners,
}) => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logos = logosRef.current;
    if (logos) {
      const animation = logos.animate(
        [{ transform: 'translateX(50%)' }, { transform: 'translateX(-150%)' }],
        {
          duration: 60000, // 60 seconds for slower animation
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
      <div ref={logosRef} className="flex flex-nowrap gap-32 justify-center">
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
