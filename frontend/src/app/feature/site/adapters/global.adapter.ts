import { Global } from '../models';
import { imgAdapter } from '../../../shared/utils';
export const GlobalAdapter = (global: any): Global => {
  return {
    ...global.data,
    favicon: imgAdapter(global.data.favicon),
  };
};
