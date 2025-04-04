
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="container mx-auto px-4 pt-8 pb-16">
        <Welcome />
        <Dashboard />
        
        <div className="fixed bottom-6 right-6 md:hidden">
          <Button 
            className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg flex items-center justify-center"
            aria-label="Quick action"
          >
            <PlusCircle size={24} />
          </Button>
        </div>
      </main>
    </div>
  );
};

const PlusCircle = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export default Index;
