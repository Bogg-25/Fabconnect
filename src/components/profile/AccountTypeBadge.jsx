import { useTranslation } from 'react-i18next';

export default function AccountTypeBadge({ type, className = '' }) {
  const { t } = useTranslation();

  const getStyle = () => {
    switch (type) {
      case 'university':
        return 'text-[#1E6FA8] border-[#1E6FA8]';
      case 'professional':
        return 'text-[#1F7A5C] border-[#1F7A5C]';
      case 'startup':
        return 'text-[#FF3B30] border-[#FF3B30]';
      case 'individual':
      default:
        return 'text-[#888888] border-[#888888]';
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'university': return t('profile.accountTypes.university', 'University');
      case 'professional': return t('profile.accountTypes.professional', 'Professional');
      case 'startup': return t('profile.accountTypes.startup', 'Startup');
      case 'individual': return t('profile.accountTypes.individual', 'Individual');
      default: return t('profile.accountTypes.individual', 'Individual');
    }
  };

  return (
    <span className={`inline-flex items-center justify-center bg-white border ${getStyle()} rounded-full text-[11px] font-semibold px-[10px] py-[2px] ${className}`}>
      {getLabel()}
    </span>
  );
}
