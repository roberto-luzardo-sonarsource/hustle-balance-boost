
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { HABIT_CATEGORIES } from "@/lib/constants";
import { Dumbbell, Footprints, CupSoda, Bed, HeartPulse, Salad } from "lucide-react";

interface HabitCardProps {
  icon: string;
  title: string;
  description: string;
  category: string;
  progress: number;
  goal: string;
}

const HabitCard = ({ icon, title, description, category, progress, goal }: HabitCardProps) => {
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
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <div className={`${categoryColor} p-2 rounded-lg`}>
                {getIcon()}
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
              {goal}
            </span>
          </div>
          
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span>Progress</span>
              <span className={`font-medium ${textColor}`}>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitCard;
