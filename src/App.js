import React, { Component } from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import GlobalStyles from './styles/Global';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './components/Navbar/NavBar';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <Router>
       <div className="App">
         <NavBar  navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar} />
          <GlobalStyles />
         <div id="page-body">
         <Switch>
         <Route path="/" component={HomePage} exact />
         <Route path="/about" component={AboutPage} />
         <Route path="/articles-list" component={ArticlesListPage} />
         <Route path="/article/:name" component={ArticlePage} />
         <Route component={NotFoundPage} />
         </Switch>
         </div>
       </div>
      </Router>
    );
  }
}

export default App;
