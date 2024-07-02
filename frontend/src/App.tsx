import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function App() {
  // TODO: fix any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = useRef<any>(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(1);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: "maplibre-map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [lng, lat],
      zoom: zoom,
      maplibreLogo: true,
    });
    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true,
      }),
      "top-right"
    );
  }, [lng, lat, zoom]);

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <div id="maplibre-map" className="absolute h-full w-full" />
    </div>
  );
}
