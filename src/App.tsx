import { useState, useEffect } from 'react';
import { useKV } from '@github/spark/hooks';
import { itineraryData } from '@/lib/itinerary-data';
import { DayProgress } from '@/components/DayProgress';
import { DaySection } from '@/components/DaySection';
import { SidebarInfo } from '@/components/SidebarInfo';
import { Heart, Snowflake } from '@phosphor-icons/react';

function App() {
  const [currentDay, setCurrentDay] = useKV<number>('current-day', 1);
  const [scrolledDay, setScrolledDay] = useState(1);

  useEffect(() => {
    const today = new Date();
    const startDate = new Date('2026-01-03');
    const endDate = new Date('2026-01-06');

    if (today >= startDate && today <= endDate) {
      const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const calculatedDay = Math.min(Math.max(daysDiff + 1, 1), 4);
      setCurrentDay(calculatedDay);
    }
  }, [setCurrentDay]);

  const handleDayClick = (day: number) => {
    setCurrentDay(day);
    const element = document.getElementById(`day-${day}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = itineraryData.map(d => ({
        day: d.day,
        element: document.getElementById(`day-${d.day}`)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setScrolledDay(section.day);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`
          }}
        />
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Snowflake className="w-8 h-8 text-accent" weight="duotone" />
            <h1 className="text-2xl md:text-4xl font-bold text-center tracking-tight">
              Winter Romance in the Rockies
            </h1>
            <Heart className="w-8 h-8 text-accent" weight="fill" />
          </div>
          <p className="text-center text-sm md:text-base text-muted-foreground font-medium">
            2026年1月3日～1月6日 · 加拿大洛磯山情侶之旅
          </p>
        </div>
        <div className="container mx-auto px-4 pb-2">
          <DayProgress 
            currentDay={currentDay ?? 1} 
            totalDays={4} 
            onDayClick={handleDayClick}
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            {itineraryData.map((day) => (
              <DaySection 
                key={day.day} 
                day={day} 
                isActive={scrolledDay === day.day}
              />
            ))}
          </div>

          <aside className="lg:col-span-1">
            <SidebarInfo />
          </aside>
        </div>
      </main>

      <footer className="bg-primary/5 border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Snowflake className="w-5 h-5 text-accent" weight="duotone" />
            <Heart className="w-5 h-5 text-accent" weight="fill" />
            <Snowflake className="w-5 h-5 text-accent" weight="duotone" />
          </div>
          <p className="text-sm text-muted-foreground">
            願這趟冬季洛磯山之旅充滿溫暖與美好回憶
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Winter Romance in the Rockies – 2026
          </p>
        </div>
      </footer>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg p-3">
        <DayProgress 
          currentDay={currentDay ?? 1} 
          totalDays={4} 
          onDayClick={handleDayClick}
        />
      </div>
      <div className="lg:hidden h-24" />
    </div>
  );
}

export default App;