import { useState, forwardRef, useImperativeHandle } from "react";

const NavBar = forwardRef( ( { onSearch }, ref ) => {

    const [search, setSearch] = useState('');
    

    // useEffect(() => {
    
    // }, [ search, onSearch ])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSearch(search)
        }
        console.log(e)
    }

    useImperativeHandle( ref, () => ({
        search,
    }));

    return(
        <div ref={ref}>
            <p>Mi boletera</p>
            <input 
                placeholder="Busca tu evento favorito" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    )
});

NavBar.displayName = "NavBar";

export default NavBar;