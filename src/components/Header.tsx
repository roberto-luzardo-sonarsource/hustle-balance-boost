
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-8 h-8 rounded-lg"></div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 text-transparent bg-clip-text">
            Healthy Hustle
          </h1>
        </div>
        <Button variant="outline" size="sm">Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
