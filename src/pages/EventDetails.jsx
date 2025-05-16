
//import react and useEffect hooks
import React, { useState, useEffect } from 'react';

//import useParams hook for URL parameters
import { useParams, useNavigate } from 'react-router-dom';

//import service function to fetch event data
import { getEventById } from '../services/eventService';

import EventCard from '../components/EventCard';
import { deleteEvent } from "../services/eventService";

function EventDetails() {

    //get id parameter from the url
    const { id } = useParams();
    const navigate = useNavigate();
    //use state to store event data
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
//useEffect to run the code when the component mounts 
    useEffect(() => {
        //fetch only when  the id is available
        if (id) {

            //call the function to get event data by id and returns a promise
            getEventById(id)
                .then(event => {
                    console.log("Fetched event:", event);

                    //save the event data to state
                    setEvent(event);
        // console.log("EventDetails: id from useParams:", id);
        // if (id) {
        //     getEventById(id)
        //         .then(res => {
        //             console.log("Fetched event:", res.data);
        //             setEvent(res.data);
                })
                .catch(err => {
                    console.error("Error fetching event:", err);
                    setError("Event not found");
                });
        }
    }, [id]); // dependancy arry to run effect when the state changes 

    const handleDelete = async () => {
      if (window.confirm("Are you sure you want to delete this event?"))
        {
            try{
                await deleteEvent(id);
                alert("event deleted!")
                navigate("/events");
            }catch (err){
                alert("Failed to delete the event.")
            }
        }
    };
    if (error) return <div>{error}</div>;
    if (!event) return <div>Loading event...</div>;
// generate Date; and convert date string to obj
    const dateObj = new Date(event.date);
    const dateStr = dateObj.toLocaleDateString();
    const timeStr = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // render event details
    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {dateStr}</p>
            <p><strong>Time:</strong> {timeStr}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
}

export default EventDetails;