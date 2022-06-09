import "./styles.css";
import Navigation from "./Components/Navigation";
import Adoption from "./Components/Adoption/Adoption";
import DogDescription from "./Components/DogDescription/DogDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoption/:id" element={<DogDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
