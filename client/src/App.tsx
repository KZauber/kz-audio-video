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
