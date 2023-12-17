import { useState } from "react";
import "./index.css";
import { BottomNavigation, TopNavigation } from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
    </div>
  );
}

export default App;
