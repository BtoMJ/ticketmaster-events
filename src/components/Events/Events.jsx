import { useNavigate } from "react-router-dom";
import EventItem from "../EventItem/EventItem";
import './Events.css';

const Events = ( { searchTerm, events } ) => {

   const navigate = useNavigate();

    const handleEventItemClick = (id) => {
        navigate(`/detail/${id}`);
    }

    const renderEvents = () => {

        let eventsFiltered = events;

        if(searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm))
        }

        return eventsFiltered.map ((eventItem) => 
            <EventItem 
                key={`even-item-${eventItem.id}`}
                name={eventItem.name}
                info = {eventItem.info}
                image={eventItem.images[1].url}
                onEventClick = {handleEventItemClick}
                id={eventItem.id}
                type={eventItem.classifications[0].segment.name}
                genre={eventItem.classifications[0].subGenre.name}
            />);
    }
    
    console.log(events)

    return(
        <div className="events-container">
            {/* Eventos */}
            { renderEvents() }
        </div>
    )
}

export default Events;