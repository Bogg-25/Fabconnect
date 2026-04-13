import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0] || 'en';

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`
            px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200
            ${currentLang === lang.code
              ? 'bg-primary text-white shadow-sm'
              : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
            }
          `}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
