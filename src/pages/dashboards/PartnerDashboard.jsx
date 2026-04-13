import { Settings, BarChart3, Clock, CheckCircle2, TrendingUp, AlertCircle, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const mockCapacityData = [
  { name: 'Mon', FDM: 80, SLA: 40, SLS: 20 },
  { name: 'Tue', FDM: 90, SLA: 60, SLS: 30 },
  { name: 'Wed', FDM: 60, SLA: 80, SLS: 50 },
  { name: 'Thu', FDM: 85, SLA: 40, SLS: 30 },
  { name: 'Fri', FDM: 100, SLA: 50, SLS: 40 },
];

export default function PartnerDashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <Badge className="mb-2 bg-secondary-50 text-secondary border-secondary-200">{t('partnerDashboard.badge')}</Badge>
           <h1 className="text-2xl font-bold tracking-tight text-gray-900">{t('partnerDashboard.title')}</h1>
           <p className="text-sm text-gray-500">{t('partnerDashboard.subtitle')}</p>
         </div>
         <Button variant="outline">
           <Settings className="mr-2 h-4 w-4" /> {t('partnerDashboard.manageProfile')}
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('partnerDashboard.newRequests')}</p>
                 <AlertCircle className="h-4 w-4 text-primary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">5</h2>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('partnerDashboard.inProduction')}</p>
                 <Play className="h-4 w-4 text-secondary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">12</h2>
                 <span className="text-sm font-medium text-gray-500">{t('partnerDashboard.parts')}</span>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('partnerDashboard.avgLeadTime')}</p>
                 <Clock className="h-4 w-4 text-accent" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">2.4</h2>
                 <span className="text-sm font-medium text-gray-500">{t('partnerDashboard.days')}</span>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('partnerDashboard.monthlyRevenue')}</p>
                 <BarChart3 className="h-4 w-4 text-secondary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">{t('partnerDashboard.monthlyRevenueValue')}</h2>
                 <span className="text-sm font-medium text-accent flex items-center bg-accent-50 px-2 py-0.5 rounded-full"><TrendingUp className="h-3 w-3 mr-1" /> +12%</span>
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="shadow-sm border-none bg-white">
            <CardHeader>
               <CardTitle className="text-lg">{t('partnerDashboard.machineUtil')}</CardTitle>
               <CardDescription>{t('partnerDashboard.machineDesc')}</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockCapacityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                      <Bar dataKey="FDM" stackId="a" fill="#1E6FA8" radius={[0, 0, 4, 4]} />
                      <Bar dataKey="SLA" stackId="a" fill="#1F7A5C" />
                      <Bar dataKey="SLS" stackId="a" fill="#FF3B30" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
            </CardContent>
         </Card>

         <Card className="shadow-sm border-none bg-white flex flex-col">
            <CardHeader className="border-b border-gray-50">
               <CardTitle className="text-lg">{t('partnerDashboard.incomingQuotations')}</CardTitle>
               <CardDescription>{t('partnerDashboard.incomingDesc')}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto">
               <div className="divide-y divide-gray-100">
                  {[
                    { id: 'REQ-A92', file: 'Robotic_Arm_Base.stl', material: 'Tough PLA', qty: 2, deadline: 'In 4 days' },
                    { id: 'REQ-B14', file: 'Custom Request Form', material: 'Nylon/PA12', qty: 10, deadline: 'In 2 weeks' },
                    { id: 'REQ-C88', file: 'Housing_vFinal.step', material: 'Standard Resin', qty: 5, deadline: 'In 3 days' }
                  ].map((req, i) => (
                    <div key={i} className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                       <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-gray-900">{req.id}</span>
                            <Badge className="bg-primary-50 text-primary border-none font-medium">{t('partnerDashboard.new')}</Badge>
                          </div>
                          <p className="text-sm font-medium text-gray-900">{req.file}</p>
                          <p className="text-xs text-gray-500 mt-1">{req.qty}x • {req.material} • Target: {req.deadline}</p>
                       </div>
                       <Button size="sm" variant="outline">{t('partnerDashboard.reviewQuote')}</Button>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>

    </div>
  );
}
