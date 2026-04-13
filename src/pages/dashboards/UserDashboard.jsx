import { Link } from 'react-router-dom';
import { Package, Clock, TrendingUp, CheckCircle2, ChevronRight, Activity, ArrowUpRight, Hexagon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const mockChartData = [
  { name: 'Jan', orders: 2 },
  { name: 'Feb', orders: 3 },
  { name: 'Mar', orders: 1 },
  { name: 'Apr', orders: 5 },
  { name: 'May', orders: 4 },
  { name: 'Jun', orders: 8 },
];

export default function UserDashboard() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <h1 className="text-2xl font-bold tracking-tight text-gray-900">{t('userDashboard.welcome')}</h1>
           <p className="text-sm text-gray-500">{t('userDashboard.subtitle')}</p>
         </div>
         <Button asChild>
           <Link to="/upload">{t('userDashboard.newProject')}</Link>
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('userDashboard.activeOrders')}</p>
                 <Package className="h-4 w-4 text-primary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">3</h2>
                 <span className="text-sm font-medium text-accent flex items-center bg-accent-50 px-2 py-0.5 rounded-full"><TrendingUp className="h-3 w-3 mr-1" /> +1</span>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('userDashboard.completedJobs')}</p>
                 <CheckCircle2 className="h-4 w-4 text-accent" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">12</h2>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('userDashboard.avgLeadTime')}</p>
                 <Clock className="h-4 w-4 text-secondary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">3.2</h2>
                 <span className="text-sm font-medium text-gray-500">{t('userDashboard.days')}</span>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">{t('userDashboard.totalSpent')}</p>
                 <Activity className="h-4 w-4 text-secondary" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">{t('userDashboard.totalSpentValue')}</h2>
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm border-none bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-lg">{t('userDashboard.recentOrders')}</CardTitle>
                </div>
                <Button variant="ghost" size="sm" asChild className="text-primary hidden sm:flex">
                  <Link to="/dashboard/orders">{t('userDashboard.viewAll')} <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 rounded-tl-lg">{t('userDashboard.orderID')}</th>
                        <th className="px-4 py-3">{t('userDashboard.part')}</th>
                        <th className="px-4 py-3">{t('userDashboard.status')}</th>
                        <th className="px-4 py-3">{t('userDashboard.eta')}</th>
                        <th className="px-4 py-3 rounded-tr-lg">{t('userDashboard.action')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 font-medium text-gray-900">FC-993821</td>
                        <td className="px-4 py-4">Drone_Motor_Mount.stl</td>
                        <td className="px-4 py-4"><Badge variant="secondary" className="bg-secondary-50 text-secondary">{t('userDashboard.inProduction')}</Badge></td>
                        <td className="px-4 py-4 text-gray-500">{t('userDashboard.tomorrow')}</td>
                        <td className="px-4 py-4">
                           <Button variant="ghost" size="sm" asChild>
                             <Link to="/track/FC-993821">{t('userDashboard.track')}</Link>
                           </Button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 font-medium text-gray-900">FC-812044</td>
                        <td className="px-4 py-4">Custom Gear Request</td>
                        <td className="px-4 py-4"><Badge variant="warning" className="bg-primary-50 text-primary hover:bg-primary-50">{t('userDashboard.pendingQuote')}</Badge></td>
                        <td className="px-4 py-4 text-gray-500">-</td>
                        <td className="px-4 py-4">
                           <Button variant="ghost" size="sm" asChild>
                             <Link to="/dashboard/orders">{t('userDashboard.view')}</Link>
                           </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 font-medium text-gray-900">FC-102948</td>
                        <td className="px-4 py-4">Enclosure_v4.step</td>
                        <td className="px-4 py-4"><Badge variant="success" className="bg-accent-50 text-accent">{t('userDashboard.delivered')}</Badge></td>
                        <td className="px-4 py-4 text-gray-500">Oct 12</td>
                        <td className="px-4 py-4">
                           <Button variant="ghost" size="sm" asChild>
                             <Link to="/track/FC-102948">{t('userDashboard.receipt')}</Link>
                           </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-none bg-white">
              <CardHeader>
                <CardTitle className="text-lg">{t('userDashboard.orderFrequency')}</CardTitle>
                <CardDescription>{t('userDashboard.chartDesc')}</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1E6FA8" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#1E6FA8" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} />
                        <Area type="monotone" dataKey="orders" stroke="#1E6FA8" strokeWidth={3} fillOpacity={1} fill="url(#colorOrders)" />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </CardContent>
            </Card>
         </div>

         <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-sm border-none bg-white bg-gradient-to-br from-primary to-secondary text-white">
               <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Hexagon size={120} strokeWidth={1} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-lg font-bold mb-2">{t('userDashboard.upgradePro')}</h3>
                     <p className="text-primary-100 text-sm mb-6 leading-relaxed">{t('userDashboard.upgradeDesc')}</p>
                     <p className="text-white/80 text-xs mb-2">{t('userDashboard.upgradePrice')}</p>
                     <Button className="w-full bg-white text-primary hover:bg-gray-50 border-none shadow-lg">
                       {t('userDashboard.viewProPlans')}
                     </Button>
                  </div>
               </CardContent>
            </Card>

            <Card className="shadow-sm border-none bg-white">
              <CardHeader>
                <CardTitle className="text-lg">{t('userDashboard.recommendedPartners')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 {[
                   { name: 'ENSAM Rabat Fablab', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=150', loc: 'Rabat', cap: 'SLA / SLS' },
                   { name: 'Casablanca 3D', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=150', loc: 'Casablanca', cap: 'Metal / FDM' }
                 ].map((p, i) => (
                   <div key={i} className="flex items-center gap-4 group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="h-12 w-12 rounded-xl overflow-hidden shrink-0">
                        <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <h4 className="text-sm font-bold text-gray-900 truncate group-hover:text-primary transition-colors">{p.name}</h4>
                         <p className="text-xs text-gray-500 truncate">{p.loc} • {p.cap}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                   </div>
                 ))}
                 <Button variant="ghost" className="w-full mt-2 text-sm text-primary" asChild>
                    <Link to="/network">{t('userDashboard.browseNetwork')}</Link>
                 </Button>
              </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
