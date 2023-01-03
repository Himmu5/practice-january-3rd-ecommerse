import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContact from "./Component/MainContact";
import Nav from "./Component/Nav";
import ProductDetail from "./Component/ProductDetail";

function App() {
  return (
    <div className="font-[poppins]">
      <Nav />

      <div className="max-w-5xl mx-auto my-16 ">
        <Routes>
          <Route path="/" element={<MainContact />}/>
          <Route path="/ProductDetail/:id" element={<ProductDetail />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
