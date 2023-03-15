import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./Product/ProductDetail/index";
import ProductOverView from "./Product/ProductOverView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/products" element={<ProductOverView />} />
        <Route path="*" element={<h2>Error Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
