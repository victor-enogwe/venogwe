import { useContext } from 'react';
import { PagesContext } from '.';

export function usePages() {
  return useContext(PagesContext);
}
