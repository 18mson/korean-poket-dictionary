export interface WordPair {
  korean: string;
  indonesian: string;
}

export interface Category {
  id: string;
  name: string;
  words: WordPair[];
}