import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={event.thumbnail} alt={event.title} className="event-thumbnail" />
    <div className="event-info">
      <div className="event-title">{event.title}</div>
      <div className="event-genre">{event.genre}</div>
      <div className="event-description">{event.description}</div>
      <Link href={event.streamUrl} className="watch-button" target="_blank" rel="noopener noreferrer">
        Watch Now
      </Link>
    </div>
  </div>
);

export default EventCard;
