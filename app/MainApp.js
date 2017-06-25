import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './Home';
import ContactsAppContainer from './ContactsAppContainer';

class MainApp extends Component{


    render(){
        return(
            <div>
                <Link to='/Search'>Go to Search</Link>
                {this.props.children}
            </div>
        )
    }
}


render(
    <Router>
        <Route path='/' component={MainApp}>
            <IndexRoute component={Home}/>
            <Route path="Search" component={ContactsAppContainer}>
            </Route>
        </Route>
    </Router>
    , document.getElementById('root'));

