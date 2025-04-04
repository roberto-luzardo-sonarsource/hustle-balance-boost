
export const HABIT_CATEGORIES = {
  fitness: {
    label: "Fitness",
    color: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-300",
  },
  movement: {
    label: "Movement",
    color: "bg-green-100 dark:bg-green-900/30", 
    text: "text-green-700 dark:text-green-300",
  },
  wellness: {
    label: "Wellness",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-700 dark:text-cyan-300",
  },
  mind: {
    label: "Mind",
    color: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-300",
  },
  nutrition: {
    label: "Nutrition",
    color: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-300",
  },
};

export const SAMPLE_HABITS = [
  {
    id: "workout",
    title: "Workout",
    description: "Go to the gym or 30-min workout",
    category: "fitness",
    icon: "dumbbell",
    goal: "2x per week",
    progress: 50,
  },
  {
    id: "steps",
    title: "Steps",
    description: "Walk your way to wellness",
    category: "movement",
    icon: "footprints",
    goal: "10,000 daily",
    progress: 70,
  },
  {
    id: "water",
    title: "Hydration",
    description: "Stay hydrated throughout the day",
    category: "wellness", 
    icon: "cup-soda",
    goal: "2L daily",
    progress: 80,
  },
  {
    id: "sleep",
    title: "Sleep",
    description: "Quality rest for peak performance",
    category: "wellness",
    icon: "bed",
    goal: "7-8 hours",
    progress: 60,
  },
  {
    id: "mindfulness",
    title: "Mindfulness",
    description: "Take a mental break",
    category: "mind",
    icon: "heart-pulse",
    goal: "5-10 min daily",
    progress: 30,
  },
  {
    id: "nutrition",
    title: "Nutrition",
    description: "Fuel your body right",
    category: "nutrition",
    icon: "salad",
    goal: "Clean meals",
    progress: 40,
  },
];
