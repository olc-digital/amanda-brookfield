export interface Review {
  reviewer: string;
  text: string;
}

export interface Book {
  bookId: string;
  path: string;
  title: string;
  originalPublicationDate: string;
  coverImage: string;
  coverSketchImage: string;
  promoImage?: string;
  amazonLink: string;
  reviews: Review[];
  description: string;
  publishedYear: number;
  templateKey: string;
}

export interface BookCardProps {
  book: Book;
  showDescription?: boolean;
}

export interface BookGridProps {
  books: Book[];
  sortBy?: 'title' | 'publishedDate' | 'newest';
}