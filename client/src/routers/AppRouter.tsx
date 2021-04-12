import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { Home } from '../components/home/Home';
import { QandA } from "../components/q&a/q&a";

//ACA VAN TODAS LAS RUTAS


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact path="/"
                        component={Home}
                    />
                    <Route
                        exact path="/home"
                        component={Home}
                    />
                     <Route
                        exact path="/qa"
                        component={QandA}
                    />

                    <Redirect to="/" />

                </Switch>

            </div>
        </Router>
    )
}
