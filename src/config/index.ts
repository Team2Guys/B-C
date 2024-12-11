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

export function formatDateTime(isoDate: Date): string {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return `${formattedDate}, ${formattedTime}`;
}

export const formatDateMonth = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString(undefined, options);
};

export const removeImagesFromContent = (content: any) => {
  let updatedContent = content.replace(/<figure[^>]*>.*?<\/figure>/g, '');
  updatedContent = updatedContent.replace(/\s*(<p>|<\/p>)\s*/g, '');

  return updatedContent;
};
