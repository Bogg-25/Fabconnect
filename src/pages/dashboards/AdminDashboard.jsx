import { Users, Building2, Package, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
           <Badge className="mb-2 bg-red-50 text-red-700 border-red-200">System Administrator</Badge>
           <h1 className="text-2xl font-bold tracking-tight text-gray-900">Platform Overview</h1>
           <p className="text-sm text-gray-500">Monitor health, users, and transactions across FabConnect MA.</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">Total Users</p>
                 <Users className="h-4 w-4 text-blue-500" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">1,248</h2>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">Active Partners</p>
                 <Building2 className="h-4 w-4 text-teal-500" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">24</h2>
                 <span className="text-sm font-medium text-green-600 flex items-center bg-green-50 px-2 py-0.5 rounded-full"><TrendingUp className="h-3 w-3 mr-1" /> +2</span>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">Orders Processed</p>
                 <Package className="h-4 w-4 text-orange-500" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold">4,890</h2>
               </div>
            </CardContent>
         </Card>
         <Card className="shadow-sm border-none bg-white">
            <CardContent className="p-6">
               <div className="flex items-center justify-between">
                 <p className="text-sm font-medium text-gray-500">System Health</p>
                 <Activity className="h-4 w-4 text-green-500" />
               </div>
               <div className="flex items-baseline mt-4 space-x-2">
                 <h2 className="text-3xl font-bold text-green-600">99.9%</h2>
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-sm border-none bg-white">
              <CardHeader className="border-b border-gray-50">
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                      <tr>
                        <th className="px-6 py-4">Client</th>
                        <th className="px-6 py-4">Partner</th>
                        <th className="px-6 py-4">Value</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">Acme Corp</td>
                        <td className="px-6 py-4">ENSAM Rabat</td>
                        <td className="px-6 py-4">€ 450.00</td>
                        <td className="px-6 py-4"><Badge variant="default">Processing</Badge></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">DroneTech MA</td>
                        <td className="px-6 py-4">Casablanca 3D</td>
                        <td className="px-6 py-4">€ 1,200.00</td>
                        <td className="px-6 py-4"><Badge variant="success">Completed</Badge></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-900">MedDevice Inc</td>
                        <td className="px-6 py-4">Rabat Innovation</td>
                        <td className="px-6 py-4">€ 85.00</td>
                        <td className="px-6 py-4"><Badge variant="warning">Awaiting Quote</Badge></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
         </div>

         <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-sm border-none bg-white border-red-100 flex flex-col">
              <CardHeader className="border-b border-red-50 bg-red-50/50">
                <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" /> Pending Approvals
                </CardTitle>
                <CardDescription className="text-red-700/70">Partners waiting for platform verification.</CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                 <div className="divide-y divide-gray-100">
                    <div className="p-6">
                       <h4 className="font-bold text-gray-900">Agadir Tech Workshop</h4>
                       <p className="text-sm text-gray-500 mb-4">Applied 2 days ago • Professional</p>
                       <div className="flex gap-2">
                          <Button size="sm" variant="primary" className="w-full">Approve</Button>
                          <Button size="sm" variant="outline" className="w-full">Review</Button>
                       </div>
                    </div>
                 </div>
              </CardContent>
            </Card>
         </div>
      </div>

    </div>
  );
}
