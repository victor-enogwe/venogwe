import { VEState } from '@/typings/typings';
import { persistStorageConfig } from '@/utils/constants';
import Cookies from 'js-cookie';
import { createStore, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import { Persistor } from 'redux-persist/es/types';
import { Reducers } from './reducers';

export function createFrontendStore(state: VEState): {
  store: Store;
  persistor: Persistor | Promise<Persistor>;
} {
  const reducers = new Reducers(state);
  const cookieStorageConfig = {};
  const storage = new CookieStorage(Cookies, cookieStorageConfig);
  const persistedReducer = persistReducer(
    { ...persistStorageConfig, storage },
    reducers.rootReducer.bind(reducers),
  );
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
}
