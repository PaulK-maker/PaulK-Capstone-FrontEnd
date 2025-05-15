import React from "react";

export default function Footer(){
    return(
        <footer style={{backgroundColor: "#f6f8fa",
            textAlign: "center",
            padding: "1rem",
            margintop: "2rem",
            borderTop:"1px solid #ccc"
        }}>
           <p>&copy;{new Date().getFullYear()}Smart Event. All Rights Reserved</p> 
        </footer>
    )

            

}