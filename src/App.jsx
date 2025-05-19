import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Loader from "../src/Components/Loader/Loader";
import SeasonNotificationBar from "./Components/SeasonNotificationBar/SeasonNotificationBar";
import SeasonFloatButton from "./Components/SeasonFloatButton/SeasonFloatButton";
import SeasonOneTutorial from "./Components/SeasonOneTutorial/SeasonOneTutorial";
import Rotas from "./Services/Rotas";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Rotas />
        </>
      )}
    </>
  );
}
