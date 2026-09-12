import Container from "../container/Container";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { useHomePage } from "../../contexts/HomePageContext";
import { fullURL } from "../../services/api";

function Videos() {
  const { data } = useHomePage();

  return (
    <Container>
      <div className="w-full px-4 md:px-6 lg:px-30 flex flex-col gap-8 items-center mb-35">
        <h4 className="text-2xl font-semibold">ویدئو پروژه های جدید</h4>
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="h-60! rounded-lg overflow-hidden w-full md:w-1/2 lg:w-[40%]">
            <VideoPlayer
              cover={fullURL(data?.index_videos.image_2.url)}
              video={fullURL(data?.index_videos.video_2)}
            />
          </div>
          <div className="h-60! rounded-lg overflow-hidden md:flex-1 w-full">
            <VideoPlayer
              cover={fullURL(data?.index_videos.image_1.url)}
              video={fullURL(data?.index_videos.video_1)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="h-60! rounded-lg overflow-hidden w-full md:w-1/2 lg:w-[57%] ">
            <VideoPlayer
              cover={fullURL(data?.index_videos.image_4.url)}
              video={fullURL(data?.index_videos.video_4)}
            />
          </div>
          <div className="h-60! rounded-lg overflow-hidden md:flex-1 w-full">
            <VideoPlayer
              cover={fullURL(data?.index_videos.image_3.url)}
              video={fullURL(data?.index_videos.video_3)}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Videos;
