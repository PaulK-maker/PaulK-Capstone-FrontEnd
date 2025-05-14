
import {getEvents, updateEvent} from '../services/eventService';
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [editingId,setEditingId] =useState(null);
  const [form,setForm] =useState({title: '', date: ''});
  console.log(events)

  // useEffect(() => {
    
  //   getEvents()
  //   // .then(response => setEvents(response.data))
  //   .then(response => setEvents(Array.isArray(response.data) ? response.data : []))
  //   .catch(error => console.error('Error fetching events:', error));
  //   setEvents([]);

  // }, []);
  useEffect(() => {
    axios.get('http://localhost:3001/api/events')
      .then(response => {
        setEvents(Array.isArray(response.data) ? response.data : response.data.events || []);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setEvents([]);
      });
  }, []);
  
const startEdit =(event) =>{
  setEditingId(event._id);
  setForm({ title:event.title,date:event.date.split('T')[0]});
};
const handleEditChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const submitEdit =(e) =>{
  e.preventDefault();

  updateEvent(editingId, form)
  .then(() => {
    setEditingId(null);
    return getEvents();
  })
  .then(response => setEvents(response.data))
  .catch(error => {
    console.error('Error updating event:', error);
  });
};
  



  return (
    <div>
      <h2>Welcome to View the Events!</h2>
      <h3>Upcoming Events:</h3>
      {Array.isArray(events) && events.length === 0 ? (
      <p>No events found.</p>
      ) : (
        <ul>
          {events.map(event =>editingId===event._id? (
            <li key={event._id}>
                            <form onSubmit={submitEdit} style={{ display: 'inline' }}>
                            <input
                    name="title"
                    value={form.title}
                    onChange={handleEditChange}
                    />

                            <input
                            name="date"
                            type='date'
                            value={form.date}
                            onChange={handleEditChange}/>

                             <button type="submit">Save</button>

                           <button type='button' onClick={()=>setEditingId(null)}>
                            
                            Cancel
                            </button>
                            </form>
                            </li>
          ):(
            <li key={event._id}>
                     <strong>{event.title}</strong> - {event.date.split('T')[0]}{' '}
                {/* <Link to={`/event/${event._id}`}>View Details</Link>{' '} */}
                <Link to={`/events/${event._id}`}>View Details</Link>
                
                <button onClick={() => startEdit(event)}>Edit</button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

            
export default HomePage;