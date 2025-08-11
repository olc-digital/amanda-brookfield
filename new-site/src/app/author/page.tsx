import { getAuthorPages } from '@/lib/markdown';
import Link from 'next/link';

export default async function Author() {
  const authorPages = await getAuthorPages();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif text-center mb-8">Author</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {authorPages.map((page) => (
          <div key={page.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-serif mb-4 capitalize">{page.title}</h2>
              <div 
                className="text-gray-600 mb-4 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: page.htmlContent.substring(0, 200) + '...' 
                }}
              />
              <Link 
                href={`/author/${page.slug}`}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}