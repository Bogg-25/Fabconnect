import { Hexagon, Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
               <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                 <Hexagon size={24} strokeWidth={2.5} />
               </div>
              <span className="text-xl font-bold tracking-tight text-white">
                FabConnect <span className="text-primary-500">MA</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Morocco's leading digital additive manufacturing platform. Connecting startups and engineers with premium fabrication partners.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/upload" className="text-sm hover:text-white transition-colors">Upload 3D File</Link></li>
              <li><Link to="/custom-request" className="text-sm hover:text-white transition-colors">Custom Request</Link></li>
              <li><Link to="/network" className="text-sm hover:text-white transition-colors">Partner Network</Link></li>
              <li><Link to="/login" className="text-sm hover:text-white transition-colors">Partner Access</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm">hello@fabconnect.ma</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm">Rabat Innovation Hub<br/>Rabat, Morocco</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} FabConnect MA. All rights reserved. Built for IEEE-ICCITX.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
