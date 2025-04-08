import { userAdapter } from '@app/features/auth/adapters';
import { InfoUser, InfoUsers } from '../models';

export const infoUserAdapter = (infoUserData: any): InfoUser => {
  const infoUser = infoUserData.data ?? infoUserData;
  return {
    createdAt: infoUser.createdAt,
    updatedAt: infoUser.updatedAt,
    id: infoUser.id,
    nacionality: infoUser.nacionality,
    documentId: infoUser.documentId,
    firstName: infoUser.firstName,
    lastName: infoUser.lastName,
    phone: infoUser.phone,
    gender: infoUser.gender,
    birthDate: infoUser.birthDate,
    user: userAdapter(infoUser.user),
  };
};

export const infoUsersAdapter = (infoUsers: any): InfoUsers => {
  return {
    data: infoUsers.data.map(infoUserAdapter),
    meta: infoUsers.meta,
  };
};
