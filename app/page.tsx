"use client"

import { useState } from "react"
import { Search, MapPin, Wind, Droplets, Eye, Gauge, Cloud, Sun, CloudRain, CloudSnow, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type WeatherData = {
  location: string
  current: {
    temp_F: number
    temp_C: number
    weatherDesc: string
    windspeedMiles: number
    humidity: number
    visibility: number
    pressure: number
  }
  forecast: Array<{
    date: string
    maxtempF: number
    maxtempC: number
    mintempF: number
    mintempC: number
    weatherDesc: string
  }>
}

export default function WeatherPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [unit, setUnit] = useState<"F" | "C">("C")
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const getTemp = (tempC: number, tempF: number) => {
    return unit === "C" ? Math.round(tempC) : Math.round(tempF)
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://wttr.in/${encodeURIComponent(searchQuery)}?format=j1`)
      if (!response.ok) throw new Error("Location not found")

      const data = await response.json()

      // Parse the wttr.in response
      const parsed: WeatherData = {
        location: data.nearest_area?.[0]?.areaName?.[0]?.value || searchQuery,
        current: {
          temp_F: Number.parseInt(data.current_condition[0].temp_F),
          temp_C: Number.parseInt(data.current_condition[0].temp_C),
          weatherDesc: data.current_condition[0].weatherDesc[0].value,
          windspeedMiles: Number.parseInt(data.current_condition[0].windspeedMiles),
          humidity: Number.parseInt(data.current_condition[0].humidity),
          visibility: Number.parseInt(data.current_condition[0].visibility),
          pressure: Number.parseFloat(data.current_condition[0].pressure),
        },
        forecast: data.weather.slice(0, 7).map((day: any) => ({
          date: day.date,
          maxtempF: Number.parseInt(day.maxtempF),
          maxtempC: Number.parseInt(day.maxtempC),
          mintempF: Number.parseInt(day.mintempF),
          mintempC: Number.parseInt(day.mintempC),
          weatherDesc: day.hourly[4]?.weatherDesc[0]?.value || "Partly Cloudy",
        })),
      }

      setWeatherData(parsed)
    } catch (err) {
      setError("Unable to fetch weather data. Please try another location.")
      setWeatherData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const getWeatherIcon = (desc: string) => {
    const lowerDesc = desc.toLowerCase()
    if (lowerDesc.includes("sun") || lowerDesc.includes("clear")) return Sun
    if (lowerDesc.includes("rain") || lowerDesc.includes("drizzle")) return CloudRain
    if (lowerDesc.includes("snow")) return CloudSnow
    if (lowerDesc.includes("cloud") || lowerDesc.includes("overcast")) return Cloud
    return Sun
  }

  const getDayOfWeek = (dateStr: string, index: number) => {
    if (index === 0) return "Today"
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative bg-primary text-primary-foreground py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <img src="/sky-background.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Weather Forecast</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Your trusted source for accurate weather information
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Enter city or zip code"
                className="pl-10 h-12 bg-card text-foreground border-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button
              size="lg"
              className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </section>

      {error && (
        <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
          <Card className="overflow-hidden border-destructive">
            <CardContent className="p-8">
              <p className="text-center text-destructive">{error}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {isLoading && (
        <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
          <Card className="overflow-hidden">
            <CardContent className="p-16">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <Sun className="h-16 w-16 text-primary animate-spin" />
                  <Cloud className="h-10 w-10 text-primary/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <p className="text-lg text-muted-foreground">Fetching weather data...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && weatherData && (
        <>
          {/* Current Weather */}
          <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-end mb-4">
                  <div className="inline-flex rounded-lg border border-border bg-muted p-1">
                    <button
                      onClick={() => setUnit("F")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        unit === "F"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      °F
                    </button>
                    <button
                      onClick={() => setUnit("C")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        unit === "C"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      °C
                    </button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="p-6 bg-primary/10 rounded-full">
                      {(() => {
                        const Icon = getWeatherIcon(weatherData.current.weatherDesc)
                        return <Icon className="h-24 w-24 text-primary" />
                      })()}
                    </div>
                    <div>
                      <h2 className="text-5xl font-bold mb-2">
                        {getTemp(weatherData.current.temp_C, weatherData.current.temp_F)}°{unit}
                      </h2>
                      <p className="text-xl text-muted-foreground mb-1">{weatherData.current.weatherDesc}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{weatherData.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-3xl font-semibold">
                        {getTemp(weatherData.forecast[0].maxtempC, weatherData.forecast[0].maxtempF)}°
                      </p>
                      <p className="text-sm text-muted-foreground">High</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-semibold">
                        {getTemp(weatherData.forecast[0].mintempC, weatherData.forecast[0].mintempF)}°
                      </p>
                      <p className="text-sm text-muted-foreground">Low</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Weather Details Grid */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <h3 className="text-2xl font-semibold mb-6">Weather Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Wind className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Wind Speed</p>
                      <p className="text-2xl font-semibold">{weatherData.current.windspeedMiles} mph</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Droplets className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="text-2xl font-semibold">{weatherData.current.humidity}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Visibility</p>
                      <p className="text-2xl font-semibold">{weatherData.current.visibility} mi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Gauge className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pressure</p>
                      <p className="text-2xl font-semibold">{(weatherData.current.pressure / 33.864).toFixed(2)} in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 7-Day Forecast */}
          <section className="max-w-7xl mx-auto px-4 pb-12">
            <h3 className="text-2xl font-semibold mb-6">7-Day Forecast</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {weatherData.forecast.map((day, index) => {
                const Icon = getWeatherIcon(day.weatherDesc)
                return (
                  <Card key={day.date} className="text-center">
                    <CardContent className="p-6">
                      <p className="font-semibold mb-4">{getDayOfWeek(day.date, index)}</p>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold">{getTemp(day.maxtempC, day.maxtempF)}°</p>
                        <p className="text-sm text-muted-foreground">{getTemp(day.mintempC, day.mintempF)}°</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">© 2026 Weather Forecast. Data updated every 15 minutes.</p>
        </div>
      </footer>
    </div>
  )
}
