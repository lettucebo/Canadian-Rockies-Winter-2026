import { useEffect, useRef, useState } from 'react';
import { MapPin, NavigationArrow } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { itineraryData } from '@/lib/itinerary-data';
import type { ItineraryCard } from '@/lib/itinerary-data';

interface Waypoint {
  name: string;
  lat: number;
  lon: number;
  day: number;
  type: 'start' | 'stop' | 'end';
  card?: ItineraryCard;
}

export function RouteMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint | null>(null);
  const [map, setMap] = useState<any>(null);
  const markersRef = useRef<any[]>([]);

  const waypoints: Waypoint[] = [];
  
  itineraryData.forEach((day) => {
    day.cards.forEach((card, index) => {
      if (card.location) {
        let type: 'start' | 'stop' | 'end' = 'stop';
        if (day.day === 1 && index === 0) type = 'start';
        if (day.day === 4 && index === day.cards.length - 1) type = 'end';
        
        waypoints.push({
          name: card.location.name,
          lat: card.location.lat,
          lon: card.location.lon,
          day: day.day,
          type,
          card
        });
      }
    });
  });

  useEffect(() => {
    if (!mapRef.current) return;

    let L: any;
    let LRM: any;
    let mapInstance: any;
    let routingControl: any;

    const initMap = async () => {
      try {
        L = (await import('leaflet')).default;
        LRM = (await import('leaflet-routing-machine')).default;
        await import('leaflet/dist/leaflet.css');
        await import('leaflet-routing-machine/dist/leaflet-routing-machine.css');

        const dayColors: Record<number, string> = {
          1: '#E8965A',
          2: '#3B82F6',
          3: '#8B5CF6',
          4: '#EC4899'
        };

        const createDayIcon = (day: number) => {
          const color = dayColors[day] || '#E8965A';
          const iconUrl = 'data:image/svg+xml;base64,' + btoa(`
            <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 8.4 12.5 28.5 12.5 28.5S25 20.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="${color}" stroke="#fff" stroke-width="2"/>
              <circle cx="12.5" cy="12.5" r="5" fill="#fff"/>
            </svg>
          `);

          return L.icon({
            iconUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
          });
        };

        const startIconUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 8.4 12.5 28.5 12.5 28.5S25 20.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#4CAF50" stroke="#fff" stroke-width="2"/>
            <circle cx="12.5" cy="12.5" r="5" fill="#fff"/>
          </svg>
        `);

        const startIcon = L.icon({
          iconUrl: startIconUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        const endIconUrl = 'data:image/svg+xml;base64,' + btoa(`
          <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 8.4 12.5 28.5 12.5 28.5S25 20.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#DC2626" stroke="#fff" stroke-width="2"/>
            <circle cx="12.5" cy="12.5" r="5" fill="#fff"/>
          </svg>
        `);

        const endIcon = L.icon({
          iconUrl: endIconUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });

        mapInstance = L.map(mapRef.current).setView([51.5, -118], 6);
        setMap(mapInstance);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(mapInstance);

        const routeWaypoints = waypoints.map(w => L.latLng(w.lat, w.lon));

        if (routeWaypoints.length > 0) {
          routingControl = L.Routing.control({
            waypoints: routeWaypoints,
            router: L.Routing.osrmv1({
              serviceUrl: 'https://router.project-osrm.org/route/v1',
              profile: 'driving'
            }),
            lineOptions: {
              styles: [
                { color: '#E8965A', opacity: 0.8, weight: 6 },
                { color: '#FFF', opacity: 0.3, weight: 2 }
              ],
              extendToWaypoints: true,
              missingRouteTolerance: 100
            },
            show: false,
            addWaypoints: false,
            routeWhileDragging: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
            createMarker: function(i: number, waypoint: any, n: number) {
              const waypointData = waypoints[i];
              if (!waypointData) return null;

              let icon;
              if (waypointData.type === 'start') {
                icon = startIcon;
              } else if (waypointData.type === 'end') {
                icon = endIcon;
              } else {
                icon = createDayIcon(waypointData.day);
              }

              const dayColor = dayColors[waypointData.day] || '#E8965A';

              const marker = L.marker(waypoint.latLng, { 
                icon,
                draggable: false
              })
                .bindPopup(`
                  <div style="font-family: Inter, sans-serif; padding: 4px;">
                    <strong style="color: ${dayColor}; font-size: 14px;">Day ${waypointData.day}</strong><br/>
                    <span style="font-size: 13px;">${waypointData.name}</span>
                  </div>
                `);

              marker.on('click', () => {
                setSelectedWaypoint(waypointData);
              });

              markersRef.current.push(marker);
              return marker;
            }
          }).addTo(mapInstance);

          setTimeout(() => {
            const routingContainer = document.querySelector('.leaflet-routing-container');
            if (routingContainer) {
              (routingContainer as HTMLElement).style.display = 'none';
            }
          }, 100);

          routingControl.on('routesfound', function() {
            console.log('Route found and displayed');
          });

          routingControl.on('routingerror', function(e: any) {
            console.error('Routing error:', e);
          });
        }
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    };

    initMap();

    return () => {
      markersRef.current = [];
      if (routingControl) {
        try {
          routingControl.remove();
        } catch (e) {
          console.log('Routing control cleanup:', e);
        }
      }
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  const handleWaypointClick = (waypoint: Waypoint) => {
    setSelectedWaypoint(waypoint);
    if (map) {
      map.setView([waypoint.lat, waypoint.lon], 10);
      const marker = markersRef.current.find((m) => {
        const pos = m.getLatLng();
        return pos.lat === waypoint.lat && pos.lng === waypoint.lon;
      });
      if (marker) {
        marker.openPopup();
      }
    }
  };

  const getDayColor = (day: number) => {
    const colors: Record<number, string> = {
      1: 'text-[#E8965A]',
      2: 'text-[#3B82F6]',
      3: 'text-[#8B5CF6]',
      4: 'text-[#EC4899]'
    };
    return colors[day] || 'text-accent';
  };

  const getCardTypeColor = (type: string) => {
    switch (type) {
      case 'attraction':
        return 'bg-attraction/10 text-attraction-foreground border-attraction/30';
      case 'restaurant':
        return 'bg-restaurant/10 text-restaurant-foreground border-restaurant/30';
      case 'transport':
        return 'bg-transport/10 text-transport-foreground border-transport/30';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getCardTypeLabel = (type: string) => {
    switch (type) {
      case 'attraction':
        return '景點';
      case 'restaurant':
        return '餐廳';
      case 'transport':
        return '交通';
      case 'accommodation':
        return '住宿';
      default:
        return type;
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/10 p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <NavigationArrow className="w-6 h-6 text-accent" weight="fill" />
          <h2 className="text-xl font-bold">完整路線圖</h2>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          從 Lake Louise 到 Banff 的 4 天洛磯山脈冬季之旅
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-2 h-[400px] lg:h-[600px] relative">
          <div ref={mapRef} className="w-full h-full" />
        </div>

        <div className="p-4 space-y-3 max-h-[400px] lg:max-h-[600px] overflow-y-auto border-t lg:border-t-0 lg:border-l border-border/50">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              路線點位
            </h3>
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow-sm" />
                <span className="text-muted-foreground">起點</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: '#E8965A' }} />
                <span className="text-muted-foreground">Day 1</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: '#3B82F6' }} />
                <span className="text-muted-foreground">Day 2</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: '#8B5CF6' }} />
                <span className="text-muted-foreground">Day 3</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: '#EC4899' }} />
                <span className="text-muted-foreground">Day 4</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-600 border-2 border-white shadow-sm" />
                <span className="text-muted-foreground">終點</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {waypoints.map((waypoint, index) => (
              <button
                key={index}
                onClick={() => handleWaypointClick(waypoint)}
                className={`w-full text-left p-3 rounded-lg border transition-all hover:shadow-md ${
                  selectedWaypoint === waypoint
                    ? 'border-accent bg-accent/5 shadow-sm'
                    : 'border-border/50 bg-card hover:bg-accent/5'
                }`}
              >
                <div className="flex items-start gap-2">
                  <MapPin
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      waypoint.type === 'start'
                        ? 'text-green-500'
                        : waypoint.type === 'end'
                        ? 'text-red-600'
                        : getDayColor(waypoint.day)
                    }`}
                    weight="fill"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        Day {waypoint.day}
                      </Badge>
                      {waypoint.card && (
                        <Badge
                          variant="outline"
                          className={`text-xs ${getCardTypeColor(waypoint.card.type)}`}
                        >
                          {getCardTypeLabel(waypoint.card.type)}
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium text-sm leading-tight">
                      {waypoint.name}
                    </p>
                    {waypoint.card?.time && (
                      <p className="text-xs text-muted-foreground">
                        {waypoint.card.time}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {selectedWaypoint?.card && (
            <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <NavigationArrow className="w-4 h-4 text-accent" />
                快速導航
              </h4>
              <Button
                size="sm"
                className="w-full"
                onClick={() => {
                  const url = `https://www.google.com/maps/search/?api=1&query=${selectedWaypoint.lat},${selectedWaypoint.lon}`;
                  window.open(url, '_blank');
                }}
              >
                <NavigationArrow className="w-4 h-4 mr-2" />
                在 Google Maps 中開啟
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
