import React from 'react';
import './App.css';
import { Route,  Link,  Routes,  BrowserRouter} from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>

      <nav>
        <ul>
        <li>
            <Link to={'/'}>Главная страница (Home)</Link>
          </li>
          <li>
            <Link to={'/page1'}>Страница 1 (Login)</Link>
          </li>
          <li>
            <Link to={'/page2'}>Страница 2 (Register)</Link>
          </li>
          <li>
            <Link to={'/empty'}>Страница 3 (404)</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="page1" element={<Login />} />
        <Route path="page2" element={<Register />} />
        <Route path="*" element={<span>404</span>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
