//tailwind axios react-router-dom json-server

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import Blogs from "./pages/blogs/Blogs";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import BlogCategory from "./pages/blogCategory/BlogCategory";
import Advs from "./pages/advs/Advs";
import AdvDetails from "./pages/advDetails/AdvDetails";
import AdvCategory from "./pages/advCategory/AdvCategory";
import Advice from "./pages/advice/Advice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about_us" element={<AboutUs />} />

        <Route path="/contact_us" element={<ContactUs />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog_category/:id/:title" element={<BlogCategory />} />
        <Route path="/blog_details/:id" element={<BlogDetails />} />

        <Route path="/advs/:query" element={<Advs />} />
        <Route path="/adv_category/:category" element={<AdvCategory />} />
        <Route path="/adv_details/:id" element={<AdvDetails />} />

        <Route path="/advice" element={<Advice />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
