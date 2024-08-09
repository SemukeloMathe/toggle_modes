import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const App = () => {
  const [active1, setActive1] = useState(false);

  const toggleMode1 = () => {
    setActive1(c => !c);
  };

  return (
    <div className="app">
      <div className={`sec__1 ${active1 ? "light__mode" : ""}`} >
        <button onClick={toggleMode1}>{active1 ? "Light Mode" : "Dark Mode"}</button>
      </div>

      <div className={`sec__2 ${active1 ? "dark__mode" : ""}`}>
        <button onClick={toggleMode1}>{active1 ? "Dark Mode" : "Light Mode"}</button>
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);