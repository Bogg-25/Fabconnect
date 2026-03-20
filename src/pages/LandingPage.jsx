import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cpu, ShieldCheck, Zap, Factory } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-multiply" />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#14b8a6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="initial" animate="animate" variants={stagger}
          >
            <motion.div variants={fadeIn} className="mb-6 flex justify-center">
              <Badge variant="secondary" className="px-3 py-1 text-sm bg-teal-50 text-teal-700 border-teal-200">
                Morocco's Leading Digital Manufacturing Ecosystem
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-teal-500">Manufactured Reality</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-600 mb-10 leading-relaxed">
              Connect your designs with top university fablabs and professional workshops across Morocco. AI-powered quoting, smart matching, and seamless production management.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" asChild>
                <Link to="/upload">
                  Upload 3D File <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 shadow-sm" asChild>
                <Link to="/custom-request">Request Custom Part</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Pipeline */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Intelligent Workflow Engine</h2>
            <p className="mt-4 text-lg text-gray-600">Simulate, match, and produce in four simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Box, title: "1. Upload", desc: "Submit your STL/STEP files securely to our platform." },
              { icon: Cpu, title: "2. Analyze", desc: "AI-estimated cost, DFM checks, and process suggestions." },
              { icon: ShieldCheck, title: "3. Match", desc: "Get matched with the best verified lab or workshop." },
              { icon: Zap, title: "4. Deliver", desc: "Live tracking right to your desk or warehouse." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <Card className="h-full border-none shadow-soft hover:shadow-premium transition-all">
                  <CardContent className="pt-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 mb-6">
                      <step.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2 z-10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-3">Our Services</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Platform Capabilities</h2>
              <p className="mt-4 text-lg text-gray-600">Access industrial-grade manufacturing technologies through a single interface.</p>
            </div>
            <Button variant="outline" asChild><Link to="/upload">Explore capacities</Link></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "3D Printing (FDM/SLA/SLS)", desc: "Reliable print production across diverse polymers and resins." },
              { title: "Rapid Prototyping", desc: "Fast concept-to-part iterations for startups and hardware R&D." },
              { title: "Reverse Engineering", desc: "Scan and rebuild legacy components into production-ready CAD." },
              { title: "Small Batch Production", desc: "Bridge the gap between prototyping and mass manufacturing." },
              { title: "Design for Additive", desc: "Expert geometry optimization for weight reduction and strength." },
            ].map((service, i) => (
              <Card key={i} hoverable className="group">
                <CardContent className="p-8">
                   <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors">
                     <Factory className="text-gray-500 group-hover:text-primary-600 transition-colors" />
                   </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Ready to manufacture your next breakthrough?</h2>
          <p className="text-xl text-gray-300 mb-10">Join Moroccan hardware innovators, engineers, and researchers scaling their hardware development with FabConnect MA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="primary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl shadow-white/10" asChild>
               <Link to="/upload">Start your project</Link>
             </Button>
             <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800" asChild>
               <Link to="/login">Join as a Partner Lab</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
