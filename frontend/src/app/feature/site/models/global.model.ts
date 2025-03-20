export interface Global {
  siteName: string;
  favicon: string;
  siteDescription: string;
  defaultSeo?: {
    metaTitle: string;
    metaDescription: string;
    shareImage: string;
  };
}
