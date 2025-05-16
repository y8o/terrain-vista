import { Suspense } from "react"
import TerrainViewer from "@/components/terrain-viewer"
import InfoPanel from "@/components/info-panel"
import Navigation from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Simplified Header - Absolute positioned over the 3D view */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-background/70 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mr-8">TerrainVista</h1>

            <div className="flex-1">
              <Navigation />
            </div>

            <div className="flex items-center gap-2">
              <Link href="/guide" className="text-sm text-primary hover:underline mr-2">
                Guide
              </Link>
              <ThemeToggle />

              {/* Mobile Navigation Menu - Only shown on very small screens */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="py-4">
                    <h2 className="text-lg font-medium mb-4">Navigation</h2>
                    <Navigation isMobile={true} />
                    <div className="mt-4">
                      <Link href="/guide" className="text-primary hover:underline">
                        View Usage Guide
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Terrain Viewer */}
      <div className="h-screen w-full">
        <Suspense fallback={<div className="h-full flex items-center justify-center">Loading terrain...</div>}>
          <TerrainViewer />
        </Suspense>
      </div>

      {/* Info Panel - Fixed at the bottom with padding to avoid overlapping controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto p-4 pb-20 md:pb-4">
          <InfoPanel />
        </div>
      </div>
    </main>
  )
}
