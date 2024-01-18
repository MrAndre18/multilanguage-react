import React from 'react';
import TestComponent from '../TestComponent';
import { useTranslation } from 'react-i18next';

const PageTwo = () => {
  const
    { t } = useTranslation(['page2'])

  return (
    <div>
      <p>{t('title', { ns: 'page2' })}</p>

      <TestComponent />
    </div>
  );
};

export default PageTwo;