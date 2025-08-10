'use client';

import React, { useState } from 'react';
import BookCard from '@/components/atoms/BookCard';
import { Book } from '@/types/book';

type SortOption = 'newest' | 'oldest' | 'title';

interface BooksClientProps {
  books: Book[];
}

const BooksClient: React.FC<BooksClientProps> = ({ books }) => {
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  
  const sortedBooks = () => {
    const sortedArray = [...books];
    switch (sortBy) {
      case 'newest':
        return sortedArray.sort((a, b) => b.publishedYear - a.publishedYear);
      case 'oldest':
        return sortedArray.sort((a, b) => a.publishedYear - b.publishedYear);
      case 'title':
        return sortedArray.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sortedArray;
    }
  };

  const displayBooks = sortedBooks();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="md:hidden mb-6">
          {/* Mobile sketch placeholder */}
          <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-500">📚</span>
          </div>
        </div>
        <h1 className="text-3xl font-serif mb-4">Books</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          My gallery of bestselling women&apos;s fiction gives plot outlines that will satisfy readers 
          looking for romantic, realistic, heart-rending stories about love, loss, family secrets and hope.
        </p>
      </div>

      {/* Sort Options */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { key: 'newest' as const, label: 'Newest First' },
            { key: 'oldest' as const, label: 'Oldest First' },
            { key: 'title' as const, label: 'A-Z' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSortBy(key)}
              className={`
                px-4 py-2 text-sm rounded-md transition-colors
                ${sortBy === key 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Book Count */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          {books.length} books • Published {Math.min(...books.map(b => b.publishedYear))} - {Math.max(...books.map(b => b.publishedYear))}
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
        {displayBooks.map((book) => (
          <div key={book.bookId} className="flex justify-center">
            <BookCard book={book} />
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif mb-4">About Amanda&apos;s Books</h2>
          <p className="text-gray-600 mb-6">
            Amanda Brookfield&apos;s novels explore the complexities of relationships, family dynamics, 
            and the challenges we all face in our everyday lives. Her stories are known for their 
            emotional depth, authentic characters, and compelling narratives that resonate with readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{books.length}</div>
              <div className="text-sm text-gray-600">Published Novels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">35+</div>
              <div className="text-sm text-gray-600">Years Writing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">1M+</div>
              <div className="text-sm text-gray-600">Books Sold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksClient;