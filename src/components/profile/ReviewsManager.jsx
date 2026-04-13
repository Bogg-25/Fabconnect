import { useTranslation } from 'react-i18next';
import { Star, Trash2, Plus } from 'lucide-react';

export default function ReviewsManager({ profile, updateProfile }) {
  const { t } = useTranslation();

  const addReview = () => {
    const newReview = {
      id: Date.now().toString(),
      clientName: '',
      comment: '',
      rating: 5,
    };
    updateProfile({ reviews: [...profile.reviews, newReview] });
  };

  const removeReview = (id) => {
    updateProfile({ reviews: profile.reviews.filter(r => r.id !== id) });
  };

  const updateReview = (id, field, value) => {
    updateProfile({
      reviews: profile.reviews.map(r => r.id === id ? { ...r, [field]: value } : r)
    });
  };

  const renderStars = (rating, reviewId) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
          <button type="button" key={i} onClick={() => updateReview(reviewId, 'rating', i)} className="focus:outline-none">
             <Star className={`w-5 h-5 ${i <= rating ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#D1D5DB]'}`} />
          </button>
        );
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[15px] font-medium text-[#1E6FA8] border-l-[3px] border-[#1E6FA8] pl-[10px]">
        {t('profile.tabs.reviews', 'Avis Clients')}
      </h3>
      <p className="text-sm text-gray-500 italic">
        {t('profile.reviewsNote', '(Avis gérés manuellement — notation automatique à venir)')}
      </p>

      <div className="space-y-4">
        {profile.reviews.map(review => (
          <div key={review.id} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col gap-3">
             <div className="flex justify-between items-start">
               <div className="flex-1 mr-4 space-y-3">
                 <input 
                   type="text" 
                   value={review.clientName} 
                   onChange={(e) => updateReview(review.id, 'clientName', e.target.value)} 
                   className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
                   placeholder={t('profile.reviewNamePlaceholder', 'Nom du client')}
                 />
                 {renderStars(review.rating, review.id)}
                 <textarea 
                   rows="2"
                   value={review.comment} 
                   onChange={(e) => updateReview(review.id, 'comment', e.target.value)} 
                   className="w-full border border-gray-200 rounded-lg p-[10px] sm:px-[14px] focus:outline-2 focus:outline-[#1E6FA8]"
                   placeholder={t('profile.reviewCommentPlaceholder', 'Commentaire...')}
                 />
               </div>
               <button type="button" onClick={() => removeReview(review.id)} className="p-2 text-gray-400 hover:text-[#FF3B30] hover:bg-gray-50 rounded-lg transition-colors" title={t('profile.delete', 'Supprimer')}>
                 <Trash2 size={20} />
               </button>
             </div>
          </div>
        ))}
      </div>

      <button type="button" onClick={addReview} className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg shadow-sm text-sm font-medium transition-colors">
        <Plus size={16} />
        {t('profile.addReview', 'Ajouter un avis')}
      </button>
    </div>
  );
}
