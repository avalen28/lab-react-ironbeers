import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-beers" element={<AllBeers />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
