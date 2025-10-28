import React from "react";
import { Route, Routes } from 'react-router-dom';
import RecipesList from "./RecipesList";
import FavoritesList from "./FavoritesList"
import Register from "./Register/Register";
import Login from "./LogIn/LogIn";


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<RecipesList />} />
        <Route path='/favorites' element={<FavoritesList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>
  );
}

export default Main;
