import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,Link,IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './Home';
import ContactsAppContainer from './ContactsAppContainer';
import App from './App';
import NewContact from './NewContact';
import EditContact from './EditContact';
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
    <Router history={createBrowserHistory()}>
        <Route path='/' component={MainApp}>
            <IndexRoute component={Home}/>
            <Route component={ContactsAppContainer}>
                <Route path="Search" component={App} />
                <Route path="new" component={NewContact} />
                <Route path="edit/:contact_id" component={EditContact} />
            </Route>
        </Route>
    </Router>
    , document.getElementById('root'));

