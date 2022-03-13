import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';

function ErrorScreen({ error }) {
  return (
    <div className="error">
      <h3>We are sorry ... something went wrong</h3>
      <p>We cannnot process your request at this moment.</p>
      <p>ERROR: {error.message}</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary fallback={ErrorScreen}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
