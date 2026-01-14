import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {/* Navbar */}
        <header
          style={{
            height: 64,
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderBottom: "1px solid var(--border)",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: 20,
              fontWeight: 700,
              textDecoration: "none",
              color: "var(--color-text)",
            }}
          >
            🌤️ WeatherPro
          </Link>
          <ThemeToggle />
        </header>

        {/* main */}
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1 }}>{children}</div>

          {/* Footer */}
          <footer
            style={{
              padding: "20px 16px",
              textAlign: "center",
              fontSize: 13,
              color: "#6b7280",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{ marginBottom: 6 }}>🌤️ WeatherPro</div>
            <div>
              © {new Date().getFullYear()} WeatherPro. All rights reserved.
            </div>
            <div style={{ marginTop: 6, fontSize: 12 }}>
              <a
                href="/terms"
                style={{
                  margin: "0 8px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  textUnderlinePosition: "under",
                }}
              >
                Terms of Use
              </a>
              |
              <a
                href="/privacy"
                style={{
                  margin: "0 8px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  textUnderlinePosition: "under",
                }}
              >
                Privacy Policy
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
