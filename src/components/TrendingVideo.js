import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons"; 

const TrendingVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Title 1",
      channel: "Channel Name",
      views: "1M views",
      time: "2 days ago",
      thumbnail: "https://cdn.designcrowd.com/blog/2016/April/cartoons-miscast/GR_MiscastCartoonCharacters_Banner_828x300.jpg",
    },
    {
      id: 2,
      title: "Another Video Title",
      channel: "Another Channel",
      views: "500K views",
      time: "1 week ago",
      thumbnail: "https://i.pinimg.com/736x/95/a1/6b/95a16bec55bc67bddd20e6222f239ab7.jpg",
    },
    {
      id: 3,
      title: "Another Video Title",
      channel: "Another Channel",
      views: "500K views",
      time: "1 week ago",
      thumbnail: "https://t4.ftcdn.net/jpg/06/33/12/35/360_F_633123597_eUUvLKIBf7E5ukggCvZJ4dz02MqT5L9Q.jpg",
    },
    {
      id: 4,
      title: "Another Video Title",
      channel: "Another Channel",
      views: "500K views",
      time: "1 week ago",
      thumbnail: "https://e0.pxfuel.com/wallpapers/564/44/desktop-wallpaper-youtube-channel-art-cartoon-cartoon-banner.jpg",
    },
    {
      id: 5,
      title: "Title 1",
      channel: "Channel Name",
      views: "1M views",
      time: "2 days ago",
      thumbnail: "https://imgcdn.stablediffusionweb.com/2024/5/3/a7f73c37-8f05-40e4-bb3f-1cfc67413668.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mt-4 lg:mt-8 px-4">
        {/* Section Title */}
        <div className="flex  items-center my-4 lg:my-8">
        <FontAwesomeIcon
            icon={faFire}
            className="text-red-900 text-4xl mr-4"
          />
          <h2 className="text-3xl font-bold text-red-900 text-start underline-red">
            Trending Videos
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/video/${video.id}`} 
              className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={video.thumbnail}
                alt={`Thumbnail of ${video.title}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">{video.channel}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {video.views} • {video.time}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingVideos;
