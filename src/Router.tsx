import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import Cars from "pages/Cars";

const Routes = () =>{
    return(
        <BrowserRouter>
                <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cars">
                    <Cars />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;