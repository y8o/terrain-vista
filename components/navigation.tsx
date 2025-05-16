"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { regions } from "@/lib/sample-data"

interface NavigationProps {
  isMobile?: boolean
}

export default function Navigation({ isMobile = false }: NavigationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentRegionId = searchParams.get("region") || "global"
  const currentSubregionId = searchParams.get("subregion") || ""

  const handleRegionChange = (value: string) => {
    // Clear subregion when changing region
    router.push(`?region=${value}`)
  }

  const handleSubregionChange = (value: string) => {
    if (value === "all") {
      router.push(`?region=${currentRegionId}`)
    } else {
      router.push(`?region=${currentRegionId}&subregion=${value}`)
    }
  }

  // Get current region data
  const currentRegion = regions[currentRegionId]

  // Check if the current region has subregions
  const hasSubregions = currentRegion && currentRegion.subregions && Object.keys(currentRegion.subregions).length > 0

  return (
    <div className={`flex ${isMobile ? "flex-col gap-4" : "items-center gap-2"}`}>
      <Select value={currentRegionId} onValueChange={handleRegionChange}>
        <SelectTrigger className={isMobile ? "w-full" : "w-[150px]"}>
          <SelectValue placeholder="Select region" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="global">Global Overview</SelectItem>
          <SelectItem value="netherlands">Netherlands</SelectItem>
          <SelectItem value="nepal">Nepal</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
        </SelectContent>
      </Select>

      {hasSubregions && (
        <Select value={currentSubregionId} onValueChange={handleSubregionChange}>
          <SelectTrigger className={isMobile ? "w-full" : "w-[150px]"}>
            <SelectValue placeholder={`Select ${currentRegion.subregionLabel || "subregion"}`} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All {currentRegion.name}</SelectItem>
            {Object.entries(currentRegion.subregions).map(([id, subregion]) => (
              <SelectItem key={id} value={id}>
                {subregion.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )
}
