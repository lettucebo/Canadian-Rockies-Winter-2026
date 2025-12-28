import { MapPin, ForkKnife, Car, Mountains, Bed } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ItineraryCard as ItineraryCardType } from '@/lib/itinerary-data';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ItineraryCardProps {
  card: ItineraryCardType;
}

export function ItineraryCard({ card }: ItineraryCardProps) {
  const getCardColor = () => {
    switch (card.type) {
      case 'attraction':
        return 'border-l-4 border-l-attraction bg-attraction/5';
      case 'restaurant':
        return 'border-l-4 border-l-restaurant bg-restaurant/5';
      case 'transport':
        return 'border-l-4 border-l-transport bg-transport/5';
      case 'accommodation':
        return 'border-l-4 border-l-accent bg-accent/5';
      default:
        return '';
    }
  };

  const getIcon = () => {
    const iconClass = "w-5 h-5";
    switch (card.type) {
      case 'attraction':
        return <Mountains className={iconClass} weight="duotone" />;
      case 'restaurant':
        return <ForkKnife className={iconClass} weight="duotone" />;
      case 'transport':
        return <Car className={iconClass} weight="duotone" />;
      case 'accommodation':
        return <Bed className={iconClass} weight="duotone" />;
    }
  };

  const getIconColor = () => {
    switch (card.type) {
      case 'attraction':
        return 'text-attraction-foreground bg-attraction';
      case 'restaurant':
        return 'text-restaurant-foreground bg-restaurant';
      case 'transport':
        return 'text-transport-foreground bg-transport';
      case 'accommodation':
        return 'text-accent-foreground bg-accent';
      default:
        return 'text-primary-foreground bg-primary';
    }
  };

  const handleNavigate = () => {
    if (card.location) {
      const url = `https://www.google.com/maps/search/?api=1&query=${card.location.lat},${card.location.lon}`;
      window.open(url, '_blank');
    }
  };

  const processDescription = (text: string) => {
    const parts = text.split('\n');
    return parts.map((part, idx) => {
      if (part.trim().startsWith('•')) {
        return <li key={idx} className="ml-4">{part.trim().substring(1).trim()}</li>;
      }
      return <p key={idx} className="mb-2 last:mb-0">{part}</p>;
    });
  };

  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg", getCardColor())}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn("p-2 rounded-lg", getIconColor())}>
              {getIcon()}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
              {card.time && (
                <p className="text-sm text-muted-foreground">{card.time}</p>
              )}
            </div>
          </div>
          {card.location && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleNavigate}
              className="shrink-0"
            >
              <MapPin className="w-4 h-4 mr-1" weight="duotone" />
              導航
            </Button>
          )}
        </div>

        {card.photos && card.photos.length > 0 && (
          <div className="mb-4 -mx-6 px-6">
            <Carousel className="w-full">
              <CarouselContent>
                {card.photos.map((photo, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={photo}
                        alt={`${card.title} - ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://source.unsplash.com/800x600/?${encodeURIComponent(card.title)},winter,canada`;
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {card.photos.length > 1 && (
                <>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </>
              )}
            </Carousel>
          </div>
        )}

        <div className="text-foreground/90 leading-relaxed space-y-2">
          {processDescription(card.description)}
        </div>

        {card.highlights && card.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {card.highlights.map((highlight, idx) => {
              const variant = highlight.type === 'food' ? 'destructive' : 
                             highlight.type === 'menu' ? 'default' : 'secondary';
              return (
                <Badge key={idx} variant={variant} className="text-xs">
                  {highlight.type === 'food' && '🍽️ '}
                  {highlight.type === 'menu' && '⭐ '}
                  {highlight.type === 'important' && '⚠️ '}
                  {highlight.text}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
