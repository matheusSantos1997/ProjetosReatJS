import './Content.css';
import { Switch, Route } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content = (props) => {
     return(
         <main className="Content">
            <Switch>
                <Route exact path="/"> {/* exact só vai entrar no home se existir / apenas */}
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/param/:id">
                    <Param />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
         </main>
     );
}

export default Content;