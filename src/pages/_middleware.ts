import { Reducers } from '@/store/reducers';
import { Locales, Theme, VEState } from '@/typings/typings';
import { persistStorageConfig } from '@/utils/constants';
import { configurePersistor, Cookies } from '@/utils/functions';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { createStore } from 'redux';
import { getStoredState, persistReducer } from 'redux-persist';
import {
  CookieStorage,
  NodeCookiesWrapper,
} from 'redux-persist-cookie-storage';

async function cookieStorageMiddleware(
  request: NextRequest,
  response: NextResponse,
  event: NextFetchEvent,
): Promise<NextResponse> {
  const cookies = Cookies(request, response);
  const locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Locales;
  const theme: Theme = `dark`;
  const defaultState = { theme, locale };
  const cookieJar = new NodeCookiesWrapper(cookies);
  const cookieStorageConfig = {};
  const storage = new CookieStorage(cookieJar, cookieStorageConfig);
  const reducerConfig = { ...persistStorageConfig, storage };
  const cookieState = (await getStoredState(reducerConfig)) as VEState;
  const state = { ...defaultState, ...cookieState };
  const reducers = new Reducers(state);
  const rootReducer = reducers.rootReducer.bind(reducers);
  const reducer = persistReducer(reducerConfig, rootReducer);
  const store = createStore(reducer, state as unknown as any);
  const persistor = await configurePersistor(store);

  event.waitUntil(persistor.flush());

  return response;
}

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  return cookieStorageMiddleware(request, NextResponse.next(), event);
}
