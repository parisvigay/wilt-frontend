import './App.css';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/Landing/Landing'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/features" element={<Landing />}/>
        <Route path="/how-it-works" element={<Landing />}/>
      </Routes>
    </>
  )
}