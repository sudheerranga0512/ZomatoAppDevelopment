import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './home';
import Details from './details';
import Header from './header';
import Search from './search';
import Welcome from'./welcome';
import Restaurant from './restdetails';
import OrderForms from './forms';
import OrderDisplay from './orderDisplay';


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>

                <Route  path="/Home" component={Home}></Route>
                <Route path="/Details/:id" component={Details}></Route>
                <Route path="/rest/:id" component={Restaurant}></Route>
                <Route path="/order/:id" component={OrderForms}></Route>
                <Route path="/orderDisplay" component={OrderDisplay}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;