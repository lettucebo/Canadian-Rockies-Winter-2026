import { useEffect, useState } from 'react';
import { Snowflake, CloudRain, Sun, Cloud, Wind, Drop } from '@phosphor-icons/react';

interface WeatherData {
  temp: number;
  tempMin: number;
  tempMax: number;
  description: string;
  icon: string;
  main: string;
  humidity: number;
  windSpeed: number;
  snowVolume?: number;
  feelsLike: number;
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
        const targetDate = new Date(date);
        const today = new Date();
        const daysDiff = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        let weatherData;

        if (daysDiff >= 0 && daysDiff <= 5) {
          const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`
          );
          
          if (!forecastResponse.ok) throw new Error('Forecast fetch failed');
          
          const forecastData = await forecastResponse.json();
          
          const targetTimestamp = targetDate.setHours(12, 0, 0, 0);
          let closestForecast = forecastData.list[0];
          let minTimeDiff = Math.abs(new Date(closestForecast.dt * 1000).getTime() - targetTimestamp);
          
          for (const forecast of forecastData.list) {
            const forecastTime = new Date(forecast.dt * 1000).getTime();
            const timeDiff = Math.abs(forecastTime - targetTimestamp);
            if (timeDiff < minTimeDiff) {
              minTimeDiff = timeDiff;
              closestForecast = forecast;
            }
          }
          
          weatherData = closestForecast;
        } else {
          const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${apiKey}`
          );
          
          if (!currentResponse.ok) throw new Error('Weather fetch failed');
          
          weatherData = await currentResponse.json();
        }
        
        setWeather({
          temp: Math.round(weatherData.main.temp),
          tempMin: Math.round(weatherData.main.temp_min),
          tempMax: Math.round(weatherData.main.temp_max),
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
          main: weatherData.weather[0].main,
          humidity: weatherData.main.humidity,
          windSpeed: Math.round(weatherData.wind?.speed * 3.6) || 0,
          snowVolume: weatherData.snow?.['3h'] || weatherData.snow?.['1h'],
          feelsLike: Math.round(weatherData.main.feels_like)
        });
      } catch (err) {
        console.error('Weather fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location.lat, location.lon, date]);

  const getWeatherIcon = () => {
    if (loading || error || !weather) {
      return <Snowflake className="w-8 h-8" weight="duotone" />;
    }

    const main = weather.main.toLowerCase();
    if (main.includes('snow')) return <Snowflake className="w-8 h-8" weight="duotone" />;
    if (main.includes('rain')) return <CloudRain className="w-8 h-8" weight="duotone" />;
    if (main.includes('clear')) return <Sun className="w-8 h-8" weight="duotone" />;
    return <Cloud className="w-8 h-8" weight="duotone" />;
  };

  const getWeatherColor = () => {
    if (!weather) return 'from-secondary/40 to-secondary/20 border-secondary/50';
    
    const main = weather.main.toLowerCase();
    if (main.includes('snow')) return 'from-blue-100/80 to-blue-50/60 border-blue-200/70';
    if (main.includes('rain')) return 'from-slate-100/80 to-slate-50/60 border-slate-200/70';
    if (main.includes('clear')) return 'from-amber-100/80 to-amber-50/60 border-amber-200/70';
    return 'from-gray-100/80 to-gray-50/60 border-gray-200/70';
  };

  if (loading) {
    return (
      <div className="flex items-center gap-4 px-5 py-4 bg-secondary/30 rounded-xl animate-pulse">
        <div className="w-8 h-8 bg-secondary rounded-lg" />
        <div className="flex-1">
          <div className="h-5 bg-secondary rounded w-28 mb-2" />
          <div className="h-4 bg-secondary/60 rounded w-36" />
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="flex items-center gap-4 px-5 py-4 bg-secondary/30 rounded-xl text-secondary-foreground/70">
        <Snowflake className="w-8 h-8" weight="duotone" />
        <div>
          <div className="font-semibold text-base">天氣資訊暫時無法取得</div>
          <div className="text-sm opacity-70">{location.name}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br ${getWeatherColor()} rounded-xl border overflow-hidden`}>
      <div className="px-5 py-4">
        <div className="flex items-start gap-4">
          <div className="text-secondary-foreground flex-shrink-0 mt-1">
            {getWeatherIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-3xl text-secondary-foreground">
                {weather.temp}°C
              </span>
              <span className="text-sm text-secondary-foreground/60">
                體感 {weather.feelsLike}°C
              </span>
            </div>
            
            <div className="text-base text-secondary-foreground/90 capitalize font-medium mb-2">
              {weather.description}
            </div>
            
            <div className="flex items-center gap-4 text-xs text-secondary-foreground/70">
              <div className="flex items-center gap-1">
                <span>最高 {weather.tempMax}°C</span>
                <span>·</span>
                <span>最低 {weather.tempMin}°C</span>
              </div>
            </div>
          </div>

          <div className="text-right flex-shrink-0">
            <div className="text-sm font-semibold text-secondary-foreground/80 mb-1">
              {location.name}
            </div>
            <div className="space-y-1 text-xs text-secondary-foreground/60">
              {weather.windSpeed > 0 && (
                <div className="flex items-center justify-end gap-1">
                  <Wind className="w-3 h-3" weight="duotone" />
                  <span>{weather.windSpeed} km/h</span>
                </div>
              )}
              <div className="flex items-center justify-end gap-1">
                <Drop className="w-3 h-3" weight="duotone" />
                <span>{weather.humidity}%</span>
              </div>
              {weather.snowVolume && (
                <div className="flex items-center justify-end gap-1">
                  <Snowflake className="w-3 h-3" weight="duotone" />
                  <span>{weather.snowVolume}mm</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
