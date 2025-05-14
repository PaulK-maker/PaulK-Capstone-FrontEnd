import react, { useState } from "react";
import { getEvents } from "../services/eventService";

export default function CreateEvent({onCreate}){
    const [form,setForm]=useState({
        title: '',
        date: '',
        location:'',
        description: '',
        //  organizer: '000000000000000000000000'
    });
    
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
        const { title, date, location, description } = form;

       
        try{ 
            const response= await fetch('http://localhost:3001/api/events',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ title, date, location, description })
            // body:JSON.stringify({...form,
            //     organizer: User._id
      
            

        });
        const data =await response.json();
      
        console.log("Event Created",data);
  
  

      
onCreate(form);

//Reset form after submit
setForm({
    title: '',
    date: '',
    location:'',
    description: ''
});


}catch(error) {
    console.error(error)
}
    }
       
return (
    <form onSubmit={handleSubmit}>
<h2>Create Event</h2>
        <div>
<label>Title:</label>
<input
type="text"
name="title"
value={form.title}
onChange={handleChange}
required/>


        </div>

        <div>
    <label>Date:</label>
    <input
type="date"
name="date"
value={form.date}
onChange={handleChange}
required/>

</div>

<div>
    <label>Location:</label>
    <input
type="text"
name="location"
value={form.location}
onChange={handleChange}
/>

</div>

<div>
    <label>Description:</label>
    <textarea
name="description"
value={form.description}
onChange={handleChange}
/>

</div>
<button type="submit">Create Event</button>
</form>

);
};
// export default createEventForm;


