
import React,{useEffect, useState} from "react";
import{data, Link} from "react-router-dom";
import {getEvents} from "../services/eventService";
import '../App.css'

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
        // banner section
        <div style={{maxWidth: 700, margin: "2rem auto",textAlign: "center"}}>
            <div style={{background: "linear-gradient(90deg, #6a11b6 0%, #2575fc 100%)",
                color: "white",
                padding: "2rem",
                borderRadius: "0.5rem",
                marginBottom: '2rem'
            }}>
                {/* <div className="welcome-section"></div> */}
                <h1>Welcome to plan Your Event</h1>

                <p>Discover, create, and manage events with ease.</p>
                <Link to="/events" className="btn-Secondary" style={{ color: "white", textDecoration: "underline" }}>
                   Browse Events 
                </Link>
                {/* featured event section */}
                {featured && (
                    <div style={{
                        background:"#1e1e2f",
                        color: "white",
                        padding: "1.5rem",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                    }}>
                        <h2>Featured Event</h2>
                        <h3>{featured.title}</h3>
                        <p>{featured.description}

                        </p>
                        <p>
                        <strong>Date:</strong> {new Date(featured.date).toLocaleDateString()}<br />
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