//imports for routing and state
import{BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
//React hook for managing state
import { useState } from 'react';
// Importinf components//
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import HomePage from "./pages/HomePage";
import './App.css'
import AppNavbar from './components/Navbar';
import MyRsvps from './pages/MyRsvps';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './pages/EventDetails';
// import About from './pages/About'
import SearchEvents from './pages/SearchEvents';
import UpdateEvent from './pages/updateEvent';
import EditEventById from './pages/updateEvent';
import Login from './pages/Login';
import Register from './pages/Register'; 
import About from './pages/About';
import EventPage from './pages/EventPage'; 

import { getUserRsvps } from "./services/eventService";

// const express = require('express');


// Main App component
function App() {
  const [events, setEvents] =useState([]);
// New event function
  function handleCreateEvent(newEvent){
    //use spread operator to add new event without changing original array
  const EventWithId= {...newEvent, id: Date.now()};
  setEvents([...events,EventWithId]);
}
 //App return to UI//   
return (
      <BrowserRouter>
        <AppNavbar />
        <main className="container mt-4">
        <Routes>
          {/* list of events */}
          <Route path="/events" element={<HomePage events={events} />} />
          {/* new event */}
          <Route path="/create" element={<CreateEvent onCreate={handleCreateEvent} />} />
          {/* event Details */}
          <Route path="/events/:id" element={<EventDetails />} />

           <Route path="myrsvps" element={<MyRsvps/>}/>
           
           <Route path="/search" element={<SearchEvents />} />

           <Route path="/event/:id/edit" element={<EditEventById />} />
           <Route path="/about" element={<About />} />

           <Route path="/login" element={<Login />} />

           <Route path="/register" element={<Register />} />

           {/* <Route path="/event/:id/edit" element={<UpdateEvent />} /> */}
           <Route path="/" element={<Navigate to="/events" />} />
           

           <Route path="/events/:id" element={<EventPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}



export default App
