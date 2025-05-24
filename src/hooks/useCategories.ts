import { useState, useEffect } from 'react';
import { categories } from '../data/dictionary';
import { Category } from '../types';

export const useCategories = () => {
  const [categoriesList, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCategories(categories);
      setLoading(false);
    } catch (err) {
      console.error('Error loading categories:', err);
      setError('Failed to load categories');
      setLoading(false);
    }
  }, []);

  return { categories: categoriesList, loading, error };
};