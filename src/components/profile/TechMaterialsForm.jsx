import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Printer, Box, X } from 'lucide-react';

export default function TechMaterialsForm({ profile, updateProfile }) {
  const { t } = useTranslation();
  const [techInput, setTechInput] = useState('');
  const [matInput, setMatInput] = useState('');

  const suggestedTechs = ['FDM', 'SLA', 'SLS', 'DLP', 'MJF', 'Binder Jetting', 'Laser Cutting', 'CNC Milling', 'PCB Milling', 'Vinyl Cutting', 'Waterjet'];
  const suggestedMats = ['PLA', 'ABS', 'PETG', 'TPU', 'Resin', 'Nylon', 'ASA', 'Carbon Fiber', 'Wood', 'Metal', 'Acrylic', 'Foam', 'Rubber', 'Wax', 'Ceramic'];

  const addTech = (tech) => {
    if (tech && !profile.technologies.includes(tech)) {
      updateProfile({ technologies: [...profile.technologies, tech] });
    }
    setTechInput('');
  };

  const removeTech = (tech) => {
    updateProfile({ technologies: profile.technologies.filter(t => t !== tech) });
  };

  const addMat = (mat) => {
    if (mat && !profile.materials.includes(mat)) {
      updateProfile({ materials: [...profile.materials, mat] });
    }
    setMatInput('');
  };

  const removeMat = (mat) => {
    updateProfile({ materials: profile.materials.filter(m => m !== mat) });
  };

  return (
    <div className="space-y-8">
      <h3 className="text-[15px] font-medium text-[#1E6FA8] border-l-[3px] border-[#1E6FA8] pl-[10px]">
        {t('profile.tabs.techMat', 'Technologies & Matériaux')}
      </h3>

      {/* Section A -> Technologie */}
      <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-2 mb-4">
          <Printer className="text-[#FF3B30]" size={20} />
          <h4 className="font-semibold text-gray-900">{t('profile.tech.title', 'Technologies proposées')}</h4>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.technologies.map(tech => (
            <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border bg-[#FF3B30]/10 border-[#FF3B30] text-[#FF3B30]">
              {tech}
              <button type="button" onClick={() => removeTech(tech)} className="hover:text-red-800"><X size={14}/></button>
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={techInput} 
            onChange={(e) => setTechInput(e.target.value)} 
            onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); addTech(techInput.trim()); } }}
            className="flex-1 border border-gray-200 rounded-lg p-[10px] sm:px-[14px] text-sm focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder={t('profile.tech.placeholder', 'Ajouter une technologie...')}
          />
          <button type="button" onClick={() => addTech(techInput.trim())} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">
            {t('profile.add', 'Ajouter')}
          </button>
        </div>

        <div className="text-xs text-gray-500 mb-2">{t('profile.tech.suggestions', 'Suggestions :')}</div>
        <div className="flex flex-wrap gap-1.5">
          {suggestedTechs.filter(t => !profile.technologies.includes(t)).map(tech => (
             <button key={tech} type="button" onClick={() => addTech(tech)} className="px-2.5 py-1 text-xs border border-gray-200 rounded-full text-gray-600 hover:border-[#FF3B30] hover:text-[#FF3B30] transition-colors">
               + {tech}
             </button>
          ))}
        </div>
      </div>

      {/* Section B -> Matériaux */}
      <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-2 mb-4">
          <Box className="text-[#1F7A5C]" size={20} />
          <h4 className="font-semibold text-gray-900">{t('profile.mat.title', 'Matériaux travaillés')}</h4>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {profile.materials.map(mat => (
            <span key={mat} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border bg-[#1F7A5C]/10 border-[#1F7A5C] text-[#1F7A5C]">
              {mat}
              <button type="button" onClick={() => removeMat(mat)} className="hover:text-green-800"><X size={14}/></button>
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <input 
            type="text" 
            value={matInput} 
            onChange={(e) => setMatInput(e.target.value)} 
            onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); addMat(matInput.trim()); } }}
            className="flex-1 border border-gray-200 rounded-lg p-[10px] sm:px-[14px] text-sm focus:outline-2 focus:outline-[#1E6FA8]"
            placeholder={t('profile.mat.placeholder', 'Ajouter un matériau...')}
          />
          <button type="button" onClick={() => addMat(matInput.trim())} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">
            {t('profile.add', 'Ajouter')}
          </button>
        </div>

        <div className="text-xs text-gray-500 mb-2">{t('profile.mat.suggestions', 'Suggestions :')}</div>
        <div className="flex flex-wrap gap-1.5">
          {suggestedMats.filter(m => !profile.materials.includes(m)).map(mat => (
             <button key={mat} type="button" onClick={() => addMat(mat)} className="px-2.5 py-1 text-xs border border-gray-200 rounded-full text-gray-600 hover:border-[#1F7A5C] hover:text-[#1F7A5C] transition-colors">
               + {mat}
             </button>
          ))}
        </div>
      </div>
    </div>
  );
}
