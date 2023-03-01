import { Route, Routes } from '@solidjs/router';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
    return (
        <Routes>
            <Route path="/" element={Layout}>
                <Route path="/" element={Home}></Route>
                <Route path="/about" element={About}></Route>
                <Route path="*" element={NotFound}></Route>
            </Route>
        </Routes>
    );
}

export default App;
