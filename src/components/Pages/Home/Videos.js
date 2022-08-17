import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../Hooks/UseVideoList";
import Video from "./Video";
function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <>
      {videos?.length > 0 && (
        <InfiniteScroll
          dataLength={videos?.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          scrollableTarget="scrollableDiv"
          style={{ overflow: "visible" }}
          className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] my-12 mx-auto justify-items-center gap-5 gap-y-5"
        >
          {videos?.map((video) => (
            <Link to="/quiz" key={video?.youtubeID}>
              <Video
                title={video?.title}
                id={video?.youtubeID}
                noq={video?.noq}
              />
            </Link>
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos?.length === 0 && (
        <p className="text-red-500 text-md">Video not found!</p>
      )}
      {error && <p className="text-red-500 text-md">Error to play video</p>}
    </>
  );
}

export default Videos;
