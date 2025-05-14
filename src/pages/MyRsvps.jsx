import React, {useEffect,useState} from "react";
import axios from 'axios';
import { getUserRsvps } from "../Services/eventService";
import EventCard from '../components/EventCard';

function MyRsvps () {
    const [events, setEvents] =useState([]);
    // const handleRsvp = async (eventId)=>
        useEffect(()=>{
            async function fetchEvents(){
        try{
           const response= await axios.get('http://localhost:3001/api/events');
           setEvents(response.data);
           
        

        }catch(error){
        
            console.error("Failed to fetch events",error);
        };
    }
        fetchEvents();
    },[]);
    
    const handleRsvp=async(eventId) =>{
        try{
            axios.post(`http://localhost:3001/api/events/${eventId}/rsvp`)
        
        alert("RSVP success!")
    } catch (error){

    }
    }
        return(
            <div>
                {events.map(event =>(
                    <EventCard key={event._id} event={event} onRsvp={handleRsvp}/>
                ))}
            </div>
        );
}

//     useEffect(()=>{
//         getUserRsvps()
//         // axios.get('http://localhost/api/myrsvps')
//         .then(response=>{
//             setRsvps(response.data.rsvps)
//         })
//         .catch(error=>{
//             console.error('error fetching RSVPs:', error);
//         });
        
//     },[]);

//     return(
//         <div>
//             <h2>RSVPs</h2>
//             {rsvps.length===0? (
//                 <p>You have not RSVPed to any events yet.</p>

//             ):(
//                <ul>
//                 {rsvps.map(event=>(
//                     <li key={event._id}>
//                         <EventCard event={event}/>

//                     </li>
//                 ))}

//                </ul> 
//             )
//         }
//         </div>
//     );
 
export default MyRsvps;