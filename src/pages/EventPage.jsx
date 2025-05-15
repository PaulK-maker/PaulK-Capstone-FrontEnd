
import React,{useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import EventCard from "../components/EventCard";

const EventPage = ()=> {
    const {id} = useParams();
    const[event, setEvent] =useState(null);
    

    useEffect(() =>{
        axios.get(`http://localhost:3001/api/events/${id}`)
        .then(response=>setEvent(response.data))
        .catch(error=>{
            console.error('Error fetching event:', error)
        });
    },[id]);
    if (!event) return <p>Loading event...</p>;

    // return(
    //     <div>
    //         <h2>{event.title}</h2>
    //         <p><strong>Date:</strong>{event.date.split('T')[0]}</p>
    //         <p><strong>Location:</strong>{event.location}</p>
    //         <p><strong>Description:</strong>{event.description}</p>
    //               {/* <h2>Event Details</h2>
    //               <EventCard event={event} onDelete={() => {}} onRsvp={() => {}} /> */}

    //     </div>
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <EventCard event={event} />
        </div>
    );


    
}

export default EventPage;