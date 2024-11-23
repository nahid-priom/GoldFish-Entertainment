import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/1.mp4";

const VideoPage = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate();

  const relatedVideos = [
    {
      id: 1,
      title: "Related Video Title",
      channel: "Channel Name",
      views: "500K views",
      time: "1 week ago",
      thumbnail: "https://via.placeholder.com/120x80",
    },
    {
      id: 2,
      title: "Another Related Video",
      channel: "Another Channel",
      views: "300K views",
      time: "3 days ago",
      thumbnail: "https://via.placeholder.com/120x80",
    },
  ];

  // Handle video end event
  const handleVideoEnd = () => {
    setShowPopup(true); // Show popup when video ends
  };

  // Redirect to YouTube
  const redirectToYouTube = () => {
    window.location.href = "https://www.youtube.com/watch?v=-5kHNftPMc0"; 
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col md:flex-row">
      {/* Video Player Section */}
      <div className="md:w-3/4 w-full bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <div className="video-player bg-black w-full h-64 md:h-96 flex justify-center items-center">
          {/* Video Player */}
          <video width="100%" height="100%" controls onEnded={handleVideoEnd}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 pt-8 lg:pt-28">
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Video Title Here
          </h2>
          <p className="text-gray-600 mt-2">Channel Name • 1M views • 2 days ago</p>
          <p className="text-gray-600 mt-4">
            Description of the video goes here. This can include information
            about the video content, details about the creator, and any other
            relevant details.
          </p>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="md:w-1/4 w-full mt-8 md:mt-0 md:ml-8">
        <h3 className="text-lg font-bold mb-4">Related Videos</h3>
        {relatedVideos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 flex"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-32 h-20 object-cover"
            />
            <div className="p-2">
              <h4 className="text-sm font-semibold">{video.title}</h4>
              <p className="text-xs text-gray-600">{video.channel}</p>
              <p className="text-xs text-gray-500">{`${video.views} • ${video.time}`}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-100">
    <div className="bg-white p-8 rounded-lg shadow-xl text-center relative w-96 max-w-full">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-red-900"
        onClick={() => setShowPopup(false)}
      >
        <i className="fas fa-times text-2xl"></i>
      </button>
      
      {/* Icon */}
      <div className="flex justify-center items-center text-red-900 mb-6">
        <i className="fas fa-question-circle text-6xl"></i>
      </div>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Would you like to continue watching?
      </h2>
      <p className="text-gray-600 mb-6">
        The full version of this video is available on our YouTube channel.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-red-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-800 transition duration-200"
          onClick={redirectToYouTube}
        >
          <i className="fas fa-play-circle mr-2"></i> Watch Now
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
          onClick={() => setShowPopup(false)}
        >
          <i className="fas fa-times-circle mr-2"></i> Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default VideoPage;
