import { imgAdapter } from '../../../shared/utils';
import { HeroHome } from '../models';

export const HeroHomeAdapter = (data: any): HeroHome => {
  return {
    id: data.data.id,
    title: data.data.title,
    description: data.data.description,
    documentId: data.data.documentId,
    cover: imgAdapter(data.data.cover),
  };
};
