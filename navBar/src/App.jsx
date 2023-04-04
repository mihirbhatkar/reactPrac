import { Navbar } from "./Components/Navbar";
import { useState, useRef, useEffect } from "react";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <section
        id="content"
        style={{
          minHeight: `calc(100vh - 72px)`,
        }}
        className="max-w-6xl mx-auto px-2"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
        provident pariatur quisquam explicabo, laboriosam sunt ea odio totam sed
        commodi?
      </section>
    </div>
  );
}

export default App;
