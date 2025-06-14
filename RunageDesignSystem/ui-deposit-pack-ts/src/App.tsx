import { useState } from "react";

import "./App.css";
import { PaymentCard } from "./PaymentCard";
import { PricingCard } from "./PricingCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <PricingCard
          accessTime="One-Time"
          accessType="All-Access"
          value={99}
          theme="light"
          currency="$"
          offer={[
            "All 300+ components",
            "2000+ Figma variants",
            "2116 unique icons",
          ]}
        />
        <PricingCard
          accessTime="One-Time"
          accessType="All-Access"
          value={99}
          theme="dark"
          currency="$"
          offer={[
            "All 300+ components",
            "2000+ Figma variants",
            "2116 unique icons",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
