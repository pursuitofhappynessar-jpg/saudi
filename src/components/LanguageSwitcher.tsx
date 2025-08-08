import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = location.pathname.startsWith('/en');
  
  const switchLanguage = () => {
    const currentPath = location.pathname;
    
    if (isEnglish) {
      // Switch to Arabic - remove /en prefix
      const arabicPath = currentPath.replace('/en', '') || '/';
      navigate(arabicPath);
    } else {
      // Switch to English - add /en prefix
      const englishPath = `/en${currentPath}`;
      navigate(englishPath);
    }
  };

  return (
    <button
      onClick={switchLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
    >
      <Globe className="w-4 h-4" />
      <span>{isEnglish ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitcher;