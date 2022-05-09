import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import ModelDetails from "./components/modelDetails/ModelDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/card" element={<ModelDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
