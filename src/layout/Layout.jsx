import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageScrollBtn from "../components/common/PageScrollBtn";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <PageScrollBtn />
    </>
  );
}

