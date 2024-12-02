// import { Link } from "react-router-dom";

const EventItem =( { info, id, name, image, onEventClick} ) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id)
    }

    return(
        <div onClick={() => console.log("padre clickeado")}>
            <img src={image} alt={name}  width={200} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick} > Ver más
                {/* <Link to={`/detail/${id}`}>
                    Ver más 
                </Link> */}
            </button>
        </div>
    )
}

export default EventItem;