import { PageProps } from '@/typings/typings';
import pick from 'lodash.pick';
import { PropsWithChildren, useContext, useReducer } from 'react';
import { GlobalStateContext, GlobalStateDispatch } from '.';
import { globalStateReducer } from './reducers';

export function GlobalStateProvider({
  pageProps,
  children,
}: PropsWithChildren<{ pageProps: PageProps }>) {
  const [state, dispatch] = useReducer(globalStateReducer, pageProps);

  return (
    <GlobalStateDispatch.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalStateDispatch.Provider>
  );
}

export function useGlobalState(dependencies?: Array<keyof PageProps>) {
  const state = useContext(GlobalStateContext);
  const deps = dependencies ?? Object.keys(state);
  const partialState = pick(state, deps);

  return partialState;
}

export function useGlobalStateDispatch() {
  return useContext(GlobalStateDispatch);
}
