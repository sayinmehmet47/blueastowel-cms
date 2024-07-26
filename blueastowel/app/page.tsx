import { ProductCarousel } from '@/components/ui-kit/product-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import '../components/ui/corousel/embla.css';
import MenuBar from '@/components/ui-kit/menu-bar';
import { MainPageAccordion } from '@/components/ui-kit/main-page-accordion';

const HeroSection = ({
  heroTitle = 'Experience Ultimate Comfort',
  heroDescription = 'Finest towels that elevate your hotel experience',
}) => (
  <div className="relative flex h-[520px] w-full items-center justify-center text-center">
    <Image
      src="/hero.png"
      alt="Luxurious Towels Image"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <Link href="/" className="absolute top-1 -left-12 md:left-1">
      <Image
        src="/logoblueastowel.svg"
        alt="Blue Asto Towels Logo"
        width={250}
        height={100}
        className="text-red-100"
      />
    </Link>
    <MenuBar headerClassName="absolute top-28 md:top-12" />
    <div className="absolute flex flex-col text-white gap-5 md:text-6xl">
      <h1 className="text-4xl md:text-6xl">{heroTitle}</h1>
      <h2 className="text-base md:text-xl">{heroDescription}</h2>
    </div>
  </div>
);

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
              <span>Explore Collectione</span>
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

const getMainPgData = async () => {
  console.log('API call to main-page');
  const response = await fetch(`${process.env.URL}/api/main-page`, {
    cache: 'no-store',
  });
  const data = await response.json();
  return data.docs[0];
};

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
    </main>
  );
}
