import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBeers from "./pages/AllBeers";
import Error from "./pages/Error";
import SingleBeer from "./pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
