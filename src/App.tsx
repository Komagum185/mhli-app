import { Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ProgramDetailPage } from "./pages/ProgramDetailPage";
import { Programs } from "./pages/Programs";
import { GalleryPage } from "./pages/Gallery";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:slug" element={<ProgramDetailPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}