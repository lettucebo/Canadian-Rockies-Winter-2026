import { DayItinerary } from '@/lib/itinerary-data';
import { WeatherWidget } from './WeatherWidget';
import { ItineraryCard } from './ItineraryCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Lightbulb } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';

interface DaySectionProps {
  day: DayItinerary;
  isActive: boolean;
}

export function DaySection({ day, isActive }: DaySectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const month = date.getMonth() + 1;
    const dayNum = date.getDate();
    const dayOfWeek = days[date.getDay()];
    return `${month}月${dayNum}日（${dayOfWeek}）`;
  };

  return (
    <section
      id={`day-${day.day}`}
      className={`scroll-mt-24 transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-1 h-12 rounded-full ${isActive ? 'bg-accent' : 'bg-primary/30'}`} />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Day {day.day}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Calendar className="w-4 h-4" weight="duotone" />
              <p className="text-sm md:text-base">{formatDate(day.date)}</p>
            </div>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 ml-7">
          {day.title}
        </h3>
      </div>

      <div className="mb-6 ml-7">
        <WeatherWidget location={day.location} date={day.date} />
      </div>

      <div className="ml-7 space-y-6">
        <div>
          <Accordion type="multiple" defaultValue={day.cards.map(c => c.id)} className="space-y-4">
            {day.cards.map((card) => (
              <AccordionItem key={card.id} value={card.id} className="border-none">
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div]:shadow-xl">
                  <div className="w-full">
                    <ItineraryCard card={card} />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {day.alternatives && day.alternatives.length > 0 && (
          <Card className="p-5 bg-gradient-to-br from-muted/30 to-secondary/5 border-dashed border-2 border-secondary/40">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-secondary" weight="duotone" />
              <h4 className="font-semibold text-lg text-secondary-foreground">備選景點</h4>
            </div>
            <div className="space-y-3">
              {day.alternatives.map((alt) => (
                <ItineraryCard key={alt.id} card={alt} />
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
