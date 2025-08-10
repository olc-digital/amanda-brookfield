import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface HeroSection {
  prefix?: string;
  books?: string[];
  bookIntros?: string[];
  videos?: string[];
}

export interface BestSellers {
  bestSeller1?: string;
  bestSeller2?: string;
  bestSeller3?: string;
  bestSeller4?: string;
  bestSeller5?: string;
  bestSeller6?: string;
}

export interface LatestRelease {
  book: string;
  blurb: string;
}

export interface LatestReleases {
  latestRelease1?: LatestRelease;
  latestRelease2?: LatestRelease;
  latestRelease3?: LatestRelease;
}

export interface HomePageFrontmatter {
  [key: string]: string | number | boolean | object | null | undefined;
  templateKey: string;
  metaDescription?: string;
  bannerImage?: string;
  welcomeText?: string;
  bestSellers?: BestSellers;
  heroSection?: HeroSection;
  latestReleases?: LatestReleases;
}

export interface MarkdownFile {
  slug: string;
  frontmatter: Record<string, string | number | boolean | object | null | undefined>;
  content: string;
  htmlContent?: string;
}

export interface BookData {
  bookId: string;
  path: string;
  title: string;
  originalPublicationDate: string;
  coverImage: string;
  coverSketchImage: string;
  promoImage?: string;
  amazonLink: string;
  reviews: Array<{
    reviewer: string;
    text: string;
  }>;
  description: string;
  publishedYear: number;
  templateKey: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  htmlContent: string;
  templateKey: string;
}

export interface PageData {
  slug: string;
  title: string;
  content: string;
  htmlContent: string;
  frontmatter: Record<string, string | number | boolean | object | null | undefined>;
}

export interface HomePageData extends PageData {
  frontmatter: HomePageFrontmatter;
}

// Generic function to read all markdown files from a directory
export function getMarkdownFiles(directory: string): MarkdownFile[] {
  const fullPath = path.join(contentDirectory, directory);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(fullPath).filter(name => name.endsWith('.md'));
  
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
      slug,
      frontmatter,
      content,
    };
  });
}

// Function to get a single markdown file
export function getMarkdownFile(directory: string, slug: string): MarkdownFile | null {
  try {
    const fullPath = path.join(contentDirectory, directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading markdown file: ${directory}/${slug}.md`, error);
    return null;
  }
}

// Convert markdown content to HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// Get all books from markdown files
export function getAllBooks(): BookData[] {
  const bookFiles = getMarkdownFiles('books');
  
  return bookFiles.map((file) => {
    const publishedYear = new Date(file.frontmatter.originalPublicationDate as string).getFullYear();
    
    return {
      bookId: (file.frontmatter.bookId || file.slug) as string,
      path: (file.frontmatter.path || `/books/${file.slug}`) as string,
      title: file.frontmatter.title as string,
      originalPublicationDate: file.frontmatter.originalPublicationDate as string,
      coverImage: file.frontmatter.coverImage as string,
      coverSketchImage: file.frontmatter.coverSketchImage as string,
      promoImage: file.frontmatter.promoImage as string | undefined,
      amazonLink: file.frontmatter.amazonLink as string,
      reviews: (file.frontmatter.reviews || []) as Array<{text: string; reviewer: string}>,
      description: file.content.trim(),
      publishedYear,
      templateKey: file.frontmatter.templateKey as string,
    };
  }).sort((a, b) => b.publishedYear - a.publishedYear); // Sort by newest first
}

// Get a single book by ID
export function getBookById(bookId: string): BookData | null {
  const file = getMarkdownFile('books', bookId);
  if (!file) return null;

  const publishedYear = new Date(file.frontmatter.originalPublicationDate as string).getFullYear();

  return {
    bookId: (file.frontmatter.bookId || file.slug) as string,
    path: (file.frontmatter.path || `/books/${file.slug}`) as string,
    title: file.frontmatter.title as string,
    originalPublicationDate: file.frontmatter.originalPublicationDate as string,
    coverImage: file.frontmatter.coverImage as string,
    coverSketchImage: file.frontmatter.coverSketchImage as string,
    promoImage: file.frontmatter.promoImage as string | undefined,
    amazonLink: file.frontmatter.amazonLink as string,
    reviews: (file.frontmatter.reviews || []) as Array<{text: string; reviewer: string}>,
    description: file.content.trim(),
    publishedYear,
    templateKey: file.frontmatter.templateKey as string,
  };
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogFiles = getMarkdownFiles('blog');
  
  const posts = await Promise.all(
    blogFiles.map(async (file) => {
      const htmlContent = await markdownToHtml(file.content);
      
      return {
        slug: file.slug,
        title: (file.frontmatter.title || 'Untitled') as string,
        date: file.frontmatter.date as string,
        excerpt: file.frontmatter.excerpt as string | undefined,
        content: file.content,
        htmlContent,
        templateKey: file.frontmatter.templateKey as string,
      };
    })
  );

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime());
}

// Get a single blog post
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const file = getMarkdownFile('blog', slug);
  if (!file) return null;

  const htmlContent = await markdownToHtml(file.content);

  return {
    slug: file.slug,
    title: (file.frontmatter.title || 'Untitled') as string,
    date: file.frontmatter.date as string,
    excerpt: file.frontmatter.excerpt as string | undefined,
    content: file.content,
    htmlContent,
    templateKey: file.frontmatter.templateKey as string,
  };
}

// Get author pages
export async function getAuthorPages(): Promise<PageData[]> {
  const authorFiles = getMarkdownFiles('author');
  
  const pages = await Promise.all(
    authorFiles.map(async (file) => {
      const htmlContent = await markdownToHtml(file.content);
      
      return {
        slug: file.slug,
        title: (file.frontmatter.title || file.slug) as string,
        content: file.content,
        htmlContent,
        frontmatter: file.frontmatter,
      };
    })
  );

  return pages;
}

// Get a specific author page
export async function getAuthorPage(slug: string): Promise<PageData | null> {
  const file = getMarkdownFile('author', slug);
  if (!file) return null;

  const htmlContent = await markdownToHtml(file.content);

  return {
    slug: file.slug,
    title: (file.frontmatter.title || file.slug) as string,
    content: file.content,
    htmlContent,
    frontmatter: file.frontmatter,
  };
}

// Get home page content
export async function getHomePage(): Promise<HomePageData | null> {
  const file = getMarkdownFile('pages', 'home');
  if (!file) return null;

  const htmlContent = await markdownToHtml(file.content);

  return {
    slug: 'home',
    title: (file.frontmatter.title || 'Home') as string,
    content: file.content,
    htmlContent,
    frontmatter: file.frontmatter as HomePageFrontmatter,
  };
}

// Get features (articles and short stories)
export async function getAllFeatures(): Promise<{
  articles: PageData[];
  shortStories: PageData[];
}> {
  const articleFiles = getMarkdownFiles('features/articles');
  const shortStoryFiles = getMarkdownFiles('features/short-stories');

  const articles = await Promise.all(
    articleFiles.map(async (file) => {
      const htmlContent = await markdownToHtml(file.content);
      return {
        slug: file.slug,
        title: (file.frontmatter.title || file.slug) as string,
        content: file.content,
        htmlContent,
        frontmatter: file.frontmatter,
      };
    })
  );

  const shortStories = await Promise.all(
    shortStoryFiles.map(async (file) => {
      const htmlContent = await markdownToHtml(file.content);
      return {
        slug: file.slug,
        title: (file.frontmatter.title || file.slug) as string,
        content: file.content,
        htmlContent,
        frontmatter: file.frontmatter,
      };
    })
  );

  return {
    articles,
    shortStories,
  };
}

// Get events page
export async function getEventsPage(): Promise<PageData | null> {
  const file = getMarkdownFile('events', 'index');
  if (!file) return null;

  const htmlContent = await markdownToHtml(file.content);

  return {
    slug: 'events',
    title: (file.frontmatter.title || 'Events') as string,
    content: file.content,
    htmlContent,
    frontmatter: file.frontmatter,
  };
}

// Get announcement
export async function getAnnouncement(): Promise<PageData | null> {
  const files = getMarkdownFiles('announcement');
  if (files.length === 0) return null;

  // Get the most recent announcement
  const file = files[0];
  const htmlContent = await markdownToHtml(file.content);

  return {
    slug: file.slug,
    title: (file.frontmatter.title || 'Announcement') as string,
    content: file.content,
    htmlContent,
    frontmatter: file.frontmatter,
  };
}