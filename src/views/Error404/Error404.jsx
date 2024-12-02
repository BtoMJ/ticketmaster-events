import { useRouteError } from "react-router-dom";

const Error404 = () => {

    const error = useRouteError();

    return(
        <div>
            <h2> { error.status } Ops !</h2>
            <p>No hemos encontrado la ruta que buscas</p>
            <p> { error.data } </p>
        </div>
    )
}

export default Error404;