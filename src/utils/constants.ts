import { VEState } from '@/typings/typings';
import classNames from 'classnames';
import { PersistConfig } from 'redux-persist/es/types';

export const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;

export const pageClasses = classNames({
  'd-flex': true,
  'flex-column': true,
  'container-fluid': true,
  'flex-md-row': true,
  'flex-fill': true,
  'my-3': true,
});

export const persistStorageConfig: Omit<PersistConfig<VEState>, 'storage'> = {
  key: `v-enogwe`,
  keyPrefix: ``,
};
