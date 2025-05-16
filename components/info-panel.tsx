"use client"

import { useSearchParams } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { getRegionData, regions } from "@/lib/sample-data"
import { Mountain, ArrowDown, ArrowUp, Globe, Ruler } from "lucide-react"

export default function InfoPanel() {
  const searchParams = useSearchParams()
  const regionId = searchParams.get("region") || "global"
  const subregionId = searchParams.get("subregion") || ""
  const regionData = getRegionData(regionId, subregionId)

  // Calculate flatness index (0-100, where 100 is completely flat)
  const flatnessIndex = 100 - ((regionData.maxElevation - regionData.minElevation) / 8848) * 100

  // Compare to global average
  const globalAvgElevation = regions.global.averageElevation
  const elevationDiff = regionData.averageElevation - globalAvgElevation

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-1">
        <h3 className="text-lg font-serif font-medium flex items-center gap-2">
          <Mountain className="h-4 w-4" />
          {regionData.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-none">{regionData.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-sm font-medium flex items-center gap-1">
            <Globe className="h-3 w-3 text-muted-foreground" />
            Average Elevation
          </div>
          <div className="text-xl font-bold">{regionData.averageElevation}m</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            {elevationDiff > 0 ? (
              <>
                <ArrowUp className="h-3 w-3 text-green-500" />
                {Math.abs(elevationDiff)}m above global avg
              </>
            ) : (
              <>
                <ArrowDown className="h-3 w-3 text-red-500" />
                {Math.abs(elevationDiff)}m below global avg
              </>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium flex items-center gap-1">
            <Ruler className="h-3 w-3 text-muted-foreground" />
            Elevation Range
          </div>
          <div className="text-xl font-bold">{regionData.maxElevation - regionData.minElevation}m</div>
          <div className="text-xs text-muted-foreground">
            {regionData.minElevation}m - {regionData.maxElevation}m
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">Flatness Index</div>
          <div className="text-sm font-medium">{flatnessIndex.toFixed(1)}%</div>
        </div>
        <Progress value={flatnessIndex} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Mountainous</span>
          <span>Flat</span>
        </div>
      </div>
    </div>
  )
}
