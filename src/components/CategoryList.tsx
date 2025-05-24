import React from 'react';
import { Category } from '../types';
import { BookOpen } from 'lucide-react';
import { useCategories } from '../hooks/useCategories';

interface CategoryListProps {
  onSelectCategory: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onSelectCategory }) => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          Kamus Saku Korea-Indonesia
        </h1>
        <p className="text-lg text-gray-600">
          Pilih kategori untuk melihat kata-kata
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category)}
            className="bg-white hover:bg-indigo-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left group"
          >
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                <BookOpen className="text-indigo-600 h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {category.name}
                </h2>
                <p className="text-gray-500 mt-1">{category.words.length} kata</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;