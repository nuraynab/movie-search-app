import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/HeaderComponent';
import Home from "./components/HomeComponent";
import AboutMovie from "./components/AboutMovieComponent";
import store from "./redux/configureStore";

class App extends React.Component{

  render() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/movie/:id' component={AboutMovie} />
                        <Redirect to='/' />
                    </Switch>

                </div>
            </BrowserRouter>
        </Provider>


    );
  }
}

export default App;