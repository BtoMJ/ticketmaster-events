import { useState, useRef, useEffect } from 'react';
import Events from '../../components/Events/Events';
import NavBar from '../../components/NavBar/Navbar';
import useEventsData from "../../hooks/useEventsData";

const Home = () => {

  const { events, isLoading, error, fetchEvents } = useEventsData();
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  useEffect(() =>{
    fetchEvents();
  }, []);

  const handleNavBarSearch = (term) =>{
      console.log(containerRef.current);
      setSearchTerm(term);
      fetchEvents(`&keyword=${term}`);
  }

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef} />
      { isLoading ? <div>Cargando información...</div> : <Events searchTerm={searchTerm} events={events} /> }
      { !!error && <div>Ha ocurrido un error</div> }
    </>
  )
}

export default Home;