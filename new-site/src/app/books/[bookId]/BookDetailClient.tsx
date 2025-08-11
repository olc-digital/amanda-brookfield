'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types/book';

interface BookDetailClientProps {
  book: Book;
}

const BackButton: React.FC = () => (
  <Link
    href="/books"
    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors mb-6"
  >
    <svg 
      className="w-4 h-4 mr-2" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    Back to Books
  </Link>
);

const BuyNowButton: React.FC<{ href: string; size?: 'md' | 'lg' }> = ({ href, size = 'md' }) => {
  const sizeClasses = size === 'lg' 
    ? 'px-8 py-3 text-lg' 
    : 'px-6 py-2 text-base';
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block bg-orange-400 text-white font-medium uppercase tracking-wide
        rounded hover:bg-orange-500 transition-colors duration-200 text-center
        ${sizeClasses}
      `}
    >
      Buy Now
    </a>
  );
};

const ReviewItem: React.FC<{ reviewer: string; text: string }> = ({ reviewer, text }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <svg 
          className="w-6 h-6 text-purple-200" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-gray-700 italic mb-2 leading-relaxed">{text}</p>
        <p className="text-sm font-medium text-purple-600">— {reviewer}</p>
      </div>
    </div>
  </div>
);

const BookDetailClient: React.FC<BookDetailClientProps> = ({ book }) => {
  const [mobileActiveTab, setMobileActiveTab] = useState<'about' | 'reviews'>('about');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <BackButton />
        
        {/* Book Cover */}
        <div className="text-center mb-8">
          <Image
            src={book.coverSketchImage}
            alt={book.title}
            width={150}
            height={225}
            className="mx-auto rounded shadow-md"
          />
        </div>

        {/* Book Title */}
        <h1 className="text-3xl font-serif text-center mb-8">{book.title}</h1>

        {/* Mobile Tab Switcher */}
        <div className="flex justify-center mb-6 md:hidden">
          <div className="flex space-x-2">
            {[
              { key: 'about' as const, label: 'About' },
              { key: 'reviews' as const, label: 'Reviews' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setMobileActiveTab(key)}
                className={`
                  px-4 py-2 font-mono text-sm transition-colors
                  ${mobileActiveTab === key 
                    ? 'text-purple-600 underline' 
                    : 'text-gray-800'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className={`mb-8 ${mobileActiveTab === 'reviews' ? 'hidden md:block' : ''}`}>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {book.description}
            </p>
          </div>
          
          {/* Desktop Buy Button */}
          <div className="hidden md:flex justify-center mt-8">
            <BuyNowButton href={book.amazonLink} size="lg" />
          </div>
        </div>

        {/* Reviews Section */}
        <div className={`mb-8 ${mobileActiveTab === 'about' ? 'hidden md:block' : ''}`}>
          {book.reviews && book.reviews.length > 0 && (
            <div className="space-y-8">
              {book.reviews.map((review, index) => (
                <ReviewItem
                  key={index}
                  reviewer={review.reviewer}
                  text={review.text}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile Buy Button */}
        <div className="flex justify-center mt-12 md:hidden">
          <BuyNowButton href={book.amazonLink} size="lg" />
        </div>

        {/* Book Details */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-600 space-y-1">
            <p>Published: {book.publishedYear}</p>
            <p>Book ID: {book.bookId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailClient;