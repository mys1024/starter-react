import { useState } from "react";
import { BaseUiButton } from "./components/ui/BaseUiButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen justify-center px-6 py-10">
      <BaseUiButton type="button" onClick={() => setCount((value) => value + 1)}>
        count: {count}
      </BaseUiButton>
    </main>
  );
}

export default App;
