"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!city.trim()) return;
    router.push(`/weather/${encodeURIComponent(city.trim())}`);
  };

  return (
    <main
      style={{
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          padding: "48px 44px",
          borderRadius: 24,
          boxShadow: "0 18px 50px var(--box-shadow)",
          border: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <div style={{ fontSize: 52, marginBottom: 10 }}>🌤️</div>
        <h1
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          WeatherPro
        </h1>
        <p
          style={{
            color: "#666",
            fontSize: 15,
            marginBottom: 36,
          }}
        >
          Search real-time weather and hourly forecasts for any city
        </p>

        {/* Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffffff",
            borderRadius: 14,
            padding: "6px 10px",
            boxShadow: "inset 0 0 0 1px #e5e7eb",
            marginBottom: 18,
          }}
        >
          <span style={{ fontSize: 18, marginRight: 8 }}>📍</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name (e.g. Tokyo, 北京, New York)"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 16,
              padding: "10px 6px",
              background: "transparent",
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSearch}
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 14,
            background: "linear-gradient(90deg, #111827, #374151)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow =
              "0 10px 24px rgba(0,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(0,0,0,0.25)";
          }}
        >
          🔍 Search Weather
        </button>

        {/* Examples */}
        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {["Tokyo", "London", "New York", "北京"].map((c) => (
            <button
              key={c}
              onClick={() => router.push(`/weather/${encodeURIComponent(c)}`)}
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                background: "#eef2f7",
                border: "none",
                fontSize: 14,
                cursor: "pointer",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e5eaf2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#eef2f7";
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
