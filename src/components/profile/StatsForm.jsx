import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

export default function StatsForm({ profile, updateProfile }) {
  const { t } = useTranslation();

  const renderStars = (rating) => {
    const val = parseFloat(rating) || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (val >= i) {
        stars.push(<Star key={i} className="text-[#F59E0B] fill-[#F59E0B] w-5 h-5" />);
      } else if (val >= i - 0.5) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="text-[#D1D5DB] w-5 h-5 absolute" />
            <div className="absolute overflow-hidden w-[50%] h-full">
              <Star className="text-[#F59E0B] fill-[#F59E0B] w-5 h-5" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="text-[#D1D5DB] w-5 h-5" />);
      }
    }
    return <div className="flex gap-0.5 mt-2">{stars}</div>;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[15px] font-medium text-[#1E6FA8] border-l-[3px] border-[#1E6FA8] pl-[10px]">
        {t('profile.tabs.stats', 'Statistiques')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.ratingLabel', 'NOTE (0 à 5)')}</label>
          <input 
            type="number" 
            step="0.1"
            min="0"
            max="5"
            value={profile.rating === null ? '' : profile.rating} 
            onChange={(e) => updateProfile({ rating: (e.target.value === '' ? null : parseFloat(e.target.value)) })} 
            className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder="Ex: 4.8"
          />
          {renderStars(profile.rating)}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.completedWorksLabel', 'TRAVAUX RÉALISÉS')}</label>
          <input 
            type="number"
            min="0"
            step="1"
            value={profile.completedWorks} 
            onChange={(e) => updateProfile({ completedWorks: parseInt(e.target.value) || 0 })} 
            className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder="Ex: 42"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.avgDelayLabel', 'DÉLAI MOYEN')}</label>
          <input 
            type="text" 
            value={profile.averageDelay} 
            onChange={(e) => updateProfile({ averageDelay: e.target.value })} 
            className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder="Ex: 3 jours"
          />
        </div>
      </div>
    </div>
  );
}
