import { PaginationProps } from '../types';

export const createPagination = (paginationProps: PaginationProps): string =>
  `pagination[page]=${paginationProps.page}&pagination[pageSize]=${paginationProps.pageSize}`;
