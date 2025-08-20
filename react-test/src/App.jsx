
import { Routes, Route } from 'react-router-dom';
import DataListPage from './pages/DataListPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:category" element={<DataListPage />} />
    </Routes>
  );
}

export default App;

