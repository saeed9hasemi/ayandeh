import { Link } from "react-router-dom";
import type { ITag } from "../../types/types";

interface ITagsShow {
  tags: ITag[] | null | undefined;
}

function TagsShow({ tags }: ITagsShow) {
  return (
    <div className="p-4 md:text-xl text-[#c9c9c9] border-b-3 border-b-[#E0E0E0] flex flex-wrap items-center gap-4">
      <p>برچسب ها:</p>
      {tags?.map((tag, index) => {
        return (
          <>
            <Link
              to={tag.link}
              target="_blank"
              className="hover:text-[#7879F1]"
            >
              {tag.title}
            </Link>
            {index != tags.length - 1 && (
              <div className="h-6 w-px bg-[#E0E0E0]"></div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default TagsShow;
