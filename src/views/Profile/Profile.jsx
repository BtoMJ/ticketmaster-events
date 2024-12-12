// import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MyInfo from './MyInfo.jsx';
import LinkedEvents from './LikedEvents.jsx';
import './Profile.css';

const Profle = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const { pathname } = useLocation();
    // const navigate = useNavigate;

    // const handleTabClick = ( path ) => {
    //     navigate(`/profile/${path}`);
    // }

    return(
        <div className="profile-container">

        <Box className="box-tab">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                    <Tab label="Mi información" value="1" />
                    <Tab label="Eventos Favoritos" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1"> <MyInfo /> </TabPanel>
                <TabPanel value="2"> <LinkedEvents  /> </TabPanel>
            </TabContext>
        </Box>

            {/* <div className="tabs-container">
                <span
                    className={ `${pathname.includes('my-info') ? 'active' : '' }` }
                    onClick={ () => handleTabClick('my-info') }
                >
                    Mi Información
                </span>
                <span
                    className={ `${pathname.includes('liked-events') ? 'active' : '' }` }
                    onClick={ () => handleTabClick('liked-events') }
                >
                    Eventos Favoritos
                </span>

            </div> */}

            {/* <Outlet /> */}
        </div>
    )
}

export default Profle; 