import { materials as mocked } from 'entities';
import Filter from 'filter';

export const materials = <F, L>(filter: F, locale: L) =>
    new Filter(mocked, filter, locale).byLocale('title').get();
