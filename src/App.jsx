import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

import LandingPage from './pages/LandingPage';
import AuthPage from './pages/auth/AuthPage';
import UploadPage from './pages/workflow/UploadFile';
import CustomRequestPage from './pages/workflow/CustomRequest';
import PartnerNetwork from './pages/workflow/PartnerNetwork';
import PartnerDetails from './pages/workflow/PartnerDetails';
import OrderTracking from './pages/workflow/OrderTracking';

import UserDashboard from './pages/dashboards/UserDashboard';
import PartnerDashboard from './pages/dashboards/PartnerDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import ProfilePage from './pages/admin/ProfilePage';

// Placeholder Pages (we will build these out next)
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <h1 className="text-3xl font-bold text-gray-400">{title} Page (Under Construction)</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Topbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/custom-request" element={<CustomRequestPage />} />
          <Route path="/network" element={<PartnerNetwork />} />
          <Route path="/network/:id" element={<PartnerDetails />} />
          <Route path="/track/:orderId" element={<OrderTracking />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/register" element={<AuthPage isLogin={false} />} />

        {/* Dashboard Routes with Sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* We use a simple parent route and swap out the actual dashboard 
              view inside DashboardLayout based on the active role, or we can 
              route them specifically. For this demo, let's map /dashboard to a Wrapper.
              Actually, the easiest way for the demo is to just have one /dashboard route
              and render the role-specific component depending on layout state. But since 
              React Router is linear, let's create specific routes and make the layout 
              navigate or render children.
          */}
          <Route index element={<UserDashboard />} /> {/* Default to Client */}
          <Route path="partner" element={<PartnerDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="orders" element={<Placeholder title="Orders List" />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>

        {/* Admin Profile Route */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
