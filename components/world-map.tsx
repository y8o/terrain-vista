"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { regions } from "@/lib/sample-data"

export default function WorldMap() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentRegion = searchParams.get("region") || "global"
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const handleRegionClick = (regionId: string) => {
    router.push(`?region=${regionId}`)
  }

  return (
    <div className="relative h-full w-full bg-[#e8f4f8] dark:bg-[#0c2a38] overflow-hidden">
      <div className="absolute top-4 left-4 z-10 p-3 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
        <h3 className="font-medium text-sm">Interactive World Map</h3>
        <p className="text-xs text-muted-foreground">Hover over regions to see basic info, click to select</p>
      </div>

      {hoveredRegion && (
        <div className="absolute top-4 right-4 z-10 p-3 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm max-w-[200px]">
          <h3 className="font-medium">{regions[hoveredRegion]?.name}</h3>
          <p className="text-xs text-muted-foreground">Avg. Elevation: {regions[hoveredRegion]?.averageElevation}m</p>
          <p className="text-xs text-muted-foreground">
            Range: {regions[hoveredRegion]?.minElevation}m - {regions[hoveredRegion]?.maxElevation}m
          </p>
        </div>
      )}

      <svg
        viewBox="0 0 1000 500"
        className="h-full w-full"
        style={{ filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.1))" }}
      >
        {/* Simplified world map with clickable regions */}
        {/* Europe */}
        <path
          d="M500 200 L550 180 L580 190 L600 210 L590 230 L560 240 L530 230 L510 220 Z"
          fill={currentRegion === "netherlands" ? "#3b82f6" : hoveredRegion === "netherlands" ? "#93c5fd" : "#d1d5db"}
          stroke="#64748b"
          strokeWidth="1"
          onMouseEnter={() => setHoveredRegion("netherlands")}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick("netherlands")}
          className="cursor-pointer transition-colors duration-200"
        />

        {/* Asia */}
        <path
          d="M650 220 L700 200 L730 210 L740 240 L720 260 L690 250 L670 230 Z"
          fill={currentRegion === "nepal" ? "#3b82f6" : hoveredRegion === "nepal" ? "#93c5fd" : "#d1d5db"}
          stroke="#64748b"
          strokeWidth="1"
          onMouseEnter={() => setHoveredRegion("nepal")}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick("nepal")}
          className="cursor-pointer transition-colors duration-200"
        />

        {/* North America */}
        <path
          d="M300 210 L350 190 L380 200 L390 230 L370 250 L340 240 L320 220 Z"
          fill={currentRegion === "colorado" ? "#3b82f6" : hoveredRegion === "colorado" ? "#93c5fd" : "#d1d5db"}
          stroke="#64748b"
          strokeWidth="1"
          onMouseEnter={() => setHoveredRegion("colorado")}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick("colorado")}
          className="cursor-pointer transition-colors duration-200"
        />

        {/* Australia */}
        <path
          d="M750 350 L800 330 L830 340 L840 370 L820 390 L790 380 L770 360 Z"
          fill={
            currentRegion === "western-australia"
              ? "#3b82f6"
              : hoveredRegion === "western-australia"
                ? "#93c5fd"
                : "#d1d5db"
          }
          stroke="#64748b"
          strokeWidth="1"
          onMouseEnter={() => setHoveredRegion("western-australia")}
          onMouseLeave={() => setHoveredRegion(null)}
          onClick={() => handleRegionClick("western-australia")}
          className="cursor-pointer transition-colors duration-200"
        />

        {/* Oceans */}
        <rect x="0" y="0" width="1000" height="500" fill="none" stroke="#64748b" strokeWidth="1" />
      </svg>
    </div>
  )
}
