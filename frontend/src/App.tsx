import "maplibre-gl/dist/maplibre-gl.css";
import { Map } from "@/features/Map";
import { ThemeProvider } from "./components/ThemeProvider";
import { NavBar } from "./features/Navbar";

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <Map />
      </ThemeProvider>
    </>
  );
}
