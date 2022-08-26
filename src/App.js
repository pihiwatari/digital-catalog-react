import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GalleryPage } from "./pages/GalleryPage";
import "./index.css";

function App() {
  // 3D models state
  const [modelData, setModelData] = useState([]);

  // Request 3D models information from DB
  useEffect(() => {
    // Get models data
    const fetchData = async (url) => {
      const data = await fetch(url);
      const models = await data.json();
      console.log(models);
      setModelData(models);
    };

    // Function call
    fetchData("http://localhost:3003/3DModels/");
  }, []);

  return (
    <div id="app" className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<GalleryPage models={modelData} />} />
      </Routes>
    </div>
  );
}
export default App;
