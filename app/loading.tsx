import { Sun } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
            <Sun className="h-32 w-32 text-primary opacity-50" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Loading Weather Data</h2>

          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
