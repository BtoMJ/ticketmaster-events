import { useState, useRef, useEffect } from 'react';
import Events from '../../components/Events/Events';
import NavBar from '../../components/NavBar/Navbar';
import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from 'react-paginate';
import './Home.css';

const Home = () => {

  const { events, isLoading, error, fetchEvents, page } = useEventsData();
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  useEffect(() =>{
    fetchEvents();
  }, []);

  const handleNavBarSearch = (term) =>{
      console.log(containerRef.current);
      setSearchTerm(term);
      fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ( { selected } ) => {
    console.log(selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  }

  const renderEvents = () => {
    if (isLoading) return <div>Cargando información...</div>;
    if(error) return <div>Ha ocurrido un error</div>
    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    )  
  }

  return (
    <>
      <NavBar onSearch={handleNavBarSearch} ref={containerRef} />
      { renderEvents() }
    </>
  )
}

export default Home;