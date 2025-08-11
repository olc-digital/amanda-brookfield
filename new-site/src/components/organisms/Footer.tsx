import React from 'react';
import Image from 'next/image';
import SocialMediaLinks from '@/components/molecules/SocialMediaLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 py-8 flex flex-col items-center">
      <Image
        src="/images/contact.gif"
        alt="Contact"
        width={75}
        height={75}
        className="mb-8"
      />
      
      <h2 className="text-xl font-serif my-8">Contact</h2>
      
      <a
        href="mailto:contact@amandabrookfield.co.uk"
        className="
          inline-flex items-center px-6 py-3 bg-orange-400 text-white 
          rounded-lg hover:bg-orange-500 transition-colors duration-200
          text-lg font-medium uppercase tracking-wide mb-8
        "
      >
        <Image
          src="/images/email-icon.svg"
          alt="Email"
          width={20}
          height={20}
          className="mr-2"
        />
        Email Amanda
      </a>
      
      <SocialMediaLinks />
      
      <div className="text-xs text-gray-600 mt-4">
        &copy; Amanda Brookfield {currentYear}
      </div>
    </div>
  );
};

export default Footer;