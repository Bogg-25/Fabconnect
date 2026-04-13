import { useTranslation } from 'react-i18next';
import PhotoUploader from './PhotoUploader';

export default function HeaderForm({ profile, updateProfile }) {
  const { t } = useTranslation();

  const accountTypes = [
    { id: 'university', label: t('profile.accountTypes.university', 'University') },
    { id: 'professional', label: t('profile.accountTypes.professional', 'Professional') },
    { id: 'startup', label: t('profile.accountTypes.startup', 'Startup') },
    { id: 'individual', label: t('profile.accountTypes.individual', 'Individual') }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-[15px] font-medium text-[#1E6FA8] border-l-[3px] border-[#1E6FA8] pl-[10px]">
        {t('profile.tabs.presentation', 'Présentation')}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <PhotoUploader 
            shape="wide" 
            label={t('profile.coverPhoto', 'Photo de couverture (Bannière)')} 
            currentImage={profile.coverPhoto} 
            onChange={(img) => updateProfile({ coverPhoto: img })} 
          />
        </div>
        <div className="flex justify-center md:block">
          <PhotoUploader 
            shape="circle" 
            label={t('profile.profilePhoto', 'Logo / Avatar')} 
            currentImage={profile.profilePhoto} 
            onChange={(img) => updateProfile({ profilePhoto: img })} 
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.nameLabel', 'Nom / Raison sociale')}</label>
          <input 
            type="text" 
            value={profile.name} 
            onChange={(e) => updateProfile({ name: e.target.value })} 
            className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder={t('profile.namePlaceholder', 'Ex: FabLab Express')}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.locationLabel', 'Localisation (Ville)')}</label>
          <input 
            type="text" 
            value={profile.location} 
            onChange={(e) => updateProfile({ location: e.target.value })} 
            className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder={t('profile.locationPlaceholder', 'Ex: Casablanca, Maroc')}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{t('profile.accountTypeLabel', 'Type de compte')}</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {accountTypes.map(type => (
              <button
                key={type.id}
                type="button"
                onClick={() => updateProfile({ accountType: type.id })}
                className={`py-3 px-4 rounded-xl border text-sm font-medium transition-colors ${profile.accountType === type.id ? 'border-[#1E6FA8] bg-blue-50 text-[#1E6FA8]' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
