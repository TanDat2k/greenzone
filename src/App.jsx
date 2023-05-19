import { Navbar, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import { AboutPage, PrivatePage, HomePage, AccountPage } from "./pages";

const App = () => (
  <div className="min-h-full">
    <div className="gradient-bg-welcome">
      <Navbar />
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ve-chung-toi" element={<AboutPage />} />
      <Route path="/chinh-sach-bao-mat" element={<PrivatePage />} />
      <Route path="/thong-tin-tai-khoan" element={<AccountPage />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
