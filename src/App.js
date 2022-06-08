import Header from "./layouts/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./layouts/footer/Footer";
import ModelDetails from "./pages/modelDetails/ModelDetails";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/models/:id" element={<ModelDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
