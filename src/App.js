import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { GalleryPage } from "./pages/GalleryPage";
import { ModelDetailsPage } from "./pages/ModelDetailsPage";
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

  // Search and filter models by name or user
  // State for getting the search value and filtering models
  // NOTE: convert this to a custom hook later
  const [searchValue, setSearchValue] = useState("");

  const modelsToFilter = modelData?.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const filteredModels = searchValue ? modelsToFilter : modelData;

  return (
    <div id="app" className="flex flex-col w-screen bg-gray-100">
      <Header screenWidth={windowWidth} />
      <SearchModel searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<GalleryPage models={filteredModels} />} />
        <Route
          path="/3d-models/:id"
          element={<ModelDetailsPage models={filteredModels} />}
        />
      </Routes>
    </div>
  );
}
export default App;
