"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "6px 12px",
        borderRadius: 999,
        background: "var(--card-bg)",
        color: "var(--text-main)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        fontSize: 14,
      }}
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
