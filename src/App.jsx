import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Loader from "../src/Components/Loader/Loader";

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

  return <>{loading ? <Loader /> : <Home />}</>;
}
