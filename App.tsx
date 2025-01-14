import { screenDetect } from "./functions/screenDetect";
import { addResizeListener } from "./functions/resizeHandler";
import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    const removeResizeListener = addResizeListener(() => {
      window.location.reload();
    });

    return removeResizeListener;
  }, []);

  return screenDetect();
}

export default App;
