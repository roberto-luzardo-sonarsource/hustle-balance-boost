
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import HabitCard from "./HabitCard";
import { HABIT_CATEGORIES } from "@/lib/constants";
import { PlusCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const habits = [
    {
      icon: "dumbbell",
      title: "Workout",
      description: "Go to the gym or 30-min workout",
      category: "fitness",
      progress: 50,
      goal: "2x per week"
    },
    {
      icon: "footprints",
      title: "Steps",
      description: "Walk your way to wellness",
      category: "movement",
      progress: 70,
      goal: "10,000 daily"
    },
    {
      icon: "cup-soda",
      title: "Hydration",
      description: "Stay hydrated throughout the day",
      category: "wellness",
      progress: 80,
      goal: "2L daily"
    },
    {
      icon: "bed",
      title: "Sleep",
      description: "Quality rest for peak performance",
      category: "wellness",
      progress: 60,
      goal: "7-8 hours"
    },
    {
      icon: "heart-pulse",
      title: "Mindfulness",
      description: "Take a mental break",
      category: "mind",
      progress: 30,
      goal: "5-10 min daily"
    },
    {
      icon: "salad",
      title: "Nutrition",
      description: "Fuel your body right",
      category: "nutrition",
      progress: 40,
      goal: "Clean meals"
    }
  ];

  const filteredHabits = selectedCategory === "all" 
    ? habits 
    : habits.filter(habit => habit.category === selectedCategory);

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Your Healthy Habits</h2>
        
        {isMobile ? (
          <div className="w-full flex justify-between items-center">
            <Button 
              onClick={toggleFilters} 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
            >
              <Filter size={16} /> {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            
            <Button 
              variant="default" 
              size="sm" 
              className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-1"
            >
              <PlusCircle size={16} /> Add Habit
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button 
              variant="default" 
              size="sm" 
              className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-1"
            >
              <PlusCircle size={16} /> Add Habit
            </Button>
          </div>
        )}
      </div>
      
      {/* Category filters */}
      <div className={`mb-6 transition-all duration-300 ${isMobile && !showFilters ? 'hidden' : 'block'}`}>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button 
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
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
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
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

      {/* Habit cards with transition */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHabits.map((habit, index) => (
          <div key={index} className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <HabitCard {...habit} />
          </div>
        ))}
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
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" className="text-sm">View Full Report</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Dashboard;
