import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { motion } from 'framer-motion';

// Mock data to simulate the marketplace
const mockPartners = [
  { id: '1', name: 'ENSAM Rabat Fablab', location: 'Rabat', type: 'University', capabilities: ['FDM', 'SLA', 'SLS'], materials: ['PLA', 'Resin', 'Nylon'], rating: 4.8, img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', score: 95 },
  { id: '2', name: 'FST Tanger Makerspace', location: 'Tangier', type: 'University', capabilities: ['FDM'], materials: ['PLA', 'PETG', 'ABS'], rating: 4.5, img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80', score: 82 },
  { id: '3', name: 'Casablanca 3D Workshop', location: 'Casablanca', type: 'Professional', capabilities: ['FDM', 'SLA', 'SLS', 'Metal'], materials: ['Metal', 'Nylon', 'Resin'], rating: 4.9, img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80', score: 98 },
  { id: '4', name: 'Rabat Innovation Lab', location: 'Rabat', type: 'Professional', capabilities: ['SLA', 'SLS'], materials: ['High Detail Resin', 'Nylon'], rating: 4.7, img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80', score: 90 },
];

export default function PartnerNetwork() {
  const [search, setSearch] = useState('');
  const [filterLoc, setFilterLoc] = useState('All');
  
  const filteredPartners = mockPartners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesLoc = filterLoc === 'All' || p.location === filterLoc;
    return matchesSearch && matchesLoc;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-xl">
             <h1 className="text-3xl font-bold tracking-tight text-gray-900">Partner Network</h1>
             <p className="mt-2 text-lg text-gray-600">Discover and connect with verified manufacturing partners across Morocco to bring your files to life.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl shadow-soft border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search labs, workshops, materials..." 
              className="pl-10 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:flex-none md:w-48">
               <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
               <select 
                 className="flex h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none appearance-none"
                 value={filterLoc}
                 onChange={(e) => setFilterLoc(e.target.value)}
               >
                 <option value="All">All Cities</option>
                 <option value="Rabat">Rabat</option>
                 <option value="Casablanca">Casablanca</option>
                 <option value="Tangier">Tangier</option>
               </select>
             </div>
             <Button variant="outline" className="shrink-0">
               <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
             </Button>
          </div>
        </div>

        {/* Grid */}
        {filteredPartners.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 border-dashed">
            <h3 className="text-lg font-bold text-gray-900">No partners found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={partner.img} 
                      alt={partner.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {partner.score > 90 && (
                      <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Best Match
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                           <Link to={`/network/${partner.id}`}>{partner.name}</Link>
                         </h3>
                         <div className="flex items-center text-gray-500 text-sm mt-1">
                           <MapPin className="h-3 w-3 mr-1" />
                           {partner.location} • <span className="ml-1 text-primary-600 font-medium">{partner.type}</span>
                         </div>
                       </div>
                       <div className="flex items-center bg-gray-50 px-2 py-1 rounded-lg">
                         <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                         <span className="text-sm font-bold">{partner.rating}</span>
                       </div>
                    </div>
                    
                    <div className="mt-4 mb-6 space-y-3 flex-1 flex flex-col justify-end">
                       <div>
                         <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Capabilities</p>
                         <div className="flex flex-wrap gap-2">
                           {partner.capabilities.map(cap => (
                             <Badge key={cap} variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">{cap}</Badge>
                           ))}
                         </div>
                       </div>
                    </div>
                    
                    <Button variant="outline" className="w-full justify-between" asChild>
                       <Link to={`/network/${partner.id}`}>
                         View Profile <span className="text-primary-600">→</span>
                       </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
