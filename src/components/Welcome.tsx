
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="mb-12 animate-in fade-in duration-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">
          Balance Your Ambition & Wellbeing
        </h2>
        <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
          Welcome to Healthy Hustle, designed for professionals like you who understand that success and self-care go hand in hand.
        </p>
        <p className="text-lg font-medium mb-8 text-slate-700 dark:text-slate-300">
          <span className="text-teal-600 dark:text-teal-400">You can still take care of your health, even on your busiest days.</span>
        </p>
        
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-xl font-semibold mb-4">Your Key Goal</h3>
          <p className="text-lg mb-2">Build a consistent routine with at least:</p>
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg font-medium text-blue-700 dark:text-blue-300">
            2 workouts per week OR equivalent healthy habits
          </div>
          
          <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg mt-4">
              <h4 className="font-medium mb-2">Why This Works</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Research shows that consistent, moderate activity is more beneficial than occasional intense workouts.
                Your app will help you maintain this balance by tracking your habits and suggesting alternatives when life gets busy.
              </p>
            </div>
          </div>
          
          <button 
            onClick={toggleExpand}
            className="mt-4 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors flex items-center mx-auto"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 transition-all active:scale-95 flex items-center gap-2"
          >
            Get Started <ArrowRight size={16} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 flex items-center gap-2"
          >
            <PlayCircle size={16} /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
