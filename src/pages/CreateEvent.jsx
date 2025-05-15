import react, { useState } from "react";
import { createEvent} from "../services/eventService";
import { useNavigate } from "react-router-dom";

export default function CreateEvent({onCreate}){
    const [form,setForm]=useState({
        title: '',
        date: '',
        location:'',
        description: '',
        //  organizer: '000000000000000000000000'
    });
    const navigate = useNavigate();
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

   async function handleSubmit(e){
        e.preventDefault();
        if(!form.title || !form.date){
            alert('Title and date are required!');
            return;
        }
        // const { title, date, location, description } = form;

       
        try{ 
            const eventData ={

                

                ...form,
                date: new Date(form.date).toISOString(),
                organizer: "680a7bce593004e67cddb12f"
                };
            const created = await createEvent(eventData);
            // const response= await fetch('http://localhost:3001/api/events',{
            // method: "POST",
            // headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({ title, date, location, description })
            // body:JSON.stringify({...form,
            //     organizer: User._id
      
             if (onCreate) onCreate(created)

       
//         const data =await response.json();
      
//         console.log("Event Created",data);

  

      
// onCreate(form);

//Reset form after submit
setForm({
    title: '',
    date: '',
    location:'',
    description: ''
});

navigate('/events');
}catch(error) {
    console.log('Server error:', error.response.data);
}
    }
       
return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, 
    margin: "3 rem auto",
     background: "#fff",
      padding: "2rem",
       borderRadius: "8px",boxShadow:"0 2px 8px rgba(0,0,0,0.07)" }}>
<h2 style={{textAlign: "center"}}> Create Event</h2>
<div style={{marginBottom: "1rem"}}>
    <label>Title</label>

    <input 
    type="text"
    name="title"
    value={form.title}
    onChange={handleChange}
    required
    style={{width: "100%"}} />
    </div>

<div style={{marginBottom: "1rem"}}>
    <label>Date:</label>

    <input 
    type="date"
    name="date"
    value={form.date}
    onChange={handleChange}
    required
    style={{width: "100%"}} />

</div>

<div style={{marginBottom: "1rem"}}>
    <label>Location:</label>

    <input 
    type="text"
    name="location"
    value={form.location}
    onChange={handleChange}
    required
    style={{width: "100%"}} />

</div>
<div style={{marginBottom: "1rem"}}>
    <label>Description:</label>

    <textarea 
    name="description"
    value={form.description}
    onChange={handleChange}
    required
    style={{width: "100%",
        minHeight: "80px",
     padding: "0.5rem",
     borderRadius: "4px",border:"1px solid #ccc",
     resize:"vertical"}} />
    
</div>

<button 
type="submit" style={{
     width: "100%", 
     padding: "0.5rem",
      borderRadius: "4px",
       background: "#2575fc", 
       color: "#fff", border: "none" 
       }}> Create Event
            </button>
        </form>
    );
}