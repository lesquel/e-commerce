import { setModelsData } from '@app/shared/utils/relations-entity';
interface CreateShoppingCartData {
  data: {
    isActive: boolean;
    user: {
      set: number[];
    };
  };
}
export const createShoppingCartData = (
  idUser: number
): CreateShoppingCartData => {
  return {
    data: {
      isActive: true,
      ...setModelsData('user', [idUser]),
    },
  } as CreateShoppingCartData;
};
