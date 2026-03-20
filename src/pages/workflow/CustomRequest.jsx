import { useState } from 'react';
import { Lightbulb, Info, FileUp, Shield, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Label } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';

export default function CustomRequestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
       <div className="py-24 bg-gray-50 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <Card className="max-w-md w-full text-center p-8 shadow-premium border-0">
             <div className="mx-auto h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
               <Rocket size={40} />
             </div>
             <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
             <p className="text-gray-600 mb-8">Our network partners will review your requirements and provide manual quotes within 24-48 hours.</p>
             <Button className="w-full" asChild>
               <a href="/dashboard">Return to Dashboard</a>
             </Button>
          </Card>
       </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Custom Part Request</h1>
          <p className="mt-2 text-lg text-gray-600">No 3D model? Describe what you need, upload sketches, and let our verified partners draft it for you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
               <CardHeader className="border-b border-gray-100 pb-4">
                 <CardTitle>Project Details</CardTitle>
                 <CardDescription>Provide as much detail as possible to get accurate quotes.</CardDescription>
               </CardHeader>
               <CardContent className="pt-6">
                 <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                       <Label htmlFor="title">Project Title</Label>
                       <Input id="title" className="mt-1" placeholder="e.g. Drone Motor Mount Replacement" required />
                    </div>

                    <div>
                       <Label htmlFor="description">Detailed Description</Label>
                       <textarea 
                         id="description" 
                         className="mt-1 flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-y" 
                         placeholder="Describe the part, its function, and the environment it will be used in..."
                         required
                       />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="material">Material Preference</Label>
                        <select id="material" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                          <option>Not sure - please recommend</option>
                          <option>Rigid Plastic (PLA, PETG)</option>
                          <option>Strong & Heat Resistant (ABS, ASA, PC)</option>
                          <option>Flexible (TPU)</option>
                          <option>High Detail Resin</option>
                          <option>Metal</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Estimated Budget Range</Label>
                        <select id="budget" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                          <option>Under €50</option>
                          <option>€50 - €150</option>
                          <option>€150 - €500</option>
                          <option>€500+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                       <Label>Supporting Files (Sketches, PDFs, referential images)</Label>
                       <div className="mt-2 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 flex flex-col items-center justify-center cursor-pointer transition-colors">
                          <FileUp className="h-8 w-8 text-gray-400 mb-2" />
                          <span className="text-sm font-medium text-gray-700">Click to upload files</span>
                          <span className="text-xs text-gray-500 mt-1">PNG, JPG, PDF up to 10MB</span>
                       </div>
                    </div>

                    <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                       <div className="flex items-center gap-2 text-sm text-gray-500">
                         <Shield className="h-4 w-4" />
                         Requests are sent securely to verified partners.
                       </div>
                       <Button type="submit" size="lg" isLoading={isSubmitting}>
                         Submit Request
                       </Button>
                    </div>
                 </form>
               </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
             <Card className="bg-primary-50 border-primary-100 shadow-none">
                <CardHeader className="pb-2">
                   <div className="flex gap-3">
                     <Lightbulb className="h-6 w-6 text-primary-600 shrink-0" />
                     <CardTitle className="text-primary-900">Tips for better quotes</CardTitle>
                   </div>
                </CardHeader>
                <CardContent className="pt-2">
                   <ul className="space-y-3 text-sm text-primary-800">
                     <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Include rough dimensions (e.g. 5x5x2 cm) if known.</li>
                     <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Clarify mechanical requirements (does it need to bear weight?).</li>
                     <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> Clarify thermal requirements (will it sit in a hot car?).</li>
                     <li className="flex gap-2"><span className="text-primary-600 font-bold">•</span> A hand-drawn sketch on a napkin is better than no sketch!</li>
                   </ul>
                </CardContent>
             </Card>

             <Card className="shadow-none border border-gray-200">
                <CardHeader>
                   <CardTitle className="text-base flex items-center gap-2">
                     <Info className="h-5 w-5 text-gray-400" />
                     What happens next?
                   </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-4">
                   <div className="flex flex-col gap-3">
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                         <p>Verified partners review your request within 24h.</p>
                      </div>
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                         <p>You receive manual quotes via the Dashboard.</p>
                      </div>
                      <div className="flex gap-3 items-start">
                         <div className="h-6 w-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                         <p>Accept the best quote to begin production or design iteration.</p>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
