
export const productsRoutesConfig = {
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
