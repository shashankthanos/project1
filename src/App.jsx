import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mouseOverWindow, setMouseOverWindow] = useState(true);


    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterWindow = () => {
        setMouseOverWindow(true);
    };

    const handleMouseLeaveWindow = () => {
        setMouseOverWindow(false);
    };
    return (
        <div className="app"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnterWindow}
            onMouseLeave={handleMouseLeaveWindow}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/:user" element={<Home />} /> */}
                </Routes>
            </Router>
            {mouseOverWindow && <CustomCursor position={mousePosition} />}
        </div>
    );
}

export default App;
