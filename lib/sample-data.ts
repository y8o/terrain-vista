export type RegionData = {
  id: string
  name: string
  averageElevation: number
  minElevation: number
  maxElevation: number
  description: string
  subregionLabel?: string
  subregions?: Record<string, RegionData>
}

export const regions: Record<string, RegionData> = {
  global: {
    id: "global",
    name: "Global Overview",
    averageElevation: 840,
    minElevation: -418,
    maxElevation: 8848,
    description:
      "Earth's terrain varies dramatically across continents, from the deepest ocean trenches to the highest mountain peaks. The average land elevation is approximately 840 meters above sea level.",
  },
  netherlands: {
    id: "netherlands",
    name: "The Netherlands",
    averageElevation: 30,
    minElevation: -7,
    maxElevation: 322,
    description:
      "The Netherlands is one of the flattest countries in the world, with about a quarter of its land below sea level. The highest point, Vaalserberg, is only 322 meters above sea level, while extensive areas are protected by dikes and polders.",
  },
  nepal: {
    id: "nepal",
    name: "Nepal",
    averageElevation: 3265,
    minElevation: 59,
    maxElevation: 8848,
    description:
      "Nepal contains 8 of the world's 10 highest peaks, including Mount Everest at 8,848 meters. The terrain rises dramatically from the Terai plains in the south to the Himalayan mountains in the north, creating one of the most diverse elevation profiles on Earth.",
  },
  usa: {
    id: "usa",
    name: "United States",
    averageElevation: 760,
    minElevation: -86,
    maxElevation: 6190,
    description:
      "The United States features diverse terrain, from the coastal plains of the East and Gulf Coasts to the Rocky Mountains in the west. The country includes vast plains, major mountain ranges, and significant river valleys.",
    subregionLabel: "state",
    subregions: {
      colorado: {
        id: "colorado",
        name: "Colorado",
        averageElevation: 2073,
        minElevation: 1010,
        maxElevation: 4401,
        description:
          "Colorado has the highest mean elevation of any U.S. state, with more than 50 peaks over 14,000 feet (4,267 meters). The eastern plains contrast dramatically with the Rocky Mountains that run through the center of the state, creating diverse ecosystems.",
      },
      california: {
        id: "california",
        name: "California",
        averageElevation: 880,
        minElevation: -86,
        maxElevation: 4421,
        description:
          "California's terrain is extremely varied, featuring the Sierra Nevada mountains, the Central Valley, coastal ranges, and the Mojave Desert. Mount Whitney, the highest point in the contiguous United States, contrasts with Death Valley, the lowest point in North America.",
      },
      florida: {
        id: "florida",
        name: "Florida",
        averageElevation: 30,
        minElevation: 0,
        maxElevation: 105,
        description:
          "Florida is one of the flattest states in the U.S., with an average elevation of just 30 meters. The highest point, Britton Hill, reaches only 105 meters above sea level, making it the lowest highpoint of any U.S. state.",
      },
    },
  },
  australia: {
    id: "australia",
    name: "Australia",
    averageElevation: 330,
    minElevation: -15,
    maxElevation: 2228,
    description:
      "Australia is the flattest continent, with an average elevation of just 330 meters. The Great Dividing Range runs along the eastern coast, while much of the interior consists of vast plains and plateaus.",
    subregionLabel: "state/territory",
    subregions: {
      "western-australia": {
        id: "western-australia",
        name: "Western Australia",
        averageElevation: 340,
        minElevation: 0,
        maxElevation: 1249,
        description:
          "Western Australia is characterized by vast plateaus and plains, with most of the terrain being relatively flat. The highest point, Mount Meharry, reaches only 1,249 meters, while much of the region consists of arid or semi-arid landscapes.",
      },
      victoria: {
        id: "victoria",
        name: "Victoria",
        averageElevation: 380,
        minElevation: 0,
        maxElevation: 1986,
        description:
          "Victoria features diverse terrain, from coastal plains to the Great Dividing Range. The Victorian Alps in the northeast contain the state's highest peaks, while the western regions are characterized by plains and low hills.",
      },
      tasmania: {
        id: "tasmania",
        name: "Tasmania",
        averageElevation: 440,
        minElevation: 0,
        maxElevation: 1617,
        description:
          "Tasmania is Australia's most mountainous state, with rugged terrain throughout much of the island. The Central Highlands and western wilderness areas feature numerous peaks and plateaus, creating a dramatic landscape.",
      },
    },
  },
}

// Helper function to get region data based on region and subregion IDs
export function getRegionData(regionId: string, subregionId?: string): RegionData {
  const region = regions[regionId] || regions.global

  if (subregionId && region.subregions && region.subregions[subregionId]) {
    return region.subregions[subregionId]
  }

  return region
}
