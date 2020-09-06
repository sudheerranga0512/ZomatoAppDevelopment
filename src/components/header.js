import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


const Header = () => {
    return(
        
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                
                </div>
                
                <ul className="nav navbar-nav">
                    
                <li class="li" ><Link to="">Edumato</Link></li>
                    <li class="li"><Link to="/Home">Home</Link></li>
                    <li class="li"><Link to="/Details">Details</Link></li>
                    

                </ul>
                </div>
            
            </nav>

    )
}

export default Header;