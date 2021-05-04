import { Route, Redirect } from 'react-router-dom';

import auth from '../services/authService'
export const ProtectedRoute = ({component: Component, ...rest}) => {
    
   
  return (
    <Route {...rest} render={ props => {
      if(auth.authenticated) {
        return <Component {...props} />
      } else {
        return <Redirect to={{pathname: '/login', state:{ from: props.location }}} />
      }
    }} />
  )

}