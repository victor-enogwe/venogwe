import { useContext } from 'react';
import { ArticlesContext } from '.';

export function useArticles() {
  return useContext(ArticlesContext);
}
