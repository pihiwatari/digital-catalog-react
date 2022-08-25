import { Routes, Route } from "react-router-dom";

// Components
import Header from "./layouts/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Gallery from "./pages/gallery/Gallery";
import UploadForm from "./pages/uploadForm/UploadForm";
import Footer from "./layouts/footer/Footer";
import ModelDetails from "./pages/modelDetails/ModelDetails";
import NotFound from "./components/notFound/NotFound";
// Hooks
import useFetchData from "./hooks/useFetchData";
// CSS
import "./index.css";

function App() {
  const { data, error, isError, isLoading } = useFetchData(
    "http://localhost:3003/3DModels"
  );

  return (
    <div className="App">
      <Header />
      <SearchBar />
      {isLoading && <h1>Loading...</h1>}
      {data && !isLoading && (
        <Routes>
          <Route path="/" element={<Gallery models={data} />} />
          <Route path="/3DModels/:id" element={<ModelDetails />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {isError && <h1>{error}</h1>}
      <Footer />
    </div>
  );
}

export default App;
