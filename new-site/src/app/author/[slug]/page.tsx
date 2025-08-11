import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAuthorPage } from '@/lib/markdown';

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const page = await getAuthorPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/author"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Author
        </Link>
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="font-serif text-4xl mb-8 capitalize">{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
      </div>
    </div>
  );
}