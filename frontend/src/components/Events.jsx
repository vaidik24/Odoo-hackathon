import React from 'react';
import '../App.css'
import EventCard from './EventCard'; // Adjust the path as per your project structure
import Navbar from './Navbar';
import Footer from './Footer'

const Events = () => {
  // Replace with actual event data array
  const events = [
    {
      id: 1,
      title: "Rock Night Live",
      description: "Experience the best of rock music with live performances!",
      thumbnail: "https://via.placeholder.com/300x180.png?text=Rock+Night",
      streamUrl: "https://example.com/rock-night-stream.m3u8",
      genre: "Rock"
    },
    {
      id: 2,
      title: "Jazz Festival",
      description: "Smooth jazz performances from renowned artists.",
      thumbnail: "https://via.placeholder.com/300x180.png?text=Jazz+Festival",
      streamUrl: "https://example.com/jazz-festival-stream.m3u8",
      genre: "Jazz"
    },
    {
      id: 3,
      title: "Electronic Dance Party",
      description: "Non-stop electronic beats all night long!",
      thumbnail: "https://via.placeholder.com/300x180.png?text=EDM+Party",
      streamUrl: "https://example.com/edm-party-stream.m3u8",
      genre: "Electronic"
  },
  {
      id: 4,
      title: "Classical Symphony",
      description: "A night of classical masterpieces performed live.",
      thumbnail: "https://via.placeholder.com/300x180.png?text=Classical+Symphony",
      streamUrl: "https://example.com/classical-symphony-stream.m3u8",
      genre: "Classical"
  },
  {
      id: 5,
      title: "Hip Hop Showcase",
      description: "Featuring the hottest hip hop artists of the moment.",
      thumbnail: "https://via.placeholder.com/300x180.png?text=Hip+Hop+Showcase",
      streamUrl: "https://example.com/hip-hop-showcase-stream.m3u8",
      genre: "Hip Hop"
  }
    // Add more events as needed
  ];

  return (
    <>
    <Navbar/>
    <div className="event-grid">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Events;
