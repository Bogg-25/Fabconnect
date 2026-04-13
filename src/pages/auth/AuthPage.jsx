import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Label } from '../../components/ui/Input';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AuthPage({ isLogin = true }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('client');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const targetPath = role === 'client' ? '/dashboard' : `/dashboard/${role}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(targetPath);
    }, 1200);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-primary-200/50" />
         <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-secondary-200/50" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white p-3 rounded-2xl shadow-soft">
            <div className="flex items-center justify-center p-2">
              <img src="/logo.svg" alt="FabConnect Logo" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </motion.div>
        
        <h2 className="text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          {isLogin ? t('auth.signIn') : t('auth.createAccount')}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? t('auth.or') : t('auth.alreadyHave')}
          <Link to={isLogin ? "/register" : "/login"} className="font-medium text-primary hover:text-primary-hover transition-colors">
            {isLogin ? t('auth.freeTrial') : t('auth.signInInstead')}
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
          <Card className="border-gray-100 shadow-premium">
            <CardHeader className="pb-4">
               <CardTitle className="text-lg">{t('auth.selectRole')}</CardTitle>
               <div className="grid grid-cols-3 gap-3 mt-3">
                 {['client', 'partner', 'admin'].map((r) => (
                   <button
                     key={r}
                     type="button"
                     onClick={() => setRole(r)}
                     className={`
                       py-2 px-3 flex flex-col items-center justify-center rounded-xl text-xs font-semibold uppercase tracking-wider transition-all
                       ${role === r 
                         ? 'bg-primary-50 text-primary ring-2 ring-primary ring-inset' 
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
                    <Label htmlFor="name">{t('auth.fullName')}</Label>
                    <div className="mt-1">
                      <Input id="name" name="name" type="text" required placeholder={t('auth.fullNamePlaceholder')} />
                    </div>
                  </div>
                )}
                
                <div>
                  <Label htmlFor="email">{t('auth.email')}</Label>
                  <div className="mt-1">
                    <Input id="email" name="email" type="email" autoComplete="email" required placeholder={t('auth.emailPlaceholder')} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <div className="mt-1">
                    <Input id="password" name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        {t('auth.rememberMe')}
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary hover:text-primary-hover">
                        {t('auth.forgotPassword')}
                      </a>
                    </div>
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full mt-6" isLoading={isLoading}>
                  {isLogin ? <><LogIn className="mr-2 h-4 w-4" /> {t('auth.signInBtn')}</> : <><UserPlus className="mr-2 h-4 w-4" /> {t('auth.createAccountBtn')}</>}
                </Button>
                
                {isLogin && (
                  <Button type="button" variant="outline" className="w-full mt-3 font-normal text-gray-600" onClick={() => navigate(targetPath)}>
                    {t('auth.demoLogin', { role })}
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
