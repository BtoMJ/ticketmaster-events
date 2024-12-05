import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { RiCalendarScheduleLine } from "react-icons/ri";
import './Detail.css';

const Detail = () => {

    const { eventId } = useParams();

    const [eventData, setEventData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEventData = async () => {
            try{
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=QoiWu7AKhbFxMLio92aB2jiLRKkhkK6l`);
                const data = await response.json();
                setEventData(data);
                setIsLoading(false);
            } catch (error) {
                setEventData({});
                setError(error);
                setIsLoading(false);
            }
        };
        fetchEventData();
    }, []);

    if(isLoading && Object.keys(eventData) === 0) return <div>Cargando detalles del evento...</div>

    if(Object.keys(error) > 0) return <div>Ha ocurrido un error...</div>

    console.log(eventData);
    return(
        <div className="detail-container">

            <div className="info-detail">

                <div className="image-event-detail">
                    <img src={eventData.images?.[5].url} alt="imagen del evento"/>
                    <img className="seats-events" src={eventData.seatmap?.staticUrl} alt="imagen de los asientos no disponible" />
                </div>

                <div className="info-detail-event">
                    <h3>{eventData.name}</h3>
                    <h4>Tipo: {eventData.classifications?.[0].segment.name} / Género: {eventData.classifications?.[0].subGenre.name}</h4>
                    <h2>Precios: ${eventData.priceRanges?.[0].min} hasta ${eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency}</h2>
                    <p className="title-event">Información del evento:</p>
                    <p className="info">{eventData.info ? eventData.info :"Descripción del evento no disponible"}</p>
                    <p className="title-event">Fecha y hora del evento:</p>
                    <div className="dates-event">
                        <div className="icon-container">
                            <RiCalendarScheduleLine className="icon-date-event"/>
                        </div>
                        <div className="dates-event-info">
                            { 
                                eventData.dates?.start.dateTime ?
                                <p className="day-event">
                                        { 
                                            format(new Date(eventData.dates.start.dateTime), "d LLLL yyyy", {locale: es} )
                                        } 
                                    </p> 
                                    :null
                            }
                            { 
                                eventData.dates?.start.dateTime ?
                                    <p className="hour-event">
                                        { 
                                            format(new Date(eventData.dates.start.dateTime), " H:mm ", {locale: es} )
                                        } 
                                        hrs
                                    </p> 
                                    :null
                            }
                        </div>
                    </div>
                    <div className="event-notes">
                        <p>{eventData.pleaseNote}</p>
                    </div>
                    <div className="links">
                        <a className="link-event-detail" href="/">Volver</a>
                        <a className="link-event-detail" href={eventData.url} target="_blank">Obtener Boletos</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Detail;