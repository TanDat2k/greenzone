import { Navbar, Footer, Services, Transactions } from "./components";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PrivatePage from "./pages/PrivatePage";

const App = () => (
  <div className="min-h-full">
    <div className="gradient-bg-welcome">
      <Navbar />
    </div>
    {/* <Services /> */}
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/ve-chung-toi" element={<AboutPage />} />
      <Route path="/chinh-sach-bao-mat" element={<PrivatePage />} />
    </Routes>
    {/* <Transactions /> */}
    <Footer />
  </div>
);

export default App;
