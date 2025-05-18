import { Outlet } from "react-router-dom";
import Footer from "../../mainComponants/Footer";
import Header from "../../mainComponants/Header";

export default function MainLayout() {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
