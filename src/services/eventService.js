// import {getEventById} from '../services/eventService';
// import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function EventDetails() {
//     const { eventId } = useParams();
//     const [event, setEvent]=useState({});
//     console.log(event)

//     useEffect(()=>{
//      getEventById(eventId).then(res=>setEvent(res.data),[])

//     })
 
//     // if (!event) return <div>Event not Found</div>;

//     return(
//         <div>
//             <h2>{event.title}</h2>
//            <p>{event.description}</p>
//            <p><strong>Date:</strong>{event.date}</p>
//            <p><strong>Time:</strong>{event.time}</p>
//            <p><strong>Venue:</strong>{event.venue}</p>

//         </div>
    
   

// );
// }
// export default EventDetails;

import axios from 'axios'
const baseURL = 'http://localhost:3001/api/events';

// Show all Events
export const getEvents=async ()=> {
    const response = await axios.get(baseURL)
    return response.data;
}

// Show one Event
export const getEventById = async (id) => {
    
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
}

// Create a Event
export const createEvent= async (EventData) => {
    
    const response = await axios.post(baseURL, EventData);
    return response.data;
}

// Update a Event
export const updateEvent = async (id, updatedData) => {
  
    const response = await axios.patch(`${baseURL}/${id}`, updatedData);
    return response.data
    };



// Delete a Event
export const deleteEvent = async (id) => {
    
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
}

//get rsvps
export const getUserRsvps = () => {
    return axios.get('http://localhost:3001/api/myrsvps');
  };