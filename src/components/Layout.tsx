import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main key={location.pathname} className="flex-1 pt-16 page-enter">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
