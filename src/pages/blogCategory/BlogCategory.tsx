import { useNavigate, useParams } from "react-router-dom";
import type { IBlogMain } from "@/types/types";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useMemo } from "react";
import Container from "@/components/container/Container";
import Pagination from "@/components/pagination/Pagination";
import BlogSliderSlide from "@/components/blogSliderSlide/BlogSliderSlide";
import { fullURL } from "@/services/api";
import Loading from "@/components/loading/Loading";

function BlogCategory() {
  const { id, title } = useParams();
  const navigate = useNavigate();

  const params = useMemo(() => {
    return { category: id };
  }, [id]);

  const { data, loading, count, page, setPage } = useAPI<{ data: IBlogMain[] }>(
    "api/blogs",
    {
      method: "GET",
      limit: 8,
      params: params,
    },
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Container>
        <div className="w-full pt-20 pb-50 sm:pb-60 md:pb-70 lg:pb-80">
          <div className="w-full font-semibold text-xl mb-15">
            وبلاگ های {title}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8 mb-15">
            {data?.data.map((item) => {
              return (
                <div onClick={() => navigate(`/blog_details/${item.id}`)}>
                  <BlogSliderSlide
                    title={item.title}
                    imgURL={fullURL(item.image.url)}
                    alt={item.image.alt}
                    description={item.description}
                  />
                </div>
              );
            })}
          </div>
          <Pagination count={count} page={page} setPage={setPage} />
        </div>
      </Container>
    </>
  );
}

export default BlogCategory;
