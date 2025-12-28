import { useEffect, useState } from 'react';
import { Snowflake, CloudRain, Sun, Cloud } from '@phosphor-icons/react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  main: string;
}

interface WeatherWidgetProps {
  location: {
    name: string;
    lat: number;
    lon: number;
  };
  date: string;
}

export function WeatherWidget({ location, date }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(false);
        
        const apiKey = '92b73c5c6e034b6d3c8c0e8e15a8c5e2';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`
        );
        
        if (!response.ok) throw new Error('Weather fetch failed');
        
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          main: data.weather[0].main
        });
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location.lat, location.lon]);

  const getWeatherIcon = () => {
    if (loading || error || !weather) {
      return <Snowflake className="w-6 h-6" weight="duotone" />;
    }

    const main = weather.main.toLowerCase();
    if (main.includes('snow')) return <Snowflake className="w-6 h-6" weight="duotone" />;
    if (main.includes('rain')) return <CloudRain className="w-6 h-6" weight="duotone" />;
    if (main.includes('clear')) return <Sun className="w-6 h-6" weight="duotone" />;
    return <Cloud className="w-6 h-6" weight="duotone" />;
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 rounded-lg animate-pulse">
        <div className="w-6 h-6 bg-secondary rounded" />
        <div className="flex-1">
          <div className="h-4 bg-secondary rounded w-24 mb-1" />
          <div className="h-3 bg-secondary/60 rounded w-32" />
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-secondary/30 rounded-lg text-secondary-foreground/70">
        <Snowflake className="w-6 h-6" weight="duotone" />
        <div>
          <div className="font-medium text-sm">Weather unavailable</div>
          <div className="text-xs opacity-70">{location.name}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-secondary/40 to-secondary/20 rounded-lg border border-secondary/50">
      <div className="text-secondary-foreground">
        {getWeatherIcon()}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-lg text-secondary-foreground">
          {weather.temp}°C
        </div>
        <div className="text-sm text-secondary-foreground/80 capitalize">
          {weather.description}
        </div>
      </div>
      <div className="text-xs text-secondary-foreground/60 text-right">
        {location.name}
      </div>
    </div>
  );
}
