import { LocalState } from '@/typings/typings';

export const SSR = typeof window === `undefined`;

export const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;

export const defaultState: LocalState = {
  theme: `dark`,
  navState: `closed`,
  locale: `en-US`,
};
