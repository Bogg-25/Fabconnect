import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Factory, CheckCircle2, Package, History, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MOCK_PARTNER_DATA = {
  '1': {
     id: '1', name: 'ENSAM Rabat Fablab', location: 'Rabat', type: 'University', 
     desc: "Leading university fabrication laboratory in Morocco. Dedicated to engineering support, rapid prototyping, and additive manufacturing continuous research.",
     capabilities: ['FDM', 'SLA', 'SLS'], materials: ['PLA', 'Resin', 'Nylon', 'PETG', 'TPU'], 
     rating: 4.8, jobsCompleted: 156,
     img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80',
     machines: ['Prusa i3 MK3S+', 'Formlabs Form 3', 'Ultimaker S5'],
     reviews: [
       { author: 'Amina R.', text: 'Fantastic support for our student project.', score: 5 },
       { author: 'Hardware Startup', text: 'Fast SLA prints, good tolerance.', score: 4 },
     ]
  }
};

export default function PartnerDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const partner = MOCK_PARTNER_DATA[id] || MOCK_PARTNER_DATA['1'];

  return (
    <div className="py-8 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link to="/network" className="text-primary hover:text-primary-hover text-sm font-medium">
            {t('partnerDetails.backToNetwork')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Main Profile Info */}
           <div className="lg:col-span-2 space-y-6">
              
              <div className="h-64 rounded-3xl overflow-hidden relative shadow-soft">
                  <img src={partner.img} alt={partner.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                     <div className="p-8 text-white">
                        <Badge className="mb-3 bg-white/20 text-white border-white/30 backdrop-blur-md">{partner.type}</Badge>
                        <h1 className="text-4xl font-bold mb-2">{partner.name}</h1>
                        <div className="flex items-center text-gray-200">
                          <MapPin className="h-4 w-4 mr-1" />
                          {partner.location}
                        </div>
                     </div>
                  </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                 <Card className="bg-white border-none shadow-soft text-center p-6">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">{t('partnerDetails.rating')}</p>
                    <div className="flex items-center justify-center text-3xl font-bold text-gray-900">
                      {partner.rating} <Star className="h-6 w-6 text-yellow-400 fill-yellow-400 ml-2" />
                    </div>
                 </Card>
                 <Card className="bg-white border-none shadow-soft text-center p-6">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">{t('partnerDetails.jobsDone')}</p>
                    <div className="flex items-center justify-center text-3xl font-bold text-gray-900">
                      {partner.jobsCompleted}
                    </div>
                 </Card>
                 <Card className="bg-white border-none shadow-soft text-center p-6">
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">{t('partnerDetails.avgLeadTime')}</p>
                    <div className="flex items-center justify-center text-3xl font-bold text-gray-900">
                      3 {t('partnerDetails.days')}
                    </div>
                 </Card>
              </div>

              <Card className="shadow-soft border-none">
                 <CardHeader>
                    <CardTitle className="text-xl">{t('partnerDetails.about')}</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">{partner.desc}</p>
                 </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-soft border-none bg-primary-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Factory className="mr-2 h-5 w-5 text-primary" /> {t('partnerDetails.technology')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {partner.capabilities.map(cap => (
                        <Badge key={cap} className="bg-white border-primary-200 text-primary">{cap}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary-200/50">
                       <p className="text-sm font-medium mb-2 text-primary">{t('partnerDetails.verifiedEquipment')}</p>
                       <ul className="text-sm text-primary space-y-1">
                          {partner.machines.map((m) => (
                             <li key={m} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {m}</li>
                          ))}
                       </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-none bg-accent-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Package className="mr-2 h-5 w-5 text-accent" /> {t('partnerDetails.materials')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                       {partner.materials.map(m => (
                         <Badge key={m} className="bg-white border-accent-200 text-accent">{m}</Badge>
                       ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

           </div>

           {/* Action Sidebar */}
           <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-premium border-primary border-2">
                <CardContent className="p-6">
                   <h3 className="font-bold text-xl mb-6">{t('partnerDetails.workWith', { name: partner.name })}</h3>
                   
                   <div className="space-y-4">
                     <Button size="lg" className="w-full">
                        {t('partnerDetails.requestQuote')}
                     </Button>
                     <Button size="lg" variant="outline" className="w-full" asChild>
                        <Link to="/upload">{t('partnerDetails.uploadFiles')}</Link>
                     </Button>
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 flex items-start gap-2">
                      <Info className="h-5 w-5 shrink-0" />
                      {t('partnerDetails.secureNote')}
                   </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-none">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <History className="mr-2 h-5 w-5 text-gray-400" /> {t('partnerDetails.recentReviews')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   {partner.reviews.map((rev, i) => (
                      <div key={i} className={`pb-4 ${i !== partner.reviews.length-1 ? 'border-b border-gray-100' : ''}`}>
                         <div className="flex items-center justify-between mb-1">
                           <span className="font-bold text-sm">{rev.author}</span>
                           <div className="flex text-yellow-400">
                             {[...Array(5)].map((_, idx) => (
                               <Star key={idx} className={`h-3 w-3 ${idx < rev.score ? 'fill-yellow-400' : 'text-gray-300 fill-gray-100'}`} />
                             ))}
                           </div>
                         </div>
                         <p className="text-sm text-gray-600">"{rev.text}"</p>
                      </div>
                   ))}
                </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
