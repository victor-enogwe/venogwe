import { useContext } from 'react';
import { PostContext } from '.';

export function usePost() {
  return useContext(PostContext);
}
