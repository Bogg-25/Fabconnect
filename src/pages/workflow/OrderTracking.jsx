import { useParams, Link } from 'react-router-dom';
import { Package, CheckCircle2, Clock, Truck, ArrowLeft, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { useTranslation } from 'react-i18next';

const MOCK_ORDER = {
  id: 'FC-993821-419',
  partName: 'Drone_Motor_Mount_v2.stl',
  partner: 'ENSAM Rabat Fablab',
  status: 'In production',
  totalCost: '45 DH',
  eta: 'Tomorrow, by End of Day',
  qty: 4,
  material: 'Tough Resin',
};

export default function OrderTracking() {
  const { orderId } = useParams();
  const { t } = useTranslation();
  const order = MOCK_ORDER;

  const PIPELINE = [
    { label: t('tracking.fileUploaded'), desc: t('tracking.fileUploadedDesc') },
    { label: t('tracking.aiCompleted'), desc: t('tracking.aiCompletedDesc') },
    { label: t('tracking.quotationApproved'), desc: t('tracking.quotationApprovedDesc') },
    { label: t('tracking.inProduction'), desc: t('tracking.inProductionDesc') },
    { label: t('tracking.postProcessing'), desc: t('tracking.postProcessingDesc') },
    { label: t('tracking.shipping'), desc: t('tracking.shippingDesc') },
    { label: t('tracking.delivered'), desc: t('tracking.deliveredDesc') },
  ];

  // Match to "In production" index — index 3 always for this mock
  const currentStepIndex = 3;
  
  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 flex items-center justify-between">
          <Link to="/dashboard" className="text-gray-500 hover:text-gray-900 flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> {t('tracking.backToDashboard')}
          </Link>
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" /> {t('tracking.downloadInvoice')}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <Card className="md:col-span-2 shadow-soft border-none">
              <CardContent className="p-6">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900">Order {orderId || order.id}</h1>
                      <p className="text-gray-500">{order.partName}</p>
                    </div>
                    <Badge variant="secondary" className="bg-secondary-50 text-secondary uppercase tracking-widest text-[10px]">{order.status}</Badge>
                 </div>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100 mb-2">
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{t('tracking.partner')}</p>
                      <p className="font-semibold text-sm">{order.partner}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{t('tracking.quantity')}</p>
                      <p className="font-semibold text-sm">{order.qty}x</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{t('tracking.material')}</p>
                      <p className="font-semibold text-sm">{order.material}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{t('tracking.total')}</p>
                      <p className="font-bold text-sm text-primary">{order.totalCost}</p>
                    </div>
                 </div>

              </CardContent>
           </Card>

           <Card className="bg-primary text-white shadow-premium border-none">
              <CardContent className="p-6 h-full flex flex-col justify-center">
                 <Truck className="h-8 w-8 text-primary-300 mb-4" />
                 <p className="text-primary-100 text-sm font-medium uppercase tracking-widest mb-1">{t('tracking.estimatedDelivery')}</p>
                 <p className="text-xl font-bold">{order.eta}</p>
              </CardContent>
           </Card>
        </div>

        <Card className="shadow-soft border-none overflow-hidden pb-12">
            <CardHeader className="bg-white border-b border-gray-100 p-6 mb-8 z-10 relative">
               <CardTitle>{t('tracking.pipeline')}</CardTitle>
            </CardHeader>
            <CardContent className="px-8 mt-4 relative">
               
               {/* Vertical Pipeline Line */}
               <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100 z-0" />
               <div 
                 className="absolute left-[39px] top-2 w-0.5 bg-primary z-0 transition-all duration-1000 ease-in-out" 
                 style={{ height: `${(Math.max(0, currentStepIndex) / (PIPELINE.length - 1)) * 100}%` }}
               />

               <div className="space-y-8 relative z-10">
                 {PIPELINE.map((step, idx) => {
                   const isCompleted = idx < currentStepIndex;
                   const isCurrent = idx === currentStepIndex;
                   const isPending = idx > currentStepIndex;
                   
                   return (
                     <div key={idx} className={`flex items-start gap-4 ${isPending ? 'opacity-40' : 'opacity-100'}`}>
                        <div className={`
                          mt-0.5 h-8 w-8 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors
                          ${isCompleted ? 'bg-primary border-primary text-white' : ''}
                          ${isCurrent ? 'bg-white border-primary text-primary ring-4 ring-primary-50' : ''}
                          ${isPending ? 'bg-white border-gray-300 text-gray-300' : ''}
                        `}>
                          {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : 
                           isCurrent ? <div className="h-2 w-2 rounded-full bg-primary animate-pulse" /> : 
                           <div className="h-2 w-2 rounded-full bg-gray-300" />}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-base font-bold ${isCurrent ? 'text-primary' : 'text-gray-900'}`}>{step.label}</h4>
                          <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                        </div>
                     </div>
                   );
                 })}
               </div>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
