import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, X } from 'lucide-react';

export default function PhotoUploader({ shape = 'circle', label, currentImage, onChange }) {
  const { t } = useTranslation();
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      setError(t('profile.uploadSizeError', 'L\'image doit faire moins de 3MB.'));
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError(t('profile.uploadTypeError', 'Seuls les formats JPG, PNG et WEBP sont acceptés.'));
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      onChange(event.target.result);
    };
    reader.readAsDataURL(file);
    // Reset file input so same file can be selected again if deleted
    e.target.value = null;
  };

  const clearImage = (e) => {
    e.stopPropagation();
    onChange(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  const isCircle = shape === 'circle';
  const containerClasses = isCircle
    ? 'w-24 h-24 rounded-full' 
    : 'w-full h-32 rounded-xl';

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div 
        className={`relative border-2 border-dashed border-gray-300 hover:border-[#1E6FA8] bg-gray-50 flex items-center justify-center cursor-pointer transition-colors overflow-hidden ${containerClasses}`}
        onClick={() => fileInputRef.current?.click()}
      >
        {currentImage ? (
          <>
            <img src={currentImage} alt="Preview" className={`w-full h-full object-cover`} />
            <button 
              type="button" 
              onClick={clearImage} 
              className="absolute top-1 right-1 p-1 bg-white/80 rounded-full hover:bg-white text-gray-700 shadow-sm"
              title={t('profile.removePhoto', 'Supprimer')}
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center p-2 text-center text-gray-500">
            <Upload size={isCircle ? 16 : 24} className={`${isCircle ? 'mb-1' : 'mb-2'} opacity-70`} />
            <span className={`${isCircle ? 'text-[10px]' : 'text-xs'} leading-tight`}>
              {t('profile.clickToUpload', 'Cliquez pour téléverser')}
            </span>
          </div>
        )}
      </div>
      {error && <span className="text-xs text-[#FF3B30]">{error}</span>}
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/jpeg,image/png,image/webp" 
        onChange={handleFileChange} 
      />
    </div>
  );
}
