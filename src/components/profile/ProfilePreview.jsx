import { useTranslation } from 'react-i18next';
import { MapPin, Star, StarHalf, ShieldCheck, Printer, Box, Clock, TrendingUp } from 'lucide-react';
import AccountTypeBadge from './AccountTypeBadge';

export default function ProfilePreview({ profile }) {
  const { t } = useTranslation();

  const renderStars = (rating) => {
    const val = parseFloat(rating) || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (val >= i) {
          stars.push(<Star key={i} className="text-[#F59E0B] fill-[#F59E0B] w-4 h-4" />);
        } else if (val >= i - 0.5) {
          stars.push(
            <div key={i} className="relative w-4 h-4">
              <Star className="text-[#D1D5DB] w-4 h-4 absolute" />
              <div className="absolute overflow-hidden w-[50%] h-full">
                <Star className="text-[#F59E0B] fill-[#F59E0B] w-4 h-4" />
              </div>
            </div>
          );
        } else {
          stars.push(<Star key={i} className="text-[#D1D5DB] w-4 h-4" />);
        }
    }
    return <div className="flex gap-0.5">{stars}</div>;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      
      {/* Left column */}
      <div className="flex-1 space-y-8">
        
        {/* Cover & Avatar Header */}
        <div className="relative">
          <div className="h-[200px] w-full rounded-xl bg-gray-200 overflow-hidden relative border border-gray-100">
            {profile.coverPhoto ? (
              <img src={profile.coverPhoto} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                {t('profile.preview.noCover', 'Pas de photo de couverture')}
              </div>
            )}
            <div className="absolute top-4 left-4">
              <AccountTypeBadge type={profile.accountType} className="shadow-sm" />
            </div>
          </div>
          <div className="absolute -bottom-10 left-6">
            <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white bg-white shadow-sm overflow-hidden flex items-center justify-center">
              {profile.profilePhoto ? (
                <img src={profile.profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                  Logo
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Padding to account for absolute avatar */}
        <div className="pt-2 px-2">
          {/* Name & Location */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{profile.name || t('profile.preview.noName', 'Nom non défini')}</h1>
            <div className="flex items-center gap-1.5 text-gray-500 mt-1">
              <MapPin size={16} />
              <span className="text-sm">{profile.location || t('profile.preview.noLocation', 'Localisation non définie')}</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col items-center text-center">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('profile.preview.rating', 'NOTE')}</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">{profile.rating !== null ? profile.rating : '-'}</span>
              </div>
              <div className="mt-1">{renderStars(profile.rating || 0)}</div>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col items-center text-center">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('profile.completedWorksLabel', 'TRAVAUX')}</div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={20} className="text-[#1E6FA8]" />
                <span className="text-xl font-bold text-gray-900">{profile.completedWorks}</span>
              </div>
              <span className="text-xs text-gray-500">{t('profile.preview.projects', 'Projets')}</span>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col items-center text-center">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t('profile.avgDelayLabel', 'DÉLAI')}</div>
              <div className="flex items-center gap-2 mb-1">
                <Clock size={20} className="text-[#1E6FA8]" />
                <span className="text-xl font-bold text-gray-900">{profile.averageDelay || '-'}</span>
              </div>
              <span className="text-xs text-gray-500">{t('profile.preview.average', 'En moyenne')}</span>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{t('profile.tabs.about', 'À Propos')}</h2>
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
              {profile.bio || <span className="italic text-gray-400">{t('profile.preview.noBio', 'Aucune description disponible.')}</span>}
            </div>
          </div>

          {/* Tech & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Printer size={16} className="text-[#FF3B30]" />
                {t('profile.tabs.techMat', 'Technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.technologies.length > 0 ? profile.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-[#FF3B30]/10 text-[#FF3B30]">
                    {tech}
                  </span>
                )) : <span className="text-xs text-gray-400 italic">{t('profile.preview.none', 'Non spécifié')}</span>}
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Box size={16} className="text-[#1F7A5C]" />
                {t('profile.mat.title', 'Matériaux')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {profile.materials.length > 0 ? profile.materials.map(mat => (
                  <span key={mat} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1F7A5C]/10 text-[#1F7A5C]">
                    {mat}
                  </span>
                )) : <span className="text-xs text-gray-400 italic">{t('profile.preview.none', 'Non spécifié')}</span>}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-full lg:w-[320px] shrink-0 space-y-6">
        
        {/* Actions Box */}
        <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 mb-2">
            {t('profile.preview.workWith', 'Travailler avec')} {profile.name || '...'}
          </h3>
          <button type="button" className="w-full py-3 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#E0342A] transition-colors">
            {t('profile.preview.quoteBtn', 'Demander un Devis')}
          </button>
          <button type="button" className="w-full py-3 rounded-lg font-bold text-[#FF3B30] border-2 border-[#FF3B30] hover:bg-red-50 transition-colors">
            {t('profile.preview.uploadBtn', 'Téléverser des fichiers')}
          </button>
          <div className="flex items-start gap-2 pt-2 text-gray-400">
            <ShieldCheck size={16} className="shrink-0 mt-0.5" />
            <p className="text-xs leading-snug">
              {t('profile.preview.securityNote', 'Paiement sécurisé et fichiers protégés par la plateforme FabConnect.')}
            </p>
          </div>
        </div>

        {/* Reviews Box */}
        <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock size={16} className="text-[#1E6FA8]" />
            {t('profile.preview.recentReviews', 'Avis Récents')}
          </h3>
          <div className="space-y-4">
            {profile.reviews.length > 0 ? profile.reviews.map(review => (
              <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-bold text-gray-900">{review.clientName || t('profile.preview.anon', 'Anonyme')}</span>
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-gray-600 italic">"{review.comment}"</p>
              </div>
            )) : (
              <p className="text-xs text-gray-500 italic">{t('profile.preview.noReviews', 'Aucun avis récent.')}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
