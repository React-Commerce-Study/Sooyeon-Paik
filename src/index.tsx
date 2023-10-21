import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const root = createRoot(document.querySelector('#root') as Element);

root.render(
   <App />
);
