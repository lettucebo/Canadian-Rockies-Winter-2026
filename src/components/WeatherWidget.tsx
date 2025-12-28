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
        
        const cacheKey = `weather_${location.name}_${date}`;
        const cached = await window.spark.kv.get<WeatherData>(cacheKey);
        
        if (cached) {
          setWeather(cached);
          setLoading(false);
          return;
        }

        const prompt = window.spark.llmPrompt`Generate realistic weather data for ${location.name} in the Canadian Rockies region for the date ${date} (winter season, January 2026). 

This location is in a mountainous winter region with typical winter conditions including snow, cold temperatures, and variable weather.

Return the result as a valid JSON object with the following structure:
{
  "temp": (current temperature in Celsius, between -20 and -5),
  "tempMin": (minimum temperature, 2-5 degrees lower than temp),
  "tempMax": (maximum temperature, 2-5 degrees higher than temp),
  "description": (weather description like "light snow", "partly cloudy", "overcast clouds", "clear sky", "moderate snow"),
  "main": (main weather type: "Snow", "Clear", "Clouds", "Rain"),
  "humidity": (humidity percentage between 60-90),
  "windSpeed": (wind speed in km/h between 5-25),
  "snowVolume": (snow volume in mm if snowing, between 0.5-5, or null if not snowing),
  "feelsLike": (feels like temperature, 3-8 degrees lower than temp due to wind chill)
}

Make the weather realistic for Canadian Rockies winter conditions with appropriate temperature ranges and likely snow conditions.`;

        const response = await window.spark.llm(prompt, "gpt-4o-mini", true);
        const weatherData = JSON.parse(response);
        
        const weather: WeatherData = {
          temp: Math.round(weatherData.temp),
          tempMin: Math.round(weatherData.tempMin),
          tempMax: Math.round(weatherData.tempMax),
          description: weatherData.description,
          icon: weatherData.main.toLowerCase().includes('snow') ? '13d' : 
                weatherData.main.toLowerCase().includes('clear') ? '01d' :
                weatherData.main.toLowerCase().includes('rain') ? '10d' : '02d',
          main: weatherData.main,
          humidity: weatherData.humidity,
          windSpeed: weatherData.windSpeed,
          snowVolume: weatherData.snowVolume,
          feelsLike: Math.round(weatherData.feelsLike)
        };
        
        await window.spark.kv.set(cacheKey, weather);
        setWeather(weather);
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
