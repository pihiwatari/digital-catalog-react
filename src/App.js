import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import ModelCard from "./components/modelCard/ModelCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <main className="gallery-grid">
        <ModelCard />
        <ModelCard />
        <ModelCard />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
