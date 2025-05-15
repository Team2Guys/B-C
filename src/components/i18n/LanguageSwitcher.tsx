'use client'

import React, { useEffect } from 'react'
import i18n from '../i18n/config'

export default function LanguageSwitcher() {
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
  }

  useEffect(() => {
    const storedLng = localStorage.getItem('i18nextLng')
    if (storedLng) {
      i18n.changeLanguage(storedLng)
    }
  }, [])

  return (
    <select onChange={changeLanguage} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  )
}
