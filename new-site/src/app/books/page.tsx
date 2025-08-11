import React from 'react';
// import BookCard from '@/components/atoms/BookCard';
import { getAllBooks } from '@/lib/markdown';
import BooksClient from './BooksClient';

// type SortOption = 'newest' | 'oldest' | 'title';

export default function Books() {
  const books = getAllBooks();
  
  return <BooksClient books={books} />;
}