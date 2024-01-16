import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import SingleBlog from "../pages/SingleBlog";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Layout from "../components/Layout/Layout";
function routes() {
  const routes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/About",
      component: <AboutUs />,
    },
    {
      path: "/Contact",
      component: <Contact />,
    },
    {
      path: "/Blogs",
      component: <Blogs />,
    },
    {
      path: "/SinglePost",
      component: <SingleBlog />,
    },
  ];
  return (
    <>
      {/* <Router> */}
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default routes;
