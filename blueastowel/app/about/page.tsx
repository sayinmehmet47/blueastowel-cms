'use client';

import MenuBar from '@/components/ui-kit/menu-bar';
import Image from 'next/image';
import { type About, AboutUs, Owner } from './about-us';
import React, { useEffect, useState } from 'react';

const About = () => {
  const [, setAboutUs] = useState<AboutUs>();
  const [owners, setOwners] = useState<Owner[]>();
  const [about, setAbout] = useState<About[]>();

  useEffect(() => {
    fetch('/api/about-us')
      .then((response) => response.json())
      .then((data: AboutUs) => {
        setAboutUs(data);
        setOwners(data.docs[0].owners);
        setAbout(data.docs[0].about);
      });
  }, []);

  return (
    <div className="p-4">
      <MenuBar headerClassName="bg-sky-300 rounded-lg mt-4 " showLogo={true} />
      <div className="mt-12 text-sky-900">
        <div className="flex items-center gap-10 flex-col md:flex-row justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {owners?.map((owner) => (
              <div
                className="flex flex-col items-center gap-4"
                key={owner.name}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
                  <Image
                    src={`/api/fetch-image?path=${owner.image.url}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={owner.name}
                  />
                </div>
                <h2 className="text-xl font-semibold text-center">
                  {owner.name}
                  <br />
                  <span className="text-base font-normal">{owner.role}</span>
                </h2>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 max-w-lg mt-10 md:mt-0">
            <h1 className="text-5xl">About Us</h1>
            {about?.map((about) => (
              <p
                key={about.children.map((child) => child.text).join('')}
                className="text-lg"
                style={{ whiteSpace: 'pre-line' }}
              >
                {about.children[0].text}
              </p>
            ))}
          </div>
        </div>
        <iframe
          className="mt-12 w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688071.6525802407!2d-113.49415921830177!3d35.99721670623729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e94dc7dfa104c9%3A0x64373b03f95e26a9!2sSanta%20Barbara%2C%20Kaliforniya%2093117%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2sch!4v1707166607838!5m2!1str!2sch"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
          lang="en"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
