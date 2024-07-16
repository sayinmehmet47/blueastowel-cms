import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export const NavbarFirst = () => {
  return (
    <nav className="h-full p-4text-white text-sm w-full md:flex justify-between items-center">
      <Link href="/">
        <Image src="/logoblueastowel.svg" alt="Logo" width={180} height={150} />
      </Link>
      <Button
        className="flex justify-end my-4 md:my-0"
        size="lg"
        variant="ghost"
      >
        <Link href="/about" className="flex justify-end my-4 md:my-0">
          CONTACT US
        </Link>
      </Button>
    </nav>
  );
};
