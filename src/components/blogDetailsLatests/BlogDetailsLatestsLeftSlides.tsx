import { FaRegCalendarAlt } from "react-icons/fa";
import { fullURL } from "../../services/api";
import type { IBlogMain } from "../../types/types";

interface IBlogDetailsLatestsLeftSlides {
  blog: IBlogMain;
}

function BlogDetailsLatestsLeftSlides({ blog }: IBlogDetailsLatestsLeftSlides) {
  return (
    <div className="w-full p-5 flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full lg:w-1/3 h-52 lg:h-35 rounded-2xl overflow-hidden cursor-pointer">
        <img
          src={fullURL(blog.image.url)}
          alt={blog.image.alt}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col gap-3">
        <p
          className="text-sm line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: blog.description ?? "",
          }}
        ></p>
        <div className="text-sm text-[#c9c9c9] flex items-center gap-2">
          <FaRegCalendarAlt />
          <p>{blog?.updated_at.day}</p>
          <p>{blog?.updated_at.month.string}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsLatestsLeftSlides;
