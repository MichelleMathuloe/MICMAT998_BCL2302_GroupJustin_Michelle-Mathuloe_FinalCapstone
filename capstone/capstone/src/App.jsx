import React from 'react';
import video from './components/videos/PodcastPonderings.mp4';
import './App.css';
import NavBar from './components/Nav';
import Show from './components/Preview';
import SinglePodcastPreview from './components/Netlify';
//import podcastGallery from './components/podcastGallery';
// import BasicButtonGroup from './components/header';

function App() {
  const [selectedPodcastId, setSelectedPodcastId] = React.useState(null);
  const [showShowComponent, setShowShowComponent] = React.useState(true);

  const handlePodcastClick = (podcastId) => {
    setSelectedPodcastId(podcastId);
    setShowShowComponent(false);
  };

  const navigateToHomePage = () => {

    setShowShowComponent(true);
    alert('You have successfully navigated to the homepage!');
    window.location.href = "http://localhost:5175/";
  };

  // const podcastGallery = [
  //   { id: 1, image: "url_to_image_1.jpg" },
  //   { id: 2, image: "url_to_image_2.jpg" },
  //   { id: 3, image: "url_to_image_3.jpg" },
  //   // Add more podcast objects as needed
  // ];

  return (
    <div>
      <NavBar handleHomeButtonClick={navigateToHomePage} />
      <video src={video} autoPlay muted loop id="video-background" />
      {showShowComponent ? (
        <Show onPodcastClick={handlePodcastClick} />
      ) : selectedPodcastId ? (
        <SinglePodcastPreview podcastId={selectedPodcastId} />
      ) : (
        <div>Home</div>
      )}
    </div>
  );
}

export default App;
