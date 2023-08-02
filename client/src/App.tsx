import React, { useState } from "react";
import "./App.css";
import AccordionsItem from "./Components/Accordions/AccordionsItem";
import Container from "./Components/Container";
import Heading from "./Components/Heading";

// data
import accordionData from "./Data/accordionData";

function App() {
  const [active, setActive] = useState<number | null>(null);

  function handleToggle(index: number) {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  }
  return (
    <div className="h-screen bg-white">
      <Container>
        <section className="grid grid-cols-2 gap-[20px]">
          <Heading title="React Accordions" subtitle="komponent til React." />
          <ul className="flex flex-col items-center gap-[1rem] py-[20px]">
            {accordionData.map((item) => (
              <AccordionsItem
                key={item.id}
                item={item}
                active={active}
                handleToggle={handleToggle}
              />
            ))}
          </ul>
        </section>
      </Container>
    </div>
  );
}

export default App;
