import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavbarMain from './common/NavbarMain';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './features/dashboard/Dashboard';
import { Menu } from './features/menu/Menu';
import { NewItem } from './features/new-ingredient/NewItem';
import { Ingredients } from './features/ingredients/Ingredients';
import { Food } from './features/food/Food';
import { NewFood } from './features/new-food/NewFood';

function App() {
  return (
    <>
       <NavbarMain />
    <div className="mt-4"> juje </div>
    <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="menu" element={<Menu />} />

          <Route path="food" element={<Food />} />

          <Route path="ingredients" element={<Ingredients />} />

          <Route path="new-item" element={<NewItem />} />
          <Route path="new-food" element={<NewFood />} />
    </Routes>
    </>
  )
}

export default App;
