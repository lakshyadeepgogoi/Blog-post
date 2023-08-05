import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);


  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna hei
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page) , null, category)
    }
    else{
      fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center bg-lime-200">
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />

     

    </Routes>

    </div>


  );
}
