import { BottomNavigation, TopNavigation } from "./components/Navigation";
import { Overview } from "./components/Overview";
import "./index.css";

function App() {
  return (
    <div>
      <TopNavigation />
      <Overview />
      <BottomNavigation />
    </div>
  );
}

export default App;
