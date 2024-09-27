import { ProductCarousel } from '@/components/ui-kit/product-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import '../components/ui/corousel/embla.css';
import { MainPageAccordion } from '@/components/ui-kit/main-page-accordion';
import { HeroSection } from './hero-section/HeroSection';
import { getMainPgData } from '@/lib/api';

const InfoSection = ({
  infoContent = 'From luxurious bath towels to stylish beach towels, our collections cater to all your needs. Elevate your space with our high-quality, unique designs.',
}) => (
  <section className="flex p-8 gap-12 md:gap-36 text-sky-900">
    <div className="flex-auto md:w-36 w-full">{infoContent}</div>
    <div className="flex-auto w-36 gap-3 flex flex-col">
      <div className="flex flex-col gap-3">
        <Button variant="secondary">
          <Link href="/explore-collection">
            <div className="flex gap-3 items-center">
              <span>Explore Collections</span>
              <ArrowRight />
            </div>
          </Link>
        </Button>
        <Button variant="secondary">
          <Link href="/beach-towel-designs">
            <div className="flex gap-3 items-center">
              <span>Beach Towels</span>
              <ArrowRight />
            </div>
          </Link>
        </Button>
        <Button variant="secondary">
          <Link href="/our-works">
            <div className="flex gap-3 items-center">
              <span>Our Works</span>
              <ArrowRight />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

const FashionistaSection = ({
  fashionistaContent = 'Our signature collections are inspired by top designers and brands. We use the finest materials to create luxurious towels that elevate your hotel experience.',
}) => (
  <section className="text-sky-900 flex justify-center md:justify-end mt-12">
    <h1 className="w-80">{fashionistaContent}</h1>
  </section>
);

const CarouselSection = () => (
  <section className="m-16">
    <ProductCarousel />
  </section>
);

const AccordionSection = () => (
  <section className="p-8">
    <MainPageAccordion />
  </section>
);

export default async function Home() {
  const mainPageData = await getMainPgData();
  const infoContent = mainPageData.infoContent[0].children[0].text;
  const fashionistaContent =
    mainPageData.fashionistaContent[0].children[0].text;
  return (
    <main className="w-full">
      <HeroSection
        heroTitle={mainPageData.heroTitle}
        heroDescription={mainPageData.heroDescription}
      />
      <InfoSection infoContent={infoContent} />
      <FashionistaSection fashionistaContent={fashionistaContent} />
      <CarouselSection />
      <AccordionSection />
      test531
    </main>
  );
}
