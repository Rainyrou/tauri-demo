import { useEffect } from "react";
import init, { greet } from "@wasmdemo/foo";
import "../global.css";

function App() {
  useEffect(() => {
    init()
      .then(() => console.log("WASM module initialized"))
      .catch((err) => console.error("Failed to initialize WASM module", err));
  }, []);

  return (
    <div className="flex">
      <button onClick={() => greet()}>Click me</button>
    </div>
  );
}

export default App;
