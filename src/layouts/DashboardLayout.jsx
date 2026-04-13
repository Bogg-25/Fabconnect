import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, Bell, User, Search } from 'lucide-react';
import Sidebar from '../components/shared/Sidebar';
import { useState } from 'react'; // Added useState import

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Deduce role from path for the sake of the static demo without Context API
  let currentRole = 'client';
  if (location.pathname.includes('/partner')) currentRole = 'partner';
  if (location.pathname.includes('/admin')) currentRole = 'admin';

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role={currentRole} />
      <main className="lg:pl-72 py-8 min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <Outlet context={{ role: currentRole }} />
        </div>
      </main>
    </div>
  );
}
