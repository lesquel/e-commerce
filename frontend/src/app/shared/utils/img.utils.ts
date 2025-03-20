export const imgAdapter = (img: any): string => {
  const src = img.formats.small.url || img.formats.thumbnail.url;
  return `http://localhost:1337${src}`;
};
