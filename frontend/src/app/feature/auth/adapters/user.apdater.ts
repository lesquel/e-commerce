import { imgAdapter } from '../../../shared/utils';
import { User } from '../models';

export const userAdapter = (user: any): User => {
  return {
    jwt: user.jwt,
    id: user.user.id,
    username: user.user.username,
    email: user.user.email,
    createdAt: user.user.createdAt,
    avatar: user.user.avatar ? imgAdapter(user.user.avatar) : undefined,
    documentId: user.user.documentId,
  };
};
