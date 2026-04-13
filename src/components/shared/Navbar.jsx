import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.upload'), path: '/upload' },
    { name: t('nav.customRequest'), path: '/custom-request' },
    { name: t('nav.network'), path: '/network' },
    { name: t('nav.dashboard'), path: '/dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism border-b bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
               <div className="flex items-center justify-center p-1">
                 <img src="/logo.svg" alt="FabConnect Logo" className="h-8 w-auto object-contain" />
               </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                FabConnect <span className="text-primary">MA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 flex items-center gap-3">
                <LanguageSwitcher />
                <Button variant="outline" size="sm" asChild>
                  <Link to="/upload">{t('nav.getQuote')}</Link>
                </Button>
                <Button variant="primary" size="sm" asChild>
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">{t('nav.openMenu')}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism absolute w-full border-b shadow-lg">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-3 pb-2 pt-4 border-t border-gray-100">
              <Button variant="outline" className="w-full justify-center" asChild>
                <Link to="/upload" onClick={() => setIsOpen(false)}>{t('nav.getQuote')}</Link>
              </Button>
              <Button variant="primary" className="w-full justify-center" asChild>
                <Link to="/login" onClick={() => setIsOpen(false)}>{t('nav.login')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
