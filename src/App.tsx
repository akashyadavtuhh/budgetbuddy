import { useState } from "react";
import "./index.css";
import { BottomNavigation, TopNavigation } from "./components/Navigation";
import { Overview } from "./components/Overview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopNavigation />
      <Overview />
      <BottomNavigation />
    </div>
  );
}

export default App;
