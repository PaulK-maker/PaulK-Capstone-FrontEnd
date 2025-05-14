import {getEventById} from '../services/eventService';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {
    const { eventId } = useParams();
    const [event, setEvent]=useState({});
    console.log(event)

    useEffect(()=>{
     getEventById(eventId).then(res=>setEvent(res.data),[])

    })
 
    // if (!event) return <div>Event not Found</div>;

    return(
        <div>
            <h2>{event.title}</h2>
           <p>{event.description}</p>
           <p><strong>Date:</strong>{event.date}</p>
           <p><strong>Time:</strong>{event.time}</p>
           <p><strong>Venue:</strong>{event.venue}</p>

        </div>
    
   

);
}
export default EventDetails;