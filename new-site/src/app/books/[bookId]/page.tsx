import React from 'react';
import { notFound } from 'next/navigation';
import { getBookById } from '@/lib/markdown';
import BookDetailClient from './BookDetailClient';

interface BookDetailPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { bookId } = await params;
  const book = getBookById(bookId);

  if (!book) {
    notFound();
  }

  return <BookDetailClient book={book} />;
}