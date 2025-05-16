import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileDown, Globe, Database, FileUp } from "lucide-react"

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto p-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Map
            </Button>
          </Link>
          <h1 className="text-3xl font-serif font-bold">TerrainVista Guide</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileDown className="h-5 w-5" />
                Finding Elevation Data
              </CardTitle>
              <CardDescription>Where to find compatible elevation data files</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TerrainVista can work with several types of elevation data. Here are the main sources where you can find
                compatible files:
              </p>

              <div className="space-y-2">
                <h3 className="font-medium">1. USGS Earth Explorer</h3>
                <p className="text-sm text-muted-foreground">
                  The U.S. Geological Survey provides high-quality elevation data for the entire world.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    Visit{" "}
                    <a
                      href="https://earthexplorer.usgs.gov/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      USGS Earth Explorer
                    </a>
                  </li>
                  <li>Create a free account</li>
                  <li>Search for your area of interest</li>
                  <li>Look for Digital Elevation Model (DEM) data</li>
                  <li>Download in GeoTIFF format</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">2. OpenTopography</h3>
                <p className="text-sm text-muted-foreground">
                  A community repository with high-resolution topography data.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    Visit{" "}
                    <a
                      href="https://opentopography.org/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OpenTopography
                    </a>
                  </li>
                  <li>Use the "Find Data" tool to locate your region</li>
                  <li>Download data in GeoTIFF or ASCII format</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">3. NASA Earthdata</h3>
                <p className="text-sm text-muted-foreground">
                  NASA provides global elevation data through various missions.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    Visit{" "}
                    <a
                      href="https://earthdata.nasa.gov/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NASA Earthdata
                    </a>
                  </li>
                  <li>Search for SRTM (Shuttle Radar Topography Mission) data</li>
                  <li>Download in HGT or GeoTIFF format</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Compatible File Formats
              </CardTitle>
              <CardDescription>File types that work with TerrainVista</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>TerrainVista supports several common elevation data formats. Here are the file types you can use:</p>

              <div className="space-y-2">
                <h3 className="font-medium">1. GeoTIFF (.tif, .tiff)</h3>
                <p className="text-sm text-muted-foreground">
                  The most common format for elevation data. GeoTIFF files contain both the elevation values and
                  geographic coordinates.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Widely supported by GIS software</li>
                  <li>Contains embedded geographic metadata</li>
                  <li>Can be directly imported into TerrainVista</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">2. SRTM HGT Files (.hgt)</h3>
                <p className="text-sm text-muted-foreground">
                  Raw elevation data from NASA's Shuttle Radar Topography Mission.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Simple binary format</li>
                  <li>Each file covers a 1°×1° area</li>
                  <li>Naming convention: N27E086.hgt (latitude/longitude)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">3. ASCII Grid (.asc, .txt)</h3>
                <p className="text-sm text-muted-foreground">Simple text-based format for elevation data.</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Human-readable header with metadata</li>
                  <li>Grid of elevation values</li>
                  <li>Easy to edit manually if needed</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">4. Heightmap Images (.png, .jpg)</h3>
                <p className="text-sm text-muted-foreground">
                  Grayscale images where pixel brightness represents elevation.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>White = highest elevation, Black = lowest elevation</li>
                  <li>Simple to create and edit with image editors</li>
                  <li>Less precise than dedicated elevation formats</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileUp className="h-5 w-5" />
              Preparing and Using Elevation Data
            </CardTitle>
            <CardDescription>How to prepare and import elevation data into TerrainVista</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Step 1: Download the Data</h3>
              <p className="text-sm text-muted-foreground">
                Download elevation data for your region of interest from one of the sources mentioned above.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 2: Process the Data (if needed)</h3>
              <p className="text-sm text-muted-foreground">
                Some data may need processing before use. Here are common tools:
              </p>
              <ul className="list-disc pl-5 text-sm">
                <li>
                  <strong>QGIS</strong> (Free and open-source) - Can open, process, and convert most elevation formats
                </li>
                <li>
                  <strong>GDAL</strong> (Command-line tools) - Powerful tools for geospatial data conversion
                </li>
                <li>
                  <strong>Global Mapper</strong> (Commercial) - User-friendly software for elevation data processing
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">Common processing tasks:</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Cropping to your area of interest</li>
                <li>Resampling to reduce file size (for large datasets)</li>
                <li>Converting between formats</li>
                <li>Filling data voids or gaps</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 3: Import into TerrainVista</h3>
              <p className="text-sm text-muted-foreground">
                Once your data is prepared, you can import it into TerrainVista:
              </p>
              <ol className="list-decimal pl-5 text-sm">
                <li>Click the "Upload Data" button in the top navigation</li>
                <li>Select your prepared elevation file</li>
                <li>Provide basic metadata (region name, description)</li>
                <li>Click "Import" to add it to your available regions</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                Note: For optimal performance, files should be under 25MB. Larger files may cause slower loading times.
              </p>
            </div>

            <div className="space-y-2 mt-4 p-4 bg-muted rounded-lg">
              <h3 className="font-medium flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Using Sample Data
              </h3>
              <p className="text-sm">
                If you're just getting started, TerrainVista includes sample elevation data for several regions. These
                are accessible from the region selector dropdown and can be used to explore the application's features
                before importing your own data.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to TerrainVista
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
