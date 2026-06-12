import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CmsPage from './pages/CmsPage';
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<CmsPage slug="privacy-policy" />} />
        <Route path="/terms-conditions" element={<CmsPage slug="terms-conditions" />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
