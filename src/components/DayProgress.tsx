import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DayProgressProps {
  currentDay: number;
  totalDays: number;
  onDayClick: (day: number) => void;
}

export function DayProgress({ currentDay, totalDays, onDayClick }: DayProgressProps) {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
        const isActive = day === currentDay;
        const isPast = day < currentDay;
        
        return (
          <button
            key={day}
            onClick={() => onDayClick(day)}
            className={cn(
              "relative flex items-center justify-center w-14 h-14 rounded-full font-semibold transition-all duration-300",
              "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
              isActive && "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-lg scale-110",
              !isActive && isPast && "bg-primary/20 text-primary border-2 border-primary/30",
              !isActive && !isPast && "bg-muted text-muted-foreground border-2 border-border"
            )}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/30"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <span className="relative z-10 text-sm">Day {day}</span>
          </button>
        );
      })}
    </div>
  );
}
