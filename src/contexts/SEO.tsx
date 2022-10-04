import { forwardRef, ForwardRefExoticComponent, useContext } from 'react';
import { SEOContext } from '.';

export function useSEO() {
  return useContext(SEOContext);
}

export function withSEO<Props>(
  WrappedComponent: ForwardRefExoticComponent<Props>,
) {
  const Component = forwardRef(
    (props: Parameters<typeof WrappedComponent>[0], ref) => (
      <SEOContext.Consumer>
        {(seo) => <WrappedComponent ref={ref} {...props} seo={seo} />}
      </SEOContext.Consumer>
    ),
  );

  Component.displayName = `WithSeoHOC${WrappedComponent.displayName}`;

  return Component;
}
