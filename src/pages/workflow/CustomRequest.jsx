import { useState } from 'react';
import { Lightbulb, Info, FileUp, Shield, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Label } from '../../components/ui/Input';
import { useTranslation } from 'react-i18next';

export default function CustomRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
       <div className="py-24 bg-gray-50 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Card className="max-w-md w-full text-center p-8 shadow-premium border-0">
             <div className="mx-auto h-20 w-20 bg-accent-100 rounded-full flex items-center justify-center mb-6 text-accent">
               <Rocket size={40} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('customRequest.submitted')}</h2>
             <p className="text-gray-600 mb-8">{t('customRequest.submittedDesc')}</p>
             <Button className="w-full" asChild>
               <a href="/dashboard">{t('customRequest.returnDashboard')}</a>
             </Button>
          </Card>
       </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{t('customRequest.title')}</h1>
          <p className="mt-2 text-lg text-gray-600">{t('customRequest.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
               <CardHeader className="border-b border-gray-100 pb-4">
                 <CardTitle>{t('customRequest.projectDetails')}</CardTitle>
                 <CardDescription>{t('customRequest.projectDetailsDesc')}</CardDescription>
               </CardHeader>
               <CardContent className="pt-6">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                       <Label htmlFor="title">{t('customRequest.projectTitle')}</Label>
                       <Input id="title" className="mt-1" placeholder={t('customRequest.projectTitlePlaceholder')} required />
                    </div>

                    <div>
                       <Label htmlFor="description">{t('customRequest.description')}</Label>
                       <textarea 
                         id="description" 
                         className="mt-1 flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none resize-y" 
                         placeholder={t('customRequest.descriptionPlaceholder')}
                         required
                       />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="material">{t('customRequest.materialPref')}</Label>
                        <select id="material" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none">
                          <option>{t('customRequest.matNotSure')}</option>
                          <option>{t('customRequest.matRigid')}</option>
                          <option>{t('customRequest.matStrong')}</option>
                          <option>{t('customRequest.matFlexible')}</option>
                          <option>{t('customRequest.matResin')}</option>
                          <option>{t('customRequest.matMetal')}</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">{t('customRequest.budget')}</Label>
                        <select id="budget" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none">
                          <option>{t('customRequest.budgetUnder50')}</option>
                          <option>{t('customRequest.budget50to150')}</option>
                          <option>{t('customRequest.budget150to500')}</option>
                          <option>{t('customRequest.budgetOver500')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                       <Label>{t('customRequest.supporting')}</Label>
                       <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 flex flex-col items-center justify-center cursor-pointer transition-colors">
                          <FileUp className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm font-medium text-gray-700">{t('customRequest.uploadFiles')}</span>
                          <span className="text-xs text-gray-500 mt-1">{t('customRequest.uploadFormats')}</span>
                       </div>
                    </div>

                    <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                       <div className="flex items-center gap-2 text-sm text-gray-500">
                         <Shield className="h-4 w-4" />
                         {t('customRequest.secureNote')}
                       </div>
                       <Button type="submit" size="lg" isLoading={isSubmitting}>
                         {t('customRequest.submit')}
                       </Button>
                    </div>
                 </form>
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <Card className="bg-primary-50 border-primary-100 shadow-none">
                <CardHeader className="pb-2">
                   <div className="flex gap-3">
                     <Lightbulb className="h-6 w-6 text-primary shrink-0" />
                     <CardTitle className="text-primary">{t('customRequest.tips')}</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="pt-2">
                   <ul className="space-y-3 text-sm text-primary">
                     <li className="flex gap-2"><span className="text-primary font-bold">•</span> {t('customRequest.tip1')}</li>
                     <li className="flex gap-2"><span className="text-primary font-bold">•</span> {t('customRequest.tip2')}</li>
                     <li className="flex gap-2"><span className="text-primary font-bold">•</span> {t('customRequest.tip3')}</li>
                     <li className="flex gap-2"><span className="text-primary font-bold">•</span> {t('customRequest.tip4')}</li>
                   </ul>
                </CardContent>
             </Card>

             <Card className="shadow-none border border-gray-200">
                <CardHeader>
                   <CardTitle className="text-base flex items-center gap-2">
                     <Info className="h-5 w-5 text-gray-400" />
                     {t('customRequest.whatNext')}
                   </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-4">
                   <div className="flex flex-col gap-3">
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                         <p>{t('customRequest.next1')}</p>
                      </div>
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                         <p>{t('customRequest.next2')}</p>
                      </div>
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-primary-100 text-primary flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                         <p>{t('customRequest.next3')}</p>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
