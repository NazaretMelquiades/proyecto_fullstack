// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import FavoritesList from "./components/Main/FavoritesList/FavoritesList";
// import FavoritesList from "./components/FavoritesList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
