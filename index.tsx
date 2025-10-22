
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  // Don't throw to avoid breaking the dev server; log the error so the developer can fix the HTML.
  console.error("Could not find root element to mount to. Ensure <div id=\"root\"></div> exists in index.html");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
