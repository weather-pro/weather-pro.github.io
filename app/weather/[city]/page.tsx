"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Hourly {
  time: string;
  tempC: string;
  tempF: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
  humidity: string;
  windspeedKmph: string;
  windspeedMiles: string;
  chanceofrain: string;
  pressure: string;
  weatherDesc: { value: string }[];
  weatherIconUrl: { value: string }[];
}

interface Daily {
  date: string;
  mintempC: string;
  maxtempC: string;
  mintempF: string;
  maxtempF: string;
  avgtempC: string;
  avgtempF: string;
  hourly: Hourly[];
}

interface WeatherData {
  current_condition: {
    temp_C: string;
    temp_F: string;
    FeelsLikeC: string;
    FeelsLikeF: string;
    humidity: string;
    windspeedKmph: string;
    windspeedMiles: string;
    pressure: string;
    weatherDesc: { value: string }[];
    weatherIconUrl: { value: string }[];
  }[];
  weather: Daily[];
}

export default function CityPage() {
  const params = useParams();
  const rawCity = params.city as string;
  const city = decodeURIComponent(rawCity);

  const [data, setData] = useState<WeatherData | null>(null);
  const [unit, setUnit] = useState<"C" | "F">("C");

  useEffect(() => {
    if (!city) return;

    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [city]);

  if (!data)
    return (
      <main
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 12 }}>🌤️</div>
        <p style={{ fontSize: 18, color: "#555" }}>Fetching weather data...</p>
      </main>
    );

  const current = data.current_condition[0];
  const today = data.weather[0];
  const temp = unit === "C" ? current.temp_C : current.temp_F;
  const feels = unit === "C" ? current.FeelsLikeC : current.FeelsLikeF;
  const wind = current.windspeedKmph + " km/h";

  return (
    <main style={{ padding: 40, maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 32 }}>📍 {city.toUpperCase()}</h1>

        {/* Unit Switch */}
        <div>
          <button
            onClick={() => setUnit("C")}
            style={{
              padding: "6px 12px",
              marginRight: 6,
              background: unit === "C" ? "#000" : "#ddd",
              color: unit === "C" ? "#fff" : "#000",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            ℃
          </button>
          <button
            onClick={() => setUnit("F")}
            style={{
              padding: "6px 12px",
              background: unit === "F" ? "#000" : "#ddd",
              color: unit === "F" ? "#fff" : "#000",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
            }}
          >
            ℉
          </button>
        </div>
      </div>

      {/* Current */}
      <section
        style={{
          marginTop: 20,
          padding: 20,
          borderRadius: 16,
          boxShadow: "0 4px 10px var(--box-shadow)",
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* <img src={current.weatherIconUrl[0]?.value} alt="icon" width={80} /> */}
        <div>
          <h2 style={{ fontSize: 48 }} title="Average Temperature">
            {temp}°{unit}
          </h2>
          <p style={{ fontSize: 15, fontWeight: 700 }}>
            Description: {current.weatherDesc[0]?.value}
          </p>
          <p style={{ fontSize: 15, fontWeight: 700 }}>
            Feels Like: {feels}°{unit}
          </p>
          <p style={{ fontSize: 15, fontWeight: 700 }}>
            Humidity: {current.humidity}%
          </p>
          <p style={{ fontSize: 15, fontWeight: 700 }}>Wind: {wind}</p>
          <p style={{ fontSize: 15, fontWeight: 700 }}>
            Pressure: {current.pressure} hPa
          </p>
        </div>
      </section>

      {/* Hourly Forecast */}
      <section style={{ marginTop: 40 }}>
        <h2>⏰ Hourly Forecast</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: 12,
            marginTop: 16,
          }}
        >
          {today.hourly.map((hour, i) => {
            const hourTemp = unit === "C" ? hour.tempC : hour.tempF;
            const hourFeels = unit === "C" ? hour.FeelsLikeC : hour.FeelsLikeF;
            const hourWind =
              unit === "C"
                ? hour.windspeedKmph + " km/h"
                : hour.windspeedMiles + " mph";

            return (
              <div
                key={i}
                style={{
                  padding: 12,
                  borderRadius: 12,
                  boxShadow: "0 4px 10px var(--box-shadow)",
                  border: "var(--border)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 600 }}>
                  {hour.time.padStart(4, "0").slice(0, 2)}:00
                </p>
                {/* <img src={hour.weatherIconUrl[0]?.value} alt="icon" width={40} /> */}
                <p style={{ fontSize: 18 }}>
                  {hourTemp}°{unit}
                </p>
                <p style={{ fontSize: 12 }}>Feels: {hourFeels}°</p>
                <p style={{ fontSize: 12 }}>💧 {hour.humidity}%</p>
                <p style={{ fontSize: 12 }}>🌬 {hourWind}</p>
                <p style={{ fontSize: 12 }}>🌧 {hour.chanceofrain}%</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Daily Forecast */}
      <section style={{ marginTop: 50 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>📅 Next Days</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {data.weather.map((day, index) => {
            if (new Date(day.date) === new Date()) return;
            const min = unit === "C" ? day.mintempC : day.mintempF;
            const max = unit === "C" ? day.maxtempC : day.maxtempF;
            const avg = unit === "C" ? day.avgtempC : day.avgtempF;

            const icon = day.hourly[0].weatherIconUrl[0]?.value;
            const desc = day.hourly[0].weatherDesc[0].value;

            return (
              <div
                key={day.date}
                style={{
                  padding: "18px 16px",
                  borderRadius: 18,
                  boxShadow: "0 8px 20px var(--box-shadow)",
                  border: "var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px var(--box-shadow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px var(--box-shadow)";
                }}
              >
                {/* Date */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontWeight: 600 }}>
                    {index === 0 ? "Today" : day.date}
                  </p>
                </div>

                {/* Icon + Avg Temp */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 12,
                    marginBottom: 12,
                    gap: 12,
                  }}
                >
                  {/* <img src={icon} alt="icon" width={48} height={48} /> */}
                  <div>
                    <p style={{ fontSize: 28, fontWeight: 700 }}>
                      Average {avg}°{unit}
                    </p>
                    <span style={{ fontSize: 20, color: "#666" }}>{desc}</span>
                  </div>
                </div>

                {/* Min / Max Bar */}
                <div>
                  <div
                    style={{
                      height: 6,
                      borderRadius: 4,
                      overflow: "hidden",
                      marginBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, #4facfe, #f093fb)",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    <span>⬇ {min}°</span>
                    <span>⬆ {max}°</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
