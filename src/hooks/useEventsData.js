import { useState } from 'react';

const useEventsData = () =>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const fetchEvents = async ( params ) =>{
        try{
            const response  =await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=QoiWu7AKhbFxMLio92aB2jiLRKkhkK6l${params?.length ? params : ''}`);
            const data = await response.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
        } catch (error){
            setError(error);
        }
    };

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
        fetchEvents
    }

}

export default useEventsData;