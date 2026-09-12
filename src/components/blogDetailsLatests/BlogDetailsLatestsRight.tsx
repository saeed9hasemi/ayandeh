import { FaRegCalendarAlt } from "react-icons/fa";
import { fullURL } from "../../services/api";
import type { IBlogMain } from "../../types/types";

interface IBlogDetailsLatestRight {
  activeBlog: IBlogMain | null | undefined;
}

function BlogDetailsLatestRight({ activeBlog }: IBlogDetailsLatestRight) {
  return (
    <div className="w-full">
      <div className="w-full text-xl border-r-4 border-r-[#427AE0] py-1 px-3 font-semibold mb-15">
        تازه ترین وبلاگ ها
      </div>
      <div className="w-full h-100 rounded-2xl mb-6">
        <img
          src={fullURL(activeBlog?.image.url)}
          alt={activeBlog?.image.alt}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: activeBlog?.description ?? "" }}
        className="line-clamp-3 mb-2"
      ></p>
      <div className="p-2 text-[#c9c9c9] flex items-center gap-2">
        <FaRegCalendarAlt />
        <p>{activeBlog?.created_at.day}</p>
        <p>{activeBlog?.created_at.month.string}</p>
      </div>
    </div>
  );
}

export default BlogDetailsLatestRight;
