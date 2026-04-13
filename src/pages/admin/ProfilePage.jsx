import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useProfile } from '../../hooks/useProfile';
import { CheckCircle2 } from 'lucide-react';
import HeaderForm from '../../components/profile/HeaderForm';
import StatsForm from '../../components/profile/StatsForm';
import AboutForm from '../../components/profile/AboutForm';
import TechMaterialsForm from '../../components/profile/TechMaterialsForm';
import ReviewsManager from '../../components/profile/ReviewsManager';
import ProfilePreview from '../../components/profile/ProfilePreview';

export default function ProfilePage() {
  const { t } = useTranslation();
  const { profile, updateProfile } = useProfile();
  
  const [activeTab, setActiveTab] = useState('presentation');
  const [showToast, setShowToast] = useState(false);

  // Note: we use updateProfile aggressively via props, 
  // but users might want to save exactly via the button. 
  // However, local storage hook updates instantly.
  // The 'Enregistrer' button is just visual confirmation/sync.
  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const tabs = [
    { id: 'presentation', label: t('profile.tabs.presentation', 'Présentation') },
    { id: 'stats', label: t('profile.tabs.stats', 'Statistiques') },
    { id: 'tech', label: t('profile.tabs.techMat', 'Technologies & Matériaux') },
    { id: 'reviews', label: t('profile.tabs.reviews', 'Avis Clients') },
    { id: 'preview', label: t('profile.tabs.preview', 'Aperçu & Publication') },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-20 relative">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{t('profile.pageTitle', 'Mon Profil Public')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('profile.pageSubtitle', 'Gérez les informations visibles sur votre vitrine partenaire.')}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Tab Bar */}
        <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-4 text-sm font-bold transition-colors ${
                activeTab === tab.id 
                  ? 'border-b-2 border-[#FF3B30] text-[#FF3B30]' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {activeTab === 'presentation' && <HeaderForm profile={profile} updateProfile={updateProfile} />}
          {activeTab === 'stats' && <StatsForm profile={profile} updateProfile={updateProfile} />}
          {activeTab === 'tech' && (
             <>
               <AboutForm profile={profile} updateProfile={updateProfile} />
               <div className="mt-8"><TechMaterialsForm profile={profile} updateProfile={updateProfile} /></div>
             </>
          )}
          {activeTab === 'reviews' && <ReviewsManager profile={profile} updateProfile={updateProfile} />}
          {activeTab === 'preview' && <ProfilePreview profile={profile} />}
        </div>
      </div>

      {/* Global Bottom Actions */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-6 z-10">
        <div className="flex items-center gap-3">
           <label className="relative inline-flex items-center cursor-pointer">
             <input 
               type="checkbox" 
               className="sr-only peer" 
               checked={profile.isPublic}
               onChange={(e) => updateProfile({ isPublic: e.target.checked })}
             />
             <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F7A5C]"></div>
             <span className="ml-3 text-sm font-semibold text-gray-700">
               {profile.isPublic ? t('profile.publicOn', 'Profil Public') : t('profile.publicOff', 'Profil Caché')}
             </span>
           </label>
        </div>
        <button 
          onClick={handleSave}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#FF3B30] hover:bg-[#E0342A] text-white rounded-lg font-bold shadow-sm transition-colors"
        >
          {t('profile.saveAndPublish', 'Enregistrer & Publier')}
        </button>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F7A5C] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300 max-w-sm">
          <CheckCircle2 size={24} />
          <div>
            <h4 className="font-bold text-sm tracking-tight">{t('profile.toastSuccess', 'Modifications enregistrées')}</h4>
            <p className="text-xs text-white/90">{t('profile.toastMessage', 'Votre profil est à jour !')}</p>
          </div>
        </div>
      )}

    </div>
  );
}
