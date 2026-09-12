import { useEffect } from "react";
import Container from "../../components/container/Container";
import Hero from "../../components/hero/Hero";
import HomeBlog from "../../components/homeBlog/HomeBlog";
import Latests from "../../components/latests/Latests";
import Loading from "../../components/loading/Loading";
import MidBanner from "../../components/midBanner/MidBanner";
import Videos from "../../components/videos/Videos";
import { useHomePage } from "../../contexts/HomePageContext";

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
      <Container>
        <MidBanner />
      </Container>
      <Videos />
      <HomeBlog />
    </>
  );
}

export default Home;
