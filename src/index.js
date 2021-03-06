import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-tbbo0n5t.us.auth0.com" clientId="3ro5Is8K8wlgCWrhtsPTLVh4YJdoESqI"
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


