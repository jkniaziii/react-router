import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/admin';
import ApiComponent from './components/api';
import Guest from './components/guest';
import Home from './components/home';
import Menu from './components/menu';
import NotFound from './components/not-found';
import Profile from './components/profile';
import ProfileLayout from './components/profile-layout';
import { SearchExample } from './components/SearchExample';
import Submenu from './components/sub-menu';
import User from './components/user';
import Layout from './layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
        <Routes>
        
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<SearchExample />} />
          <Route path="/api" element={<ApiComponent />} />
          <Route path="/menu/:id" element={<Submenu />} />
          <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path=":id" element={<User />} />
          <Route path="new" element={<Guest />} />
          </Route>
          
          <Route path="admin" element={<Admin />} />
          <Route path="/à-è-ì-ò-ù" element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
