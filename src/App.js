import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { languages } from './API/languages';
import './styles/app.scss';
import { useTranslation } from 'react-i18next';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  const
    { i18n } = useTranslation()

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

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PageOne />}
          />

          <Route
            path="/page2"
            element={<PageTwo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
