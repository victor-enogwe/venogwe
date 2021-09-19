import classNames from 'classnames';

export const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;

export const pageClasses = classNames({
  'd-flex': true,
  row: true,
  'flex-column': true,
  // 'flex-md-column': true,
  'flex-md-row': true,
});
