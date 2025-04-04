
import { Button } from "@/components/ui/button";

const Welcome = () => {
  return (
    <section className="mb-12">
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
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-4">Your Key Goal</h3>
          <p className="text-lg mb-2">Build a consistent routine with at least:</p>
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg font-medium text-blue-700 dark:text-blue-300">
            2 workouts per week OR equivalent healthy habits
          </div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            The app will help you track your progress and suggest alternatives when life gets in the way.
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
