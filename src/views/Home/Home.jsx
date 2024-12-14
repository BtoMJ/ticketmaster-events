import { useState, useRef, useEffect } from 'react';
import Events from '../../components/Events/Events';
import NavBar from '../../components/NavBar/Navbar';
import ReactPaginate from 'react-paginate';
import useEventsResults from '../../state/events-results';
import './Home.css';
import { hatch } from 'ldrs';
hatch.register()

const Home = () => {


  const { data, isLoading, error, fetchEvents } = useEventsResults();
  const events = data?._embedded?.events || [];
  const page = data?.page || {};

  console.log("PAGS: ", page)
  
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef();

  useEffect(() =>{
    fetchEvents();
  }, []);

  const handleNavBarSearch = (term) =>{
      setSearchTerm(term);
      fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ( { selected } ) => {
    console.log("PAG. SELECTED",selected);
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  }

  const renderEvents = () => {
    if (isLoading) 
      return <div className='loading-page'>
            <l-hatch
              size="50"
              stroke="7"
              speed="3.5" 
              color="#340083" 
            ></l-hatch>
          </div>;
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