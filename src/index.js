import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.render(
  <LanguageProvider>
    <App/>
  </LanguageProvider>, 
  document.querySelector("#root")
)



const index = () => {
  return (
    
    <div></div>
  )
}

export default index