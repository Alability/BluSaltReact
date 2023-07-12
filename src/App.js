import { useRoutes } from "react-router-dom";
import "./App.css";
import TrafficLightSystem from "./Pages/TrafficLightSystem";

function App() {
  return useRoutes([
    { path: "/", element: <TrafficLightSystem /> },
  ]);
}

export default App;
