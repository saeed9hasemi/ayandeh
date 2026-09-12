import { useAPI } from "@/hooks/useAPI";
import type { IBlogMain } from "@/types/types";
import BlogSliderWrapper from "@/components/blogSliderWrapper/BlogSliderWrapper";
import Loading from "@/components/loading/Loading";
import { useEffect } from "react";

function Blogs() {
  const { data, loading } = useAPI<{ data: IBlogMain[] }>("api/blogs/", {
    method: "GET",
    limit: 99,
  });

  const blogCategories = [
    {
      blogCategory: 1,
      title: "منطقه 1",
      data: data?.data.filter((item) => item.blog_category_id == 1),
      href: "/blog_category/1/منطقه 1",
    },
    {
      blogCategory: 2,
      title: "دبی",
      data: data?.data.filter((item) => item.blog_category_id == 2),
      href: "/blog_category/2/دبی",
    },
    {
      blogCategory: 3,
      title: "استانبول",
      data: data?.data.filter((item) => item.blog_category_id == 3),
      href: "/blog_category/3/استانبول",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="mb-50">
        {blogCategories.map((item) => {
          return (
            <BlogSliderWrapper
              key={item.blogCategory}
              title={item.title}
              data={item.data}
              href={item.href}
            />
          );
        })}
      </div>
    </>
  );
}

export default Blogs;
