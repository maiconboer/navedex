import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

// pages
import Login from '../pages/Login';
import Home from '../pages/Home';
import AddNaver from '../pages/AddNaver';
import EditNaver from '../pages/EditNaver';
import Page404 from '../pages/Page404';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { login } = React.useContext(UserContext);

  return (
    <Route {...rest} render={props => (
      login === true 
      ? 
        ( <Component {...props} /> ) 
      : 
        (
          <Redirect to={{ pathname: '/login', state: { from: props.location}}} />
        )
    )}
    />
  )
}

const Routes = () => {
  return (
    <Switch>  
     
      {/* private routes */}
      <PrivateRoute path='/' exact component={Home} />
      <PrivateRoute path='/add-naver' component={AddNaver} />
      <PrivateRoute path='/edit-naver' component={EditNaver} />

      {/* public routes */}
      <Route path='/login' exact component={Login} />
      <Route path='*' component={Page404} /> 
      
    </Switch>
  )
}

export default Routes;