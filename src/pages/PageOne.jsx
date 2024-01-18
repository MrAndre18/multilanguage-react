import React from 'react';
import logo from '../images/logo.svg';
import { Trans, useTranslation } from 'react-i18next';

const PageOne = () => {
  const
    { t, i18n } = useTranslation(['page1'])

  return (
    <div className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <p>
        <Trans i18nKey='main.description' ns='page1'>
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <a
        className="app-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('main.learn', { ns: 'page1' })}
      </a>
    </div>
  );
};

export default PageOne;