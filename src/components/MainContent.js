import React from "react";
import "./MainContent.css";

const MainContent = () => (
  <main>
    <h1>
      <span role="img" aria-label="Chilli Pepper">
        🌶️
      </span>{" "}
      Spicy
      <span className="dimmed">Engineering</span>
    </h1>
    <p>
      <span role="img" aria-label="Email">
        📨
      </span>{" "}
      <a href="mailto:enquiries@spicy.engineering">Enquiries</a>
    </p>
  </main>
);

export default MainContent;
