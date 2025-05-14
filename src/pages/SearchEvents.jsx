
import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

// use hook toget query parameters
const useQuery =()=> {
    return new URLSearchParams(useLocation().search);

};
const SearchEvents = () => {
    const [events, setEvents] = useState([]);
    const queryParam = useQuery().get('query');

useEffect(()=>{
    if (!queryParam) return;
        axios
        .get(`/api/events/search?query=${queryParam}`)
        .then((res) =>setEvents(res.data))
        .catch((err) =>console.error('Error fetching events:',err ));
    

},[queryParam]);

return (

    <div>
      <h2>Search Results for "{queryParam}"</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        events.map((event) => (
          <div key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.location}</p>
          </div>
        ))
      )}
    </div>

);
}

export default SearchEvents;