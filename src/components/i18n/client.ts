// i18n/client.ts
'use client'

import { useTranslation as useTranslationOrg } from 'react-i18next'

export function useTranslation(ns?: string | string[]) {
  return useTranslationOrg(ns)
}
