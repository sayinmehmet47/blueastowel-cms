import React from 'react'
import Link from 'next/link';

import {
    Menubar,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from '@/components/ui/menubar';
import clsx from 'clsx';
import Image from 'next/image';

const MenuBar = ({headerClassName,showLogo}:{
    headerClassName?: string
    showLogo?: boolean
}) => {
  return (
    <div className={clsx(headerClassName)}
    >
    <Menubar className="flex h-10 items-center space-x-1 rounded-lg border-none bg-gray-900 p-1 backdrop-filter  bg-opacity-40 text-white">
{     showLogo &&<Image
            src="/logoblueastowel.svg"
            alt="Logo"
            width={50}
            height={50}
            className="text-red-100"
          />}
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger>Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarSeparator />
      <MenubarMenu>
        <Link href="/about">
          <MenubarTrigger>About</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarSeparator />
      <MenubarMenu>
        <MenubarTrigger>Process</MenubarTrigger>
      </MenubarMenu>
      <MenubarSeparator />
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  </div>
  )
}

export default MenuBar
