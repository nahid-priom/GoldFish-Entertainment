import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";



const Home = lazy(() => import("./pages/Home"));
const Video = lazy(() => import("./pages/Video"));


const ClearCache = lazy(() => import("./components/ClearCache"));

const LoadingFallback = ({ children }) => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-red-600"></div>
        <p className="ml-4 text-red-600">Loading...</p>
      </div>
    }
  >
    {children}
  </Suspense>
);

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <LoadingFallback>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          

          <Route path="/clear-cache" element={<ClearCache />} />
        </Routes>
      </LoadingFallback>
    </Router>
    
  </HelmetProvider>
);

export default App;
