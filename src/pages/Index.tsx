
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main className="container mx-auto px-4 pt-8 pb-16">
        <Welcome />
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
