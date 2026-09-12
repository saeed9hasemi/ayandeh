import { useEffect } from "react";
import Container from "../../components/container/Container";
import Loading from "../../components/loading/Loading";
import { useAPI } from "../../hooks/useAPI";
import { fullURL } from "../../services/api";
import type { IAboutUs } from "../../types/types";

function AboutUs() {
  const { data, loading } = useAPI<IAboutUs>("api/about_us", { method: "GET" });

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
        <div className="mb-20 sm:mb-30 md:mb-40 lg:mb-50 py-20">
          <div className="w-full text-xl border-r-4 border-r-[#7879F1] p-1 font-semibold mb-15">
            درباره ما
          </div>
          <div className="w-full rounded-2xl mb-15">
            <img
              src={fullURL(data?.image.url)}
              alt="aboutUs"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="text-xl font-semibold mb-10">{data?.title}</div>
          <p dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}></p>
        </div>
      </Container>
    </>
  );
}

export default AboutUs;
