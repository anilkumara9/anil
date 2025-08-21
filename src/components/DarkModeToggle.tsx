import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <Button
      onClick={onToggle}
      variant="outline"
      size="sm"
      className="h-10 w-10 rounded-full p-0 hover:scale-105 transition-all duration-300 bg-background/80 backdrop-blur-sm border-2"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 transition-transform duration-500 rotate-0" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-500 rotate-0" />
      )}
    </Button>
  );
};

export default DarkModeToggle;