import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GlobalContainer from './components/pages/GlobalContainer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Contact from './components/pages/Contact';
import Location from './components/pages/Location';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<GlobalContainer />}>
      <Route index element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/location' element={<Location />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  </Routes>
</BrowserRouter>
  
)};

export default App;
