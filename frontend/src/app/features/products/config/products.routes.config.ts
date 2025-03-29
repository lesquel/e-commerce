import { RoutesConfig } from "@app/shared/types";

export const productsRoutesConfig: RoutesConfig = {
  base: {
    path: 'products',
    url: '/products',
    label: 'Products'
  },
  children: {
    list: {
      path: '',
      url: '/products',
      label: 'Products'
    },
    detail: {
      path: ':documentId',
      url: '/products/',
      label: 'Product detail'
    },

  }

};
