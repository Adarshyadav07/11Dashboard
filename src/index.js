import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
  
// )

ReactDOM.render(<ContextProvider>
    <App />
  </ContextProvider>, document.getElementById('root'))
