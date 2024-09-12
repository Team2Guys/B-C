export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const urlToCategoryMap: Record<string, string> = {
  'made-to-measure-blinds': 'Blinds',
  'shutters-range': 'Shutter',
  'made-to-measure-curtains': 'Curtains',
};

export const getCategoryFromUrl = (urlParam: string): string => {
  return urlToCategoryMap[urlParam] || urlParam;
};
