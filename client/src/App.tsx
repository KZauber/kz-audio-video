import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServicesIndex from "./pages/services/ServicesIndex";
import HomeTheaterInstallation from "./pages/services/HomeTheaterInstallation";
import AVRepair from "./pages/services/AVRepair";
import SurroundSound from "./pages/services/SurroundSound";
import SmartHomeAutomation from "./pages/services/SmartHomeAutomation";
import TVMounting from "./pages/services/TVMounting";
import OutdoorHomeTheater from "./pages/services/OutdoorHomeTheater";
import HomeAudio from "./pages/services/HomeAudio";
import LocationsIndex from "./pages/locations/LocationsIndex";
import SanAntonio from "./pages/locations/SanAntonio";
import Boerne from "./pages/locations/Boerne";
import StoneOak from "./pages/locations/StoneOak";
import NewBraunfels from "./pages/locations/NewBraunfels";
import BlogIndex from "./pages/blog/BlogIndex";
import AVSystemNotDead from "./pages/blog/AVSystemNotDead";
import HomeTheaterCost from "./pages/blog/HomeTheaterCost";
import DolbyAtmosExplained from "./pages/blog/DolbyAtmosExplained";
import OneButtonTheater from "./pages/blog/OneButtonTheater";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={ServicesIndex} />
      <Route path={"/services/home-theater-installation"} component={HomeTheaterInstallation} />
      <Route path={"/services/av-repair"} component={AVRepair} />
      <Route path={"/services/surround-sound"} component={SurroundSound} />
      <Route path={"/services/smart-home-automation"} component={SmartHomeAutomation} />
      <Route path={"/services/tv-mounting"} component={TVMounting} />
      <Route path={"/services/outdoor-home-theater"} component={OutdoorHomeTheater} />
      <Route path={"/services/home-audio"} component={HomeAudio} />
      <Route path={"/locations"} component={LocationsIndex} />
      <Route path={"/locations/san-antonio"} component={SanAntonio} />
      <Route path={"/locations/boerne"} component={Boerne} />
      <Route path={"/locations/stone-oak"} component={StoneOak} />
      <Route path={"/locations/new-braunfels"} component={NewBraunfels} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/av-system-not-dead"} component={AVSystemNotDead} />
      <Route path={"/blog/home-theater-cost-san-antonio"} component={HomeTheaterCost} />
      <Route path={"/blog/dolby-atmos-explained"} component={DolbyAtmosExplained} />
      <Route path={"/blog/one-button-home-theater"} component={OneButtonTheater} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
