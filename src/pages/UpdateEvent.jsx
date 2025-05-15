import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEventById, updateEvent } from "../services/eventService"



export default function EditEventById() {
  const [event, setEvent] = useState(null)

  const {id} = useParams()

  const nav = useNavigate()

  useEffect(() => {
    getEventById(id).then(res => setEvent(res.data));
  
  },[id]);
  
  const editTheEvent= (e) => {
    e.preventDefault()
    const updatedEvent = {
      title: e.target.title.value, 
      location: e.target.location.value,
      date: e.target.date.value,
     };
     updateEvent(id,updatedEvent).then(() =>{nav(`/events${id}`)})

  }
  return (
    <>
   <h2>Edit Event</h2>
      {event && (
        <form onSubmit={editTheEvent}>
          Title: <input type="text" name="title" defaultValue={event.title} /><br />
          Location: <input type="text" name="location" defaultValue={event.location} /><br />
          Date: <input type="date" name="date" defaultValue={event.date?.split("T")[0]} /><br />
          <input type="submit" value="Update Event" />
        </form>
      )}
    </>
  );
}
