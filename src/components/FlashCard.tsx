import React from 'react';
import { WordPair } from '../types';

interface FlashCardProps {
  word: WordPair;
  isFlipped: boolean;
  onChangeIsFlipped: (isFlipped: boolean) => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ word, isFlipped, onChangeIsFlipped }) => {
  const handleFlip = () => {
    onChangeIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative h-56 w-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side - Korean */}
        <div 
          className={`absolute w-full h-full bg-white rounded-xl shadow-md p-6 backface-hidden flex flex-col items-center justify-center transform-style-3d ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="text-4xl font-medium text-indigo-700 mb-2">{word.korean}</p>
          <p className="text-gray-500 mt-4 text-sm">Klik untuk menerjemahkan</p>
        </div>
        
        {/* Back side - Indonesian */}
        <div 
          className={`absolute w-full h-full bg-indigo-50 rounded-xl shadow-md p-6 backface-hidden flex flex-col items-center justify-center rotate-y-180 transform-style-3d ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-3xl font-medium text-pink-600">{word.indonesian}</p>
          <p className="text-gray-500 mt-4 text-sm">Klik untuk kembali</p>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;