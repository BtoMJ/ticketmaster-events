import { useEffect, useState } from "react";
import EventItem from '../../components/EventItem/EventItem.jsx';
import { LIKED_EVENTS_STORAGE_KEY } from "../../utils/constants";

const LikedEvents = () => {

    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const fetchEventsDetails = async () => {
            try{
                setIsLoading(true);

                const LikedEvents = JSON.parse(localStorage.getItem( LIKED_EVENTS_STORAGE_KEY )) || [];

                const results = [];

                for ( const eventId of LikedEvents) {
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`);
                    const data = await response.json();
                    results.push(data);
                }

                console.log("LIKED RESULTS: ",results)
                
                setEvents(results);
                console.log("EVENTS STATE: ",events)
            } catch (error){
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEventsDetails();
    }, []);

    const handleEventItemClick = () => {

    }

    if (Object.keys(error).length > 0 ) return <div>Ha ocurrido un error</div>
    if (isLoading ) return <div>Cargando....</div>

    return(
        <div className="events-container">
            {
                events.map((event, index) => (
                    <EventItem 
                        key={`liked-event-item-${event.id}-${index}`}
                        name={event.name}
                        info = {event.info}
                        image={event.images[4].url}
                        onEventClick = {handleEventItemClick}
                        id={event.id}
                        type={event.classifications[0].segment.name}
                        genre={event.classifications[0].subGenre.name}
                    />
                ))
            }
        </div>
    )
};

export default LikedEvents;