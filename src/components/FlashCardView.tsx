import React, { useState, useEffect } from 'react';
import { Category, WordPair } from '../types';
import FlashCard from './FlashCard';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface FlashCardViewProps {
  category: Category;
  onBackToCategories: () => void;
}

const FlashCardView: React.FC<FlashCardViewProps> = ({ 
  category,
  onBackToCategories
}) => {
  const [shuffledWords, setShuffledWords] = useState<WordPair[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    // Shuffle words when category changes
    const shuffled = [...category.words].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false); // Reset flip state when changing words
  }, [category]);

  const handleNext = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev + 1) % shuffledWords.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev - 1 + shuffledWords.length) % shuffledWords.length);
    setIsFlipped(false);
  };

  const handleChangeIsFlipped = (flipped: boolean) => {
    setIsFlipped(flipped);
  };

  // Reset slide direction after animation
  const handleTransitionEnd = () => {
    setSlideDirection(null);
  };

  if (shuffledWords.length === 0) return null;

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === shuffledWords.length - 1;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button 
        onClick={onBackToCategories}
        className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 mb-6 group"
      >
        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
        Kembali ke kategori
      </button>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {category.name}
      </h1>
      
      <div className="relative overflow-hidden">
        <div 
          className={`mb-8 transition-transform duration-300 ease-in-out ${
            slideDirection === 'left' ? '-translate-x-full' : 
            slideDirection === 'right' ? 'translate-x-full' : 'translate-x-0'
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <FlashCard 
            word={shuffledWords[currentIndex]} 
            isFlipped={isFlipped}
            onChangeIsFlipped={handleChangeIsFlipped}
          />
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={isFirstCard}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
              isFirstCard 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Sebelumnya
          </button>
          
          <span className="text-gray-600">
            {currentIndex + 1} / {shuffledWords.length}
          </span>
          
          <button
            onClick={handleNext}
            disabled={isLastCard}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
              isLastCard
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
            }`}
          >
            Selanjutnya
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCardView;