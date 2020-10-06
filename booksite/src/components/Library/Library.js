import React, { Component } from 'react';
// import Booklist from '../Booklist';
import Book from '../Book';
import SingleBook from '../SingleBook';
import App from '../../App';
 
import Home from '../Home';
import About from '../About';
// import Error from '../Error';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
 
class Library extends Component {
  render() {
    return (   
		<div>
			<BrowserRouter>
				<NavLink className="navButton" to="/"><button>App</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink className="navButton" to="/library"><button>Home</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink className="navButton" to="/about"><button>About</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<NavLink className="navButton" to="/single"><button>Single</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Switch>
					<Route path="/" component={<App />} exact/>
					<Route path="/library" component={Home} exact/>
					<Route path="/about" component={About} exact/>
					<Route path="/book" component={Book}/>
					{/* <Route path="/single" onClick={SingleBook()}/> */}
				</Switch>
			</BrowserRouter>
		</div> 
    );
  }
}
 
export default Library;

