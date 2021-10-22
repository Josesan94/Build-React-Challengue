import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import {LoginButton} from './Login';
import { LogoutButton } from './logout';
import {Profile} from './profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {NotFoundPage} from './NotFoundPage'
import { PrivateRoute } from './PrivateRoute';
import {Home} from './home'

function App() {
  const {isAuthenticated} = useAuth0();


  return (
    <Router>
      <header className="App-header">
        <main>
        {isAuthenticated ? 
              (
                <div>
                <Profile />
                <LogoutButton />
                </div>
              ) 
              :
              <LoginButton/>
              }
         
      
      

      <Switch>
        <Route exact path ='/' component ={LoginButton} />
        <PrivateRoute  path="/profile" component={Profile} auth ={isAuthenticated}  />
        <Route path ="*" component ={NotFoundPage}/>

      </Switch>
        
      </main>
      
      
             </header>
      </Router>
      );
}

export default App;



{/* {isAuthenticated ? 
              (
              <>
                <Profile />
                <LogoutButton/>
              </>
              ) 
              :
              (
                <div>
               
              <LoginButton />
                 </div>
              )
      
              } */}