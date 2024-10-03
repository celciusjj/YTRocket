import { Languages } from '../models';
import { useTranslation } from 'react-i18next';
import i18n from '../config';
import { useState } from 'react';

export function useTranslations() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language);

  const translate = (key: string, props?: any) => t(key, props, {});

  const changeLanguages = (language: Languages) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  const globalLanguage = () => {
    return i18n.language.split('-')[0];
  };

  return { translate, changeLanguages, globalLanguage, language };
}
