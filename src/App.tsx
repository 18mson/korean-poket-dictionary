import React, { useState } from 'react';
import { Category } from './types';
import CategoryList from './components/CategoryList';
import FlashCardView from './components/FlashCardView';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      {selectedCategory ? (
        <FlashCardView 
          category={selectedCategory} 
          onBackToCategories={handleBackToCategories} 
        />
      ) : (
        <CategoryList onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}

export default App;