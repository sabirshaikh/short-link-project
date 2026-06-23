import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShortLink from "./pages/ShortLink";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Layout = lazy(() => import("./layout/Layout"));
const Loader = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shortlink" element={<ShortLink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
