import React from 'react';
import { useTranslation } from 'react-i18next';

const TestComponent = () => {
  const
    { t, i18n } = useTranslation(['page2'])

  return (
    <div>
      <div>{t('test', { ns: 'page2' })}</div>

      <p>{t('lang', { ns: 'page2', context: i18n.resolvedLanguage, lng: i18n.resolvedLanguage })}</p>
    </div>
  );
};

export default TestComponent;