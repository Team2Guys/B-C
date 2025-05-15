// i18n/server.ts
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'fr']

export function getOptions(lng = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    defaultNS: 'translation',
  }
}
