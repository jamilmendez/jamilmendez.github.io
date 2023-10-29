import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, Works } from "@/pages";
import PageLayout from "@/layout/PageLayout";

export const MainRoutes = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  );
};
