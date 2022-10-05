import { SSRProps } from '@/typings/typings';
import pick from 'lodash.pick';
import { useContext } from 'react';
import { IterableElement } from 'type-fest';
import { SSRPropsContext } from '.';

export function useSSRProps(
  dependencies?: Array<keyof SSRProps>,
): Pick<SSRProps, IterableElement<typeof dependencies>> {
  const ssrProps = useContext(SSRPropsContext);
  const deps = dependencies ?? Object.keys(ssrProps);
  const props = pick(ssrProps, deps);

  return props as any;
}
