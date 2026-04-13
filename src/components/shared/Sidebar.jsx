import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut, 
  Menu,
  X,
  Users,
  Activity,
  FileText,
  User
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Sidebar({ role = 'client' }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const getLinks = () => {
    const base = '/dashboard';
    switch(role) {
      case 'admin':
        return [
          { name: t('sidebar.overview'), path: base, icon: LayoutDashboard },
          { name: t('sidebar.myProfile'), path: '/admin/profile', icon: User },
          { name: t('sidebar.allOrders'), path: `${base}/orders`, icon: Package },
          { name: t('sidebar.usersPartners'), path: `${base}/users`, icon: Users },
          { name: t('sidebar.platformHealth'), path: `${base}/health`, icon: Activity },
          { name: t('sidebar.settings'), path: `${base}/settings`, icon: Settings },
        ];
      case 'partner':
        return [
          { name: t('sidebar.overview'), path: base, icon: LayoutDashboard },
          { name: t('sidebar.incomingRequests'), path: `${base}/requests`, icon: FileText },
          { name: t('sidebar.activeJobs'), path: `${base}/jobs`, icon: Package },
          { name: t('sidebar.machineCapacity'), path: `${base}/capacity`, icon: Activity },
          { name: t('sidebar.settings'), path: `${base}/settings`, icon: Settings },
        ];
      default: // client
        return [
          { name: t('sidebar.overview'), path: base, icon: LayoutDashboard },
          { name: t('sidebar.myOrders'), path: `${base}/orders`, icon: Package },
          { name: t('sidebar.quoteHistory'), path: `${base}/quotes`, icon: FileText },
          { name: t('sidebar.settings'), path: `${base}/settings`, icon: Settings },
        ];
    }
  };

  const links = getLinks();
  const isActive = (path) => location.pathname === path || (path !== '/dashboard' && location.pathname.startsWith(path));

  const SidebarContent = () => (
    <>
      <div className="flex h-16 shrink-0 items-center px-6">
         <Link to="/" className="flex items-center gap-2 group">
           <div className="flex items-center justify-center p-1">
             <img src="/logo.svg" alt="FabConnect Logo" className="h-8 w-auto object-contain" />
           </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            FabConnect
          </span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col px-4 pb-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7 mt-6">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`
                      group flex gap-x-3 rounded-xl p-3 text-sm font-semibold leading-6
                      ${isActive(item.path) 
                        ? 'bg-primary-50 text-primary' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'}
                    `}
                  >
                    <item.icon
                      className={`h-5 w-5 shrink-0 ${isActive(item.path) ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              to="/login"
              className="group flex gap-x-3 rounded-xl p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-red-600" aria-hidden="true" />
              {t('sidebar.signOut')}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile Header & Button */}
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setIsMobileOpen(true)}>
          <span className="sr-only">{t('sidebar.openSidebar')}</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">{t('sidebar.dashboard')}</div>
      </div>

      {/* Mobile Sidebar overlay */}
      {isMobileOpen && (
        <div className="relative z-50 lg:hidden">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/80" 
            onClick={() => setIsMobileOpen(false)}
          />
          <motion.div 
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white px-6 pb-4"
          >
            <div className="flex h-16 shrink-0 items-center justify-between">
              <span className="font-bold text-xl">{t('sidebar.menu')}</span>
              <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setIsMobileOpen(false)}>
                <span className="sr-only">{t('sidebar.closeSidebar')}</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="-mx-6 h-full overflow-y-auto">
               <SidebarContent />
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white shadow-sm">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
