import { Outlet } from "react-router";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { JsonLd } from "../components/json-ld";
import { SkipLink } from "../components/page-nav";
import { ScrollToTop } from "./scrollToTop";

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <JsonLd />
      <SkipLink />
      <ScrollToTop />
      <Header />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}