import { useMemo, useState } from "react";
import Container from "../container/Container";
import BlogDetailsLatestRight from "./BlogDetailsLatestsRight";
import BlogDetailsLatestsLeft from "./BlogDetailsLatestsLeft";
import { useAPI } from "../../hooks/useAPI";
import type { IBlogMain } from "../../types/types";

function BlogDetailsLatest() {
  const { data } = useAPI<{ data: IBlogMain[] }>("api/blogs/", {
    method: "GET",
    limit: 99,
    onSuccess: (data) => {
      setActive(data?.data[0].id);
    },
  });
  const [active, setActive] = useState(0);
  const activeBlog = useMemo(() => {
    if (data) {
      return data?.data.find((item) => item.id == active);
    } else {
      return null;
    }
  }, [data, active]);

  return (
    <Container>
      <div className="w-full flex items-center">
        <div className="hidden lg:block w-full">
          <BlogDetailsLatestRight activeBlog={activeBlog} />
        </div>
        <BlogDetailsLatestsLeft
          latestsBlogs={data?.data}
          setActive={setActive}
        />
      </div>
    </Container>
  );
}

export default BlogDetailsLatest;
