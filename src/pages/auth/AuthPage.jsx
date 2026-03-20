import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hexagon, LogIn, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Label } from '../../components/ui/Input';
import { motion } from 'framer-motion';

export default function AuthPage({ isLogin = true }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('client');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app we'd save the token here. For demo, we just route to dashboard.
      // The Dashboard layout component is currently hardcoded to 'client' for demo purposes,
      // but if we implemented context, we'd set the role here.
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-primary-200/50" />
         <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-teal-200/50" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white p-3 rounded-2xl shadow-soft">
            <div className="bg-primary-600 p-2 rounded-xl text-white">
              <Hexagon size={32} strokeWidth={2} />
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? 'Or ' : 'Already have an account? '}
          <Link to={isLogin ? "/register" : "/login"} className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            {isLogin ? 'start your 14-day free trial' : 'sign in instead'}
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <Card className="border-gray-100 shadow-premium">
            <CardHeader className="pb-4">
               <CardTitle className="text-lg">Select Role</CardTitle>
               <div className="grid grid-cols-3 gap-3 mt-3">
                 {['client', 'partner', 'admin'].map((r) => (
                   <button
                     key={r}
                     type="button"
                     onClick={() => setRole(r)}
                     className={`
                       py-2 px-3 flex flex-col items-center justify-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-all
                       ${role === r 
                         ? 'bg-primary-50 text-primary-700 ring-2 ring-primary-600 ring-inset' 
                         : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}
                     `}
                   >
                     {r}
                   </button>
                 ))}
               </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div>
                    <Label htmlFor="name">Full Name or Company</Label>
                    <div className="mt-1">
                      <Input id="name" name="name" type="text" required placeholder="Acme Hardware Ltd." />
                    </div>
                  </div>
                )}
                
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <div className="mt-1">
                    <Input id="email" name="email" type="email" autoComplete="email" required placeholder="steve@acme.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="mt-1">
                    <Input id="password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full mt-6" isLoading={isLoading}>
                  {isLogin ? <><LogIn className="mr-2 h-4 w-4" /> Sign In</> : <><UserPlus className="mr-2 h-4 w-4" /> Create Account</>}
                </Button>
                
                {isLogin && (
                  <Button type="button" variant="outline" className="w-full mt-3 font-normal text-gray-600" onClick={() => navigate('/dashboard')}>
                    Demo Quick Login ({role})
                  </Button>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
