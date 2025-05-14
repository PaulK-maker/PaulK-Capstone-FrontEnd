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
  
    const response = await axios.put(`${baseURL}/${id}`, updatedData);
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




