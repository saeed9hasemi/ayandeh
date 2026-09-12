import { useEffect } from "react";
import Container from "@/components/container/Container";
import HomeBlog from "@/components/homeBlog/HomeBlog";
import Latests from "@/components/latests/Latests";
import Loading from "@/components/loading/Loading";
import MidBanner from "@/components/midBanner/MidBanner";
import Videos from "@/components/videos/Videos";
import { useHomePage } from "@/contexts/HomePageContext";
import Hero from "@/components/hero/Hero";

function Home() {
  const { loading } = useHomePage();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Hero />
      <Latests />
      <div className="mb-30">
        <Container>
          <MidBanner />
        </Container>
      </div>
      <Videos />
      <HomeBlog />
    </>
  );
}

export default Home;
