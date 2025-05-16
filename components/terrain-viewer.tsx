"use client"

import { useRef, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Environment } from "@react-three/drei"
import * as THREE from "three"
import { getRegionData } from "@/lib/sample-data"
import { Button } from "@/components/ui/button"
import { Layers, Palette } from "lucide-react"

function Terrain({ regionId, subregionId, exaggeration, textured }) {
  const mesh = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  // Get region data based on region and subregion
  const regionData = getRegionData(regionId, subregionId)

  // Generate heightmap based on region data
  const generateHeightmap = () => {
    const size = 128
    const data = new Float32Array(size * size)

    // Different terrain patterns based on region
    if (regionData.id === "netherlands") {
      // Very flat with slight variations
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.05) * Math.sin(j * 0.05) * 0.1 + Math.random() * 0.05
        }
      }
    } else if (regionData.id === "nepal") {
      // Very mountainous
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.1) * Math.cos(j * 0.1) * 2 + Math.random() * 0.5
        }
      }
    } else if (regionData.id === "colorado") {
      // Mix of mountains and plains
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          const distance = Math.sqrt(Math.pow(i - size / 2, 2) + Math.pow(j - size / 2, 2)) / (size / 2)
          data[index] = (1 - distance) * Math.sin(i * 0.1) * Math.cos(j * 0.1) * 1.5 + Math.random() * 0.2
        }
      }
    } else if (regionData.id === "western-australia") {
      // Mostly flat with some features
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.02) * Math.sin(j * 0.02) * 0.3 + Math.random() * 0.1
        }
      }
    } else if (regionData.id === "california") {
      // Varied terrain with mountains and valleys
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.08) * Math.cos(j * 0.08) * 1.8 + Math.random() * 0.3
        }
      }
    } else if (regionData.id === "florida") {
      // Very flat with slight variations
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.03) * Math.sin(j * 0.03) * 0.05 + Math.random() * 0.02
        }
      }
    } else {
      // Default global view - varied
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const index = i * size + j
          data[index] = Math.sin(i * 0.07) * Math.cos(j * 0.07) * 0.5 + Math.random() * 0.15
        }
      }
    }

    return data
  }

  const heightData = generateHeightmap()

  // Create geometry
  useEffect(() => {
    if (!mesh.current) return

    const geometry = mesh.current.geometry as THREE.PlaneGeometry
    const size = Math.sqrt(heightData.length)

    // Apply height data to vertices
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const x = i % (size + 1)
      const y = Math.floor(i / (size + 1))

      if (x < size && y < size) {
        const height = heightData[y * size + x] * exaggeration
        geometry.attributes.position.setZ(i, height)
      }
    }

    geometry.computeVertexNormals()
    geometry.attributes.position.needsUpdate = true
  }, [heightData, exaggeration])

  // Slow rotation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 127, 127]} />
      {textured ? (
        <meshStandardMaterial
          map={new THREE.TextureLoader().load("/placeholder.svg?height=512&width=512")}
          displacementMap={
            new THREE.DataTexture(
              heightData,
              Math.sqrt(heightData.length),
              Math.sqrt(heightData.length),
              THREE.RedFormat,
              THREE.FloatType,
            )
          }
          displacementScale={exaggeration}
          side={THREE.DoubleSide}
        />
      ) : (
        <meshStandardMaterial
          vertexColors
          wireframe={false}
          side={THREE.DoubleSide}
          color={
            regionData.id === "netherlands"
              ? "#4ade80"
              : regionData.id === "nepal"
                ? "#a1a1aa"
                : regionData.id === "colorado"
                  ? "#fbbf24"
                  : regionData.id === "western-australia"
                    ? "#f97316"
                    : regionData.id === "california"
                      ? "#ec4899"
                      : regionData.id === "florida"
                        ? "#22d3ee"
                        : "#60a5fa"
          }
        />
      )}
    </mesh>
  )
}

function ElevationScale({ regionId, subregionId, exaggeration }) {
  const regionData = getRegionData(regionId, subregionId)

  return (
    <group position={[4.5, -4, 0]}>
      <Text position={[0, 0.5, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
        Elevation Scale
      </Text>

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 2, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <Text position={[0.3, 1, 0]} fontSize={0.15} color="#ffffff" anchorX="left" anchorY="middle">
        {regionData.maxElevation}m
      </Text>

      <Text position={[0.3, -1, 0]} fontSize={0.15} color="#ffffff" anchorX="left" anchorY="middle">
        {regionData.minElevation}m
      </Text>
    </group>
  )
}

export default function TerrainViewer() {
  const searchParams = useSearchParams()
  const regionId = searchParams.get("region") || "global"
  const subregionId = searchParams.get("subregion") || ""
  const [exaggeration, setExaggeration] = useState(1)
  const [textured, setTextured] = useState(false)

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-16 left-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
        <div className="text-xs text-muted-foreground">Drag to rotate, scroll to zoom</div>
      </div>

      {/* Moved controls to the side to avoid overlap with info panel */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 flex flex-col gap-2">
        <div className="p-2 bg-background/80 backdrop-blur-sm rounded-lg border shadow-sm">
          <h3 className="text-xs font-medium mb-1">Elevation: {exaggeration.toFixed(1)}x</h3>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={exaggeration}
            onChange={(e) => setExaggeration(Number.parseFloat(e.target.value))}
            className="w-24 md:w-32"
          />
        </div>
      </div>

      <div className="absolute top-16 right-4 z-10 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm"
          onClick={() => setTextured(!textured)}
        >
          {textured ? <Layers className="h-4 w-4 mr-1" /> : <Palette className="h-4 w-4 mr-1" />}
          {textured ? "Elevation" : "Textured"}
        </Button>
      </div>

      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Terrain regionId={regionId} subregionId={subregionId} exaggeration={exaggeration} textured={textured} />
        <ElevationScale regionId={regionId} subregionId={subregionId} exaggeration={exaggeration} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
