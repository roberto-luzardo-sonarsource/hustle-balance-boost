
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import HabitCard from "./HabitCard";
import { HABIT_CATEGORIES } from "@/lib/constants";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Healthy Habits</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button 
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              selectedCategory === "all"
                ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            }`}
          >
            All
          </button>
          {Object.keys(HABIT_CATEGORIES).map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              {HABIT_CATEGORIES[category].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HabitCard 
          icon="dumbbell"
          title="Workout"
          description="Go to the gym or 30-min workout"
          category="fitness"
          progress={50}
          goal="2x per week"
        />
        <HabitCard 
          icon="footprints"
          title="Steps"
          description="Walk your way to wellness"
          category="movement"
          progress={70}
          goal="10,000 daily"
        />
        <HabitCard 
          icon="cup-soda"
          title="Hydration"
          description="Stay hydrated throughout the day"
          category="wellness"
          progress={80}
          goal="2L daily"
        />
        <HabitCard 
          icon="bed"
          title="Sleep"
          description="Quality rest for peak performance"
          category="wellness"
          progress={60}
          goal="7-8 hours"
        />
        <HabitCard 
          icon="heart-pulse"
          title="Mindfulness"
          description="Take a mental break"
          category="mind"
          progress={30}
          goal="5-10 min daily"
        />
        <HabitCard 
          icon="salad"
          title="Nutrition"
          description="Fuel your body right"
          category="nutrition"
          progress={40}
          goal="Clean meals"
        />
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>Track your consistency and build healthy streaks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700 rounded-lg">
            <p className="text-slate-500 dark:text-slate-400">Weekly progress charts coming soon</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Dashboard;
