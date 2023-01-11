import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
