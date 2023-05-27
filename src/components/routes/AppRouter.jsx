import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../pages/ProductPage';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route index element = {<ProductPage/>} />
            <Route path="/" element = {<ProductPage/>} />
        </Routes>
        </Router>
  )
}
