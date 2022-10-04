import { forwardRef, ForwardRefExoticComponent, useContext } from 'react';
import { TranslationsContext } from '.';

export function useTranslations() {
  return useContext(TranslationsContext);
}

export function withTranslations<Props>(
  WrappedComponent: ForwardRefExoticComponent<Props>,
) {
  const Component = forwardRef(
    (props: Parameters<typeof WrappedComponent>[0], ref) => (
      <TranslationsContext.Consumer>
        {(translations) => (
          <WrappedComponent ref={ref} {...props} translations={translations} />
        )}
      </TranslationsContext.Consumer>
    ),
  );

  Component.displayName = `WithTranslationHOC${WrappedComponent.displayName}`;

  return Component;
}
