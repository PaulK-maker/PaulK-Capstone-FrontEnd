
import React,{useEffect, useState} from "react";
import{data, Link} from "react-router-dom";
import {getEvents} from "../services/eventService";

export default function LandingPage() {
    const [featured, setFeatured]=useState(null);

    useEffect(()=>{
        getEvents()
        .then(data=>{
            if (Array.isArray(data) && data.length>0) setFeatured(data[0]);
        })
        .catch(()=>setFeatured(null));
    },[]);

    return(
        <div style={{maxWidth: 700, margin: "2rem auto",textAlign: "center"}}>
            <div style={{background: "linear-gradient(90deg, #6a11b 0%, #2575fc 100%)",
                color: "white",
                padding: "2rem",
                borderRadius: "0.5rem",
                marginBottom: '2rem'
            }}>
                <div className="welcome-section"></div>
                <h1>Welcome to plan Your Event</h1>

                <p>Discover, create, and manage events with ease.</p>
                <Link to="/events" className="btn-Secondary">
                   Browse Events 
                </Link>
                {featured && (
                    <div style={{
                        background:"#f6f8fa",
                        padding: "1rem",
                        borderRadius: "0.5rem"
                    }}>
                        <h2>Featured Event</h2>
                        <h3>{featured.title}</h3>
                        <p>{featured.description}

                        </p>
                        <p>
                        <strong>Date:</strong>{new Date(featured.Date).toLocaleDateString()}<br />
                        <strong>Location:</strong> {featured.location}
                        </p>
                     <Link to={`/events/${featured._id}`} style={{ color: "#2575fc" }}>
                     View Details
                     </Link>


                    </div>
                )}

            </div>

        </div>
    );
}