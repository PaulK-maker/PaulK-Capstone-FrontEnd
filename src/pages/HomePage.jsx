
import {getEvents, updateEvent} from '../services/eventService';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../services/eventService';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => { // component to list and edit events
  const [events, setEvents] = useState([]); // state to store list of events from the backend
  const [editingId,setEditingId] =useState(null); // state to track which event is being edited 
  const [form,setForm] =useState({title: '', date: ''}); // state to hold the form data when editing event
  console.log(events)

  // useEffect(() => {
    
  //   getEvents()
  //   // .then(response => setEvents(response.data))
  //   .then(response => setEvents(Array.isArray(response.data) ? response.data : []))
  //   .catch(error => console.error('Error fetching events:', error));
  //   setEvents([]);

  // }, []);

  // fetch events from back end when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3001/api/events')
      .then(response => {
        // store events in state; handle both array or wrapped in event key
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
// update form state as user types
const handleEditChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
// submit edited event to the back end
const submitEdit = async (e)=>{
  e.preventDefault();

  try{

  await updateEvent(editingId, form);
  // .then(() => {
    setEditingId(null);
//refresh event list after succesful update
    const response = await axios.get('http://localhost:3001/api/events');
    // return getEvents();

  // })
  setEvents(response.data);
  }catch(error) {
    console.error('Error updating event:', error);
    if (error.response) {
      console.error('Server response:', error.response.data);
    }
    alert('Failed to update event.');
  }
};
//handler to delete event by ID
  const handleDelete = async (id) =>{

    //Confirm with the user before delete
    if (window.confirm("Are you sure you want to delete?")){
      try {
    // call dservice to delete event
    await deleteEvent(id);
    //deleted event removed from state
    setEvents(events.filter(event=>event._id !==id));
      }catch(error){
        console.error('error deleting event:', error)
        alert('Delete failed')

      }
    }

  };
//render UI
  return (
    <div className="event-list-container">
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
                <button
                onClick={()=> handleDelete(event._id)}
                style={{
                  background: "#7a2817",
                  color: "white",
                  padding: "0.3rem 0.7rem",
                  marginLeft: "0.5rem",
                  cursor: "pointer"
                }}>
                  Delete

                </button>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};


export default HomePage;