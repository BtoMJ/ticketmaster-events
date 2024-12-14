// import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useLikeEvents from "../../hooks/useLikeEvents";
import './EventItem.css';

const EventItem =( { info, id, name, image, type, genre, onEventClick} ) => {

    const { isEventLiked, toggleEventLike } = useLikeEvents (id);

    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id)
    }

    const handleLikeClick = () => {
        toggleEventLike();
    }

    return(
        <div className="event-item-container" onClick={() => console.log("padre clickeado")}>
            <div className='title-item-event'>
                <img className='img-event-item' src={image} alt={name} />
            </div>
            <div className='info-item-event'>
                <div className="title-item-info">
                    <h3>{name}</h3>
                    <h4>{type} / {genre}</h4>
                </div>
                <div className="event-info">
                    <p>{info ? info : "Descripción del evento no disponible"}</p>
                </div>
            </div>
            <div className='btn-item-container'>
                <button className={ isEventLiked ? "btn-like" : "btn-no-like"} onClick={handleLikeClick}><FaHeart /></button>
                <button className='btn-see-more' onClick={handleSeeMoreClick} >+ Ver más
                    {/* <Link to={`/detail/${id}`}>
                        Ver más 
                    </Link> */}
                </button>
            </div>
        </div>
    )
}

export default EventItem;




{/* <div className="event-item-container" onClick={() => console.log("padre clickeado")}>
            <div className='title-item-event'>
                <img className='img-event-item' src={image} alt={name} />
                <div className="title-item-info">
                    <h3>{name}</h3>
                    <h4>Tipo: {type} / Género: {genre}</h4>
                </div>
            </div>
            <div className='info-item-event'>
                <p>{info ? info : "Descripción del evento no disponible"}</p>
            </div>
            <div className='btn-item-container'>
                <button className={ isEventLiked ? "btn-like" : "btn-no-like"} onClick={handleLikeClick}><FaHeart /></button>
                <button className='btn-see-more' onClick={handleSeeMoreClick} >+ Ver más
                  
                </button>
            </div>
        </div> */}