
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { HABIT_CATEGORIES } from "@/lib/constants";
import { Dumbbell, Footprints, CupSoda, Bed, HeartPulse, Salad, Check, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

interface HabitCardProps {
  icon: string;
  title: string;
  description: string;
  category: string;
  progress: number;
  goal: string;
}

const HabitCard = ({ icon, title, description, category, progress, goal }: HabitCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  
  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };
  
  const toggleOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  const getIcon = () => {
    switch (icon) {
      case "dumbbell":
        return <Dumbbell className="h-5 w-5" />;
      case "footprints":
        return <Footprints className="h-5 w-5" />;
      case "cup-soda":
        return <CupSoda className="h-5 w-5" />;
      case "bed":
        return <Bed className="h-5 w-5" />;
      case "heart-pulse":
        return <HeartPulse className="h-5 w-5" />;
      case "salad":
        return <Salad className="h-5 w-5" />;
      default:
        return <Dumbbell className="h-5 w-5" />;
    }
  };

  const categoryColor = category in HABIT_CATEGORIES ? HABIT_CATEGORIES[category].color : "bg-slate-100";
  const textColor = category in HABIT_CATEGORIES ? HABIT_CATEGORIES[category].text : "text-slate-700";

  return (
    <Card 
      className={`overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${
        isCompleted ? 'ring-2 ring-green-400 dark:ring-green-500' : ''
      }`}
      onClick={toggleComplete}
    >
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className={`${categoryColor} p-2 rounded-lg`}>
                {getIcon()}
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                {goal}
              </span>
              <div className="relative">
                <button 
                  onClick={toggleOptions}
                  className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <MoreVertical size={16} />
                </button>
                
                {/* Options dropdown menu */}
                {showOptions && (
                  <div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 shadow-lg rounded-md border border-slate-200 dark:border-slate-700 py-1 w-36 z-10">
                    <button className="w-full text-left px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                      Edit habit
                    </button>
                    <button className="w-full text-left px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                      View details
                    </button>
                    <button className="w-full text-left px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 text-red-500">
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span>Progress</span>
              <span className={`font-medium ${textColor}`}>{progress}%</span>
            </div>
            <Progress 
              value={isCompleted ? 100 : progress} 
              className="h-2 transition-all duration-700" 
            />
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            {isCompleted ? (
              <span className="text-xs flex items-center gap-1 text-green-600 dark:text-green-400">
                <Check size={14} /> Completed today
              </span>
            ) : (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Tap to mark as complete
              </span>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs hover:bg-slate-100 dark:hover:bg-slate-700 p-1 h-auto"
              onClick={(e) => {
                e.stopPropagation();
                // Would link to habit details
              }}
            >
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitCard;
