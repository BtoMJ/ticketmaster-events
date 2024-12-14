import { Link, useRouteError } from "react-router-dom";
import './Error404.css';

const Error404 = () => {

    const error = useRouteError();

    return(
        <div className="error-container">
            <h2> Opss ! Error</h2>
            <h1> { error.status } </h1>
            <p>No hemos encontrado la ruta que buscas</p>
            <Link to="/" className="link-error"> Volver al inicio</Link>
        </div>
    )
}

export default Error404;