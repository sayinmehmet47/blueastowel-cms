import MenuBar from '@/components/ui-kit/menu-bar';
import Image from 'next/image';
import Link from 'next/link';
import { getMainPgData } from '../page';

export const HeroSection = async ({
  heroTitle = 'Experience Ultimate Comfort',
  heroDescription = 'Finest towels that elevate your hotel experience',
}) => {
  const mainPageData = await getMainPgData();

  return (
    <div className="relative flex h-[520px] w-full items-center justify-center text-center">
      <Image
        src={`/api/fetch-image?path=${mainPageData.heroImage.url}`}
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
};
