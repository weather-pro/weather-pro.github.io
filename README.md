# Weather Pro

A modern, responsive weather forecast application built with Next.js 16, TypeScript, and Tailwind CSS. Get real-time weather updates and detailed forecasts for any location worldwide.

## Features

- 🌤️ Current Weather Conditions
- 📅 Next Day Weather Forecast
- ⏰ Hourly Weather Details
- 🌡️ Temperature in Celsius/Fahrenheit
- 💨 Wind Speed and Humidity
- 📍 Location-based Weather Search
- 📱 Responsive Design
- 🎨 Beautiful Weather Icons

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **API**: wttr.in Weather Service

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git https://github.com/weather-pro/weather-pro.github.io.git
cd weather-pro.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```
weather-pro/
├── app/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── card.tsx        # Weather card component
│   │   │   ├── icons.tsx       # Weather icon mappings
│   │   │   └── ......
│   │   └── theme-provider.tsx
│   ├── privacy/    
│   │   └── page.tsx            # Privacy policy page
│   ├── terms/    
│   │   └── page.tsx            # Terms page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── loading.tsx             # loading
│   └── page.tsx                # Main page
├── public/
│   └── sky-background.png # Background image
└── README.md
```

## API Usage

The application uses the wttr.in API for weather data. You can access weather information through the following endpoint:

```
https://wttr.in/${cityName}?format=j1
```

Example:

```
https://wttr.in/London?format=j1
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.