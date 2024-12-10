import { Outlet, useLocation, useNavigate } from "react-router-dom";
import './Profile.css';

const Profle = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate;

    const handleTabClick = ( path ) => {
        navigate(`/profile/${path}`);
    }

    return(
        <div className="profile-container">

            <div className="user-info-container">

            </div>
            <div className="tabs-container">
                <span
                    className={
                        `${pathname.includes('my-info') ? 'active' : '' }`
                    }
                    onClick={handleTabClick('my-info')}
                    >
                    Mi Información
                </span>
                <span
                     className={
                         `${pathname.includes('liked-events') ? 'active' : '' }`
                    }
                    onClick={handleTabClick('liked-events')}
                >
                    Eventos Favoritos
                </span>

            </div>

            <Outlet />
        </div>
    )
}

export default Profle; 