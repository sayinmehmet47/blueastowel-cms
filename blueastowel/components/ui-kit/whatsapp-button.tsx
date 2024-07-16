// WhatsAppButton.tsx
import Image from 'next/image';
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '14803302295'; // replace with your phone number
  const message = "Hello, I'm interested in your products.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full"
    >
      <Image src={'/whatsapp.svg'} alt="WhatsApp" width={46} height={32} />
    </a>
  );
};

export default WhatsAppButton;
