import { languages } from './API/languages';
import logo from './images/logo.svg';
import './styles/app.scss';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const
    { t, i18n } = useTranslation()
  return (
    <div className="app">
      <div className="languages">
        {Object.keys(languages).map(lng => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {languages[lng].nativeName}
          </button>
        ))}
      </div>

      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          <Trans i18nKey='description'>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn')}
        </a>
      </header>
    </div>
  );
}

export default App;
