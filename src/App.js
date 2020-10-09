import React, { Component , lazy, Suspense } from 'react';
import {Header} from './components';
import { ThemeContext } from './theme/theme-context';
import { themes } from './theme/theme-context';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fetchFavoris } from './store/actions';
import { connect } from 'react-redux'

const LazyFilms = lazy( () => import(/* webpackChunkName: "Films" */'./features/films') )


const LazyFavoris = lazy( () => import(/* webpackChunkName: "Favoris" */'./features/favoris') )


class App extends Component {

  
  constructor(props) {
    super(props);
    
    this.state = {
      theme: themes.light.classes,
      toggleTheme: this.toggleTheme,
    }
  }

 

  toggleTheme = () => {
    if(this.state.theme === themes.light.classes ) {
      this.setState({
        theme:  themes.dark.classes,
      })
    }else {
      this.setState({
        theme:  themes.light.classes,
      })
    }
  }
  

  

  componentDidMount(){
    this.props.fetchFavoris();
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state} >
        
          <div className="App d-flex flex-column">
            <Header />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                  <Route path="/film" component={LazyFilms}/>
                  <Route path="/favoris" component={LazyFavoris} />
                  <Redirect to="/film" />
              </Switch>
            </Suspense>
            
          </div>
        
      </ThemeContext.Provider>
    );
  }
}

export default withRouter(connect(null, {
  fetchFavoris
})(App));
