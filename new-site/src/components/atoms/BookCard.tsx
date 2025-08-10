import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types/book';

interface BookCardProps {
  book: Book;
  showDescription?: boolean;
}

const BuyNowButton: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      absolute opacity-0 group-hover:opacity-70 hover:!opacity-95
      right-2.5 bottom-2.5 rounded-full w-10 h-10 p-1.5 
      bg-white transition-opacity duration-200 shadow-md
    "
  >
    <svg
      viewBox="0 0 512 512"
      className="w-full h-full relative top-0.5 text-gray-700"
      fill="currentColor"
    >
      <path d="M510.89,145.53l-59.55,187.55c-4.45,13.36-16.14,22.26-30.05,22.26H191.44c-13.36,0-26.16-8.35-30.61-20.59L72.91,99.34
        H22.26C10.02,99.34,0,89.32,0,77.08c0-12.24,10.02-22.26,22.26-22.26h66.23c9.46,0,17.81,6.12,21.15,15.02l90.71,240.97h211.48
        l47.3-150.26H197.01c-12.24,0-22.26-10.02-22.26-22.26c0-12.24,10.02-22.26,22.26-22.26h292.73c7.24,0,13.91,3.89,17.81,9.46
        C512,131.06,513.11,138.85,510.89,145.53z M202.58,384.84c-9.46,0-18.92,3.89-25.6,10.57c-6.68,6.68-10.58,16.14-10.58,25.6
        c0,9.46,3.9,18.92,10.58,25.6c6.67,6.68,16.14,10.58,25.6,10.58c9.46,0,18.92-3.9,25.6-10.58c6.68-6.68,10.58-16.14,10.58-25.6
        c0-9.46-3.9-18.92-10.58-25.6C221.5,388.73,212.04,384.84,202.58,384.84z M402.37,384.84c-9.46,0-18.92,3.89-25.6,10.57
        c-6.68,6.68-10.57,16.14-10.57,25.6c0,9.46,3.89,18.92,10.57,25.6c6.68,6.68,16.14,10.58,25.6,10.58c9.46,0,18.92-3.9,25.6-10.58
        s10.58-16.14,10.58-25.6c0-9.46-3.9-18.92-10.58-25.6S411.82,384.84,402.37,384.84z"/>
    </svg>
  </a>
);

const BookCard: React.FC<BookCardProps> = ({ book, showDescription = false }) => {
  return (
    <div className="relative group">
      <Link
        href={book.path}
        className="block text-gray-800 hover:text-red-600 transition-colors no-underline"
      >
        <div className="relative">
          <Image
            src={book.coverImage}
            alt={book.title}
            width={125}
            height={192}
            className="w-32 h-48 object-cover rounded shadow-sm"
            sizes="(max-width: 768px) 125px, 125px"
          />
          
          {showDescription && (
            <div className="mt-3">
              <h3 className="text-sm font-medium mb-1">{book.title}</h3>
              <p className="text-xs text-gray-600 line-clamp-3">
                {book.description.substring(0, 120)}...
              </p>
            </div>
          )}
        </div>
      </Link>
      
      <BuyNowButton href={book.amazonLink} />
    </div>
  );
};

export default BookCard;