import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}