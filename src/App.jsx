import React, { useState } from "react";
import MainPage from "./Pages/MainPage";
import "./App.css";
import HeartLoader from "./Sections/HeartLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <HeartLoader onComplete={() => setLoading(false)} />
  ) : (
    <MainPage />
  );
};

export default App;