import React from 'react';
import {Link} from 'react-router-dom';
// import EventCard from "../components/EventCard";
//  import 'App.css';


export default function EventCard({event, onDelete, onRsvp}) {
  if (!event) return null;

    // destructuring event props
    const{ id, date, location, description}= event;

    return(
        <div className='event-card'>
        <h3>{description}</h3>
 {/* get date and able to use given date */}
     <p><strong>Date:</strong>{new Date(date).toLocaleDateString()}</p>
     <p><strong>Location:</strong>{location}</p>
     <p><strong>Description</strong></p>

     {/* add description preview */}
   <Link to={`/event/${id}`} className='details-button'>View Details</Link>
   <button onClick={() => onRsvp(id)}>RSVP</button>
   <button onClick={() => onDelete(event.id)}>Delete</button>
      </div>
    );
}
