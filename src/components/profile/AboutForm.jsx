import { useTranslation } from 'react-i18next';

export default function AboutForm({ profile, updateProfile }) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h3 className="text-[15px] font-medium text-[#1E6FA8] border-l-[3px] border-[#1E6FA8] pl-[10px]">
        {t('profile.tabs.about', 'À Propos')}
      </h3>
      
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">{t('profile.bioLabel', 'Biographie / Description')}</label>
        <textarea 
          rows="6"
          value={profile.bio} 
          onChange={(e) => updateProfile({ bio: e.target.value })} 
          className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
          placeholder={t('profile.bioPlaceholder', 'Décrivez votre entreprise, votre expertise et votre approche...')}
        />
      </div>
    </div>
  );
}
