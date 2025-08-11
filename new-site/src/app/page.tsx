// import Image from "next/image";
// import SocialMediaLinks from "@/components/molecules/SocialMediaLinks";
import { getHomePage, getAllBooks } from '@/lib/markdown';
import HomeClient from './HomeClient';

export default async function Home() {
  const homePageData = await getHomePage();
  const allBooks = getAllBooks();
  
  if (!homePageData) {
    return <div>Home page content not found</div>;
  }
  return <HomeClient homePageData={homePageData} allBooks={allBooks} />;
}
