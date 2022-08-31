import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GalleryPage } from "./pages/GalleryPage";
import { Header } from "./layouts/Header";
import "./index.css";
import { SearchModel } from "./components/SearchModel";

function App() {
  // 3D models state
  const [modelData, setModelData] = useState([]);

  // Request 3D models information from DB
  useEffect(() => {
    // Get models data
    const fetchData = async (url) => {
      const data = await fetch(url);
      const models = await data.json();
      setModelData(models);
    };

    // Function call
    fetchData("http://localhost:3003/3DModels/");
  }, []);

  // Window width to conditional render
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div id="app" className="flex flex-col w-screen h-screen bg-gray-100">
      <Header screenWidth={windowWidth} />
      <SearchModel />
      <Routes>
        <Route path="/" element={<GalleryPage models={modelData} />} />
      </Routes>
    </div>
  );
}
export default App;
