import "./sass/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Service from "./pages/Service";
import Repair from "./pages/Repair";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/service" element={<Service />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
