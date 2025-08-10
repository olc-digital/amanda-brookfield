'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface AnnouncementData {
  title: string;
  content: string;
  buttonLink?: string;
  buttonText?: string;
  isDisabled?: boolean;
  displayUntil?: string;
  image?: string;
}

const AnnouncementTemplate: React.FC<{
  hide: () => void;
  title: string;
  content: string;
  buttonLink?: string;
  buttonText?: string;
  isDisabled?: boolean;
  image?: string;
}> = ({ hide, title, content, buttonLink, buttonText, isDisabled = false, image }) => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-blue-600 text-white p-0 shadow-lg z-50">
      <div className={`relative py-6 px-4 ${isDisabled ? 'opacity-50' : ''}`}>
        <div className="relative">
          <h3 className="text-lg font-bold uppercase mb-4">{title}</h3>
          <button
            onClick={hide}
            className="absolute top-0 right-0 p-2 -mt-2 -mr-2 cursor-pointer"
          >
            <Image
              src="/images/close.svg"
              alt="Close"
              width={16}
              height={16}
            />
          </button>
          
          <div className="flex justify-between flex-row">
            <div>
              <div
                className="leading-6 [&>p]:mb-2 [&>p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {buttonLink && buttonText && (
                <div className="self-center mt-6">
                  <a
                    href={buttonLink}
                    className="
                      inline-block px-4 py-2 bg-blue-500 text-white 
                      rounded hover:bg-blue-400 transition-colors 
                      uppercase text-sm font-medium
                    "
                  >
                    {buttonText}
                  </a>
                </div>
              )}
            </div>
            
            {image && (
              <div className="hidden md:block flex-none w-35 max-w-40 pl-5">
                <Image
                  src={image}
                  alt="Announcement"
                  width={160}
                  height={120}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
        
        {isDisabled && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center text-3xl text-gray-800">
            Announcement disabled
          </div>
        )}
      </div>
    </div>
  );
};

const Announcement: React.FC = () => {
  const [isClosed, setClosed] = useState(true);
  const [isExpired, setExpired] = useState(false);
  const [announcement, setAnnouncement] = useState<AnnouncementData | null>(null);

  const close = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('announcementClosed', 'true');
      setClosed(true);
    }
  };

  useEffect(() => {
    // For now, use mock data. In production, this could be fetched via API route
    const mockAnnouncement: AnnouncementData = {
      title: 'Latest Book Available',
      content: '<p>Check out my latest novel "The Twin" now available!</p>',
      buttonLink: '/books/the-twin',
      buttonText: 'Learn More',
      isDisabled: false,
      displayUntil: '2025-12-31',
    };
    
    setAnnouncement(mockAnnouncement);
    
    if (typeof window !== 'undefined') {
      const announcementString = JSON.stringify(mockAnnouncement);
      const existingAnnouncement = localStorage.getItem('announcement');
      const isNewAnnouncement = announcementString !== existingAnnouncement;
      
      localStorage.setItem('announcement', announcementString);
      
      if (isNewAnnouncement) {
        localStorage.setItem('announcementClosed', 'false');
      }
      
      if (localStorage.getItem('announcementClosed') === 'false') {
        setClosed(false);
      }
      
      // Check if expired
      if (mockAnnouncement.displayUntil) {
        const displayUntilDate = new Date(mockAnnouncement.displayUntil);
        const expired = new Date() > displayUntilDate;
        setExpired(expired);
      }
    }
  }, []);

  if (!announcement || announcement.isDisabled || isClosed || isExpired) {
    return null;
  }

  return (
    <AnnouncementTemplate
      hide={close}
      title={announcement.title}
      content={announcement.content}
      buttonLink={announcement.buttonLink}
      buttonText={announcement.buttonText}
      image={announcement.image}
    />
  );
};

export default Announcement;