
"use client"

import LanguageSwitcher from 'components/i18n/LanguageSwitcher'
import Navbar from './Navbar'
import { useTranslation } from 'components/i18n/client'


const Header = () => {
    const { t } = useTranslation()


  return (
    <>
    <Navbar />
     <div className="p-8">
      <LanguageSwitcher />
      <h1 className="text-2xl">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
    </>
  )
}

export default Header