import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle2, AlertTriangle, ArrowRight, Settings, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input, Label } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const fileInputRef = useRef(null);
  
  const validateFile = (f) => {
    if(!f) return false;
    const ext = f.name.split('.').pop().toLowerCase();
    return ['stl', 'step', 'obj'].includes(ext);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if(e.dataTransfer.files && e.dataTransfer.files[0]) {
       const droppedFile = e.dataTransfer.files[0];
       if(validateFile(droppedFile)){
         setFile(droppedFile);
       } else {
         alert("Invalid file. STL, STEP, or OBJ only.");
       }
    }
  };

  const runAnalysis = (e) => {
    e.preventDefault();
    if(!file) return;
    setIsAnalyzing(true);
    
    // Simulate complex AI analysis time
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        volume: "124 cm³",
        costEstimate: "€45 - €80",
        material: "Draft Resin (SLA) / Tough PLA (FDM)",
        leadTime: "3-5 days",
        score: 92,
        recommendedProcess: "SLA",
        warnings: ["Minor overhangs detected: Support structures required (will add ~5% to cost)."]
      });
    }, 2000);
  }

  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 max-w-2xl">
          <Badge className="mb-2">Step 1 of 4</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Upload 3D Model</h1>
          <p className="mt-2 text-lg text-gray-600">Submit your CAD file to receive instant manufacturability feedback and price estimates.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Uploader Card */}
            <Card className="shadow-premium overflow-hidden border-0">
               <CardContent className="p-0">
                  <div 
                    className={`
                      border-2 border-dashed transition-all duration-300 ease-in-out p-12 text-center flex flex-col items-center justify-center min-h-[300px]
                      ${isDragging ? 'border-primary-500 bg-primary-50' : 'border-gray-300 bg-white hover:bg-gray-50'}
                      ${file ? 'border-green-500 bg-green-50/30' : ''}
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => !file && fileInputRef.current?.click()}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept=".stl,.step,.obj"
                      onChange={(e) => {
                         if(e.target.files?.[0] && validateFile(e.target.files[0])) {
                           setFile(e.target.files[0]);
                         }
                      }}
                    />
                    
                    {file ? (
                      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="flex flex-col items-center">
                        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-600">
                          <CheckCircle2 size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{file.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-4"
                          onClick={(e) => { e.stopPropagation(); setFile(null); setAnalysisResult(null); }}
                        >
                          Remove file
                        </Button>
                      </motion.div>
                    ) : (
                      <>
                        <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
                           <Upload size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Upload an STL, STEP, or OBJ</h3>
                        <p className="text-sm text-gray-500">Drag and drop, or click to browse files</p>
                        <p className="text-xs text-gray-400 mt-4">Max file size: 50MB</p>
                      </>
                    )}
                  </div>
               </CardContent>
            </Card>

            {/* Print Parameters Form */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Settings className="text-gray-400 h-5 w-5"/>
                  <CardTitle>Production Parameters</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={runAnalysis}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="material">Target Material (Optional)</Label>
                      <select id="material" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                        <option>Let AI recommend</option>
                        <option>PLA / ABS (Prototyping)</option>
                        <option>Standard Resin (Detail)</option>
                        <option>Nylon/PA12 (Functional)</option>
                        <option>Stainless Steel (Metal)</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input id="quantity" type="number" defaultValue="1" min="1" max="1000" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="deadline">Target Delivery Date</Label>
                      <Input id="deadline" type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority Level</Label>
                      <select id="priority" className="mt-1 flex h-11 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none">
                        <option>Standard (3-7 days)</option>
                        <option>Fast (1-3 days)</option>
                        <option>Express (24h)</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button type="submit" size="lg" disabled={!file || isAnalyzing} isLoading={isAnalyzing}>
                      {isAnalyzing ? "Analyzing Geometry..." : "Run AI Analysis"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            {/* AI Analysis Sidebar */}
            <Card className="sticky top-24 bg-gray-900 text-white border-0 shadow-xl overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-full blur-[60px] opacity-20 -mr-10 -mt-10 pointer-events-none" />
               <CardHeader className="border-b border-gray-800 pb-4">
                 <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="text-primary-400 h-5 w-5"/>
                    AI Manufacturability
                 </CardTitle>
                 <CardDescription className="text-gray-400 text-sm">Automated geometry screening</CardDescription>
               </CardHeader>
               <CardContent className="pt-6">
                 {!analysisResult ? (
                    <div className="text-center py-8">
                       <FileText className="h-10 w-10 text-gray-700 mx-auto mb-3" />
                       <p className="text-sm text-gray-500">Upload a file and run analysis to view estimates and recommendations.</p>
                    </div>
                 ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                       <div className="flex items-end justify-between border-b border-gray-800 pb-4">
                          <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Printability Score</p>
                            <p className="text-3xl font-bold text-green-400">{analysisResult.score}/100</p>
                          </div>
                          <Badge variant="success" className="bg-green-500/10 text-green-400 border-green-500/20">Excellent</Badge>
                       </div>

                       <div className="space-y-4">
                          <div>
                             <p className="text-xs text-gray-400 mb-1">Recommended Process</p>
                             <p className="font-medium">{analysisResult.recommendedProcess}</p>
                          </div>
                          <div>
                             <p className="text-xs text-gray-400 mb-1">Material Class</p>
                             <p className="font-medium text-sm">{analysisResult.material}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div>
                               <p className="text-xs text-gray-400 mb-1">Est. Volume</p>
                               <p className="font-medium">{analysisResult.volume}</p>
                             </div>
                             <div>
                               <p className="text-xs text-gray-400 mb-1">Est. Lead Time</p>
                               <p className="font-medium">{analysisResult.leadTime}</p>
                             </div>
                          </div>
                       </div>
                       
                       {analysisResult.warnings.length > 0 && (
                         <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3 mt-4">
                           <div className="flex items-start gap-2">
                             <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                             <p className="text-xs text-yellow-200/90 leading-relaxed">{analysisResult.warnings[0]}</p>
                           </div>
                         </div>
                       )}

                       <div className="pt-4 border-t border-gray-800">
                          <p className="text-xs text-gray-400 text-center mb-2">Estimated Market Price</p>
                          <p className="text-2xl font-bold text-center mb-6">{analysisResult.costEstimate}</p>
                          <Button className="w-full bg-white text-gray-900 hover:bg-gray-100" asChild>
                             <Link to="/network">Find Partners <ArrowRight className="ml-2 h-4 w-4" /></Link>
                          </Button>
                       </div>
                    </motion.div>
                 )}
               </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
