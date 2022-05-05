import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
      <footer>FOOTER</footer>
    </div>
  );
}

export default App;
