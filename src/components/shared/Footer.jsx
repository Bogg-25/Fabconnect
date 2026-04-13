import { Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
               <div className="flex items-center justify-center p-1">
                 <img src="/logo.svg" alt="FabConnect Logo" className="h-8 w-auto object-contain" />
               </div>
              <span className="text-xl font-bold tracking-tight text-white">
                FabConnect <span className="text-primary-400">MA</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.platform')}</h3>
            <ul className="space-y-3">
              <li><Link to="/upload" className="text-sm hover:text-white transition-colors">{t('footer.uploadFile')}</Link></li>
              <li><Link to="/custom-request" className="text-sm hover:text-white transition-colors">{t('footer.customRequest')}</Link></li>
              <li><Link to="/network" className="text-sm hover:text-white transition-colors">{t('footer.partnerNetwork')}</Link></li>
              <li><Link to="/login" className="text-sm hover:text-white transition-colors">{t('footer.partnerAccess')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm">hello@fabconnect.ma</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm">ENSAM RABAT<br/>Rabat, Morocco</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.social')}</h3>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
