import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useAPI } from "../../hooks/useAPI";
import { fullURL } from "../../services/api";
import type { IBlogMain } from "../../types/types";
import TagsShow from "../../components/tagsShow/TagsShow";
import BlogDetailsLatest from "../../components/blogDetailsLatests/BlogDetailsLatest";
import { FaRegCalendarAlt } from "react-icons/fa";
import Loading from "../../components/loading/Loading";
import { useEffect } from "react";

function BlogDetails() {
  const { id } = useParams();

  const { data, loading } = useAPI<IBlogMain>(`api/blogs/${id}`, {
    method: "GET",
  });

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
        <div className="lg:mb-50 py-20">
          <div className="w-full text-xl border-r-4 border-r-[#427AE0] py-1 px-3 font-semibold mb-5">
            توضیحاتی درباره {data?.title}
          </div>
          <div className="w-full mb-5 flex items-center justify-between sm:justify-start gap-4 sm:gap-10 flex-row-reverse text-sm sm:text-base text-[#979797]">
            <p>زمان مورد نیاز برای مطالعه ({data?.time} دقیقه)</p>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt />
              <p>{data?.updated_at.day}</p>
              <p>{data?.updated_at.month.string}</p>
            </div>
          </div>
          <div className="w-full rounded-2xl mb-15">
            <img
              src={fullURL(data?.image.url)}
              alt={data?.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text-xl font-semibold mb-10">{data?.title}</div>
          <p
            className="mb-10"
            dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
          ></p>
          <div className="mb-10">
            <TagsShow tags={data?.tags} />
          </div>
          <div>
            <BlogDetailsLatest />
          </div>
        </div>
      </Container>
    </>
  );
}

export default BlogDetails;
