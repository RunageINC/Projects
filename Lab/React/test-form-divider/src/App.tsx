import "./App.css";
import { FormComplete } from "./components/form-complete";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <FormComplete />
      <Toaster />
    </div>
  );
}

export default App;
