import React from 'react';
import Search from './search';

import Quick from './quicksearch';
const Home = (props) => {

   /* const handleRestaurent = (data) => {
        props.history.push(`/rest/${data}`)
    }*/
    return(
        <div>
            
            <Search /* restid={(data) => {handleRestaurent(data)}}*//> 
    
            <Quick/>
            
        </div>
        
    )
}
export default Home;
