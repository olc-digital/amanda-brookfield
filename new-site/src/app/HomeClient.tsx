'use client';

import Image from "next/image";
import SocialMediaLinks from "@/components/molecules/SocialMediaLinks";
import { HomePageData, LatestRelease } from '@/lib/markdown';
import { Book } from '@/types/book';

interface HomeClientProps {
  homePageData: HomePageData;
  allBooks: Book[];
}

const HomeClient: React.FC<HomeClientProps> = ({ homePageData, allBooks }) => {
  const { frontmatter } = homePageData;
  
  // Get bestseller books based on the frontmatter data
  const bestSellerTitles = Object.values(frontmatter.bestSellers || {});
  const bestSellerBooks = allBooks.filter(book => bestSellerTitles.includes(book.title));
  
  // Get hero section books
  const heroBooks = frontmatter.heroSection?.books?.map((title: string) => 
    allBooks.find(book => book.title === title)
  ).filter(Boolean) || [];
  
  // Get latest releases
  const latestReleaseTitles = Object.keys(frontmatter.latestReleases || {})
    .sort()
    .map(key => frontmatter.latestReleases?.[key as keyof typeof frontmatter.latestReleases])
    .filter((release): release is LatestRelease => Boolean(release));

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Newsletter Banner */}
      <div className="w-full mb-8 bg-purple-100 p-4 rounded-lg text-center">
        <h3 className="text-lg font-bold mb-2">Newsletter</h3>
        <p className="text-sm mb-4">Stay updated with Amanda&apos;s latest news and releases</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
          Subscribe
        </button>
      </div>

      {/* Banner Image */}
      <div className="w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={frontmatter.bannerImage || "/images/home-banner.jpg"}
          alt="Amanda Brookfield Banner"
          width={800}
          height={250}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Welcome Text */}
      <div className="max-w-lg mx-auto text-center mb-12 leading-relaxed">
        <span className="font-serif float-left text-5xl leading-none mr-2 mt-1 md:text-6xl md:transform md:translate-x-2">
          {frontmatter.welcomeText?.charAt(0) || 'W'}
        </span>
        {frontmatter.welcomeText?.substring(1) || 'elcome to my official website.'}
      </div>

      {/* Social Media Links */}
      <SocialMediaLinks />

      {/* Hero Section - Latest Release */}
      {heroBooks.length > 0 && (
        <div className="text-center mb-16">
          <p className="text-purple-600 uppercase tracking-wider text-sm mb-2">
            {frontmatter.heroSection?.prefix || 'Latest Release'}
          </p>
          <h2 className="text-3xl font-serif mb-6">{heroBooks[0]?.title}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              {frontmatter.heroSection?.bookIntros?.[0] || heroBooks[0]?.description?.substring(0, 200) + '...'}
            </p>
            {/* Video placeholder */}
            {frontmatter.heroSection?.videos?.[0] && (
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                <a 
                  href={frontmatter.heroSection.videos[0]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                >
                  ▶ Watch Video
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Best Sellers */}
      {bestSellerBooks.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">My Best-Sellers</h2>
          
          {/* First row of bestsellers */}
          <div className="flex justify-center gap-8 mb-6 overflow-x-auto pb-4">
            {bestSellerBooks.slice(0, 3).map((book) => (
              <div key={book.bookId} className="flex-shrink-0 w-32">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={125}
                  height={192}
                  className="w-32 h-48 object-cover rounded shadow-sm mb-2"
                />
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-400 text-white text-xs py-1 rounded hover:bg-orange-500 transition-colors text-center"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
          
          {/* Second row of bestsellers */}
          {bestSellerBooks.length > 3 && (
            <div className="flex justify-center gap-8 overflow-x-auto pb-4">
              {bestSellerBooks.slice(3).map((book) => (
                <div key={book.bookId} className="flex-shrink-0 w-32">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={125}
                    height={192}
                    className="w-32 h-48 object-cover rounded shadow-sm mb-2"
                  />
                  <a
                    href={book.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-400 text-white text-xs py-1 rounded hover:bg-orange-500 transition-colors text-center"
                  >
                    Buy Now
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Recent Releases */}
      {latestReleaseTitles.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-center mb-8">Recent Releases</h2>
          <div className="space-y-12">
            {latestReleaseTitles.map((release: LatestRelease, index: number) => {
              const book = allBooks.find(b => b.title === release.book);
              if (!book) return null;
              
              return (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-32 flex-shrink-0">
                    <Image
                      src={book.coverSketchImage}
                      alt={book.title}
                      width={125}
                      height={192}
                      className="w-full md:w-32 h-48 object-cover rounded shadow-sm mb-2"
                    />
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-orange-400 text-white text-xs py-1 rounded hover:bg-orange-500 transition-colors text-center"
                    >
                      Buy Now
                    </a>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-4">{book.title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {release.blurb || book.description.substring(0, 300) + '...'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeClient;