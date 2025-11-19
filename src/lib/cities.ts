import { getNames } from 'country-list';

export const countryOptions = getNames()
  .sort()
  .map(item =>
    item
      .split(' ')
      .filter(itemElement => !itemElement.match(/^\(the\)$/))
      .join(' '),
  );
