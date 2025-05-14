import RSVPbutton from '../components/RSVPButton'

function MyRsvps() {
    return(
        <div>
            <h2>RSVPs</h2>
            {myEvents.map(event=>(
                <div key={event._id}>
                    <h3>{event.title}</h3>
                    <RSVPbutton eventId={event._id}/>
                </div>
            ))}
        </div>
    )

}