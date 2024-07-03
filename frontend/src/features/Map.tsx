import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTheme } from "@/components/ThemeProvider";

const Map = () => {
  // TODO: fix any type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = useRef<any>(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(1);

  const { theme } = useTheme();

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: "maplibre-map",
      style: `https://tiles.stadiamaps.com/styles/alidade_smooth${theme === "dark" ? "_dark" : ""}.json`,
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
      "top-right",
    );
  }, [lng, lat, zoom, theme]);

  const updateMapStyle = () => {
    if (map.current) {
      map.current.setStyle(
        `https://tiles.stadiamaps.com/styles/alidade_smooth${theme === "dark" ? "_dark" : ""}.json`,
      );
    }
  };

  useEffect(updateMapStyle, [theme]);

  return (
    <div className="relative h-[90vh] w-[100vw]">
      <div id="maplibre-map" className="absolute h-full w-full" />
    </div>
  );
};

export { Map };
