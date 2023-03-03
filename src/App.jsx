import { Route, Routes, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import Layout from './components/Layout';
import About from './pages/About';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import store from './redux/strore';
import { Provider } from 'solid-redux-primitives';
const Home = lazy(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return import('./pages/Home');
});

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={Layout}>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/about"
                        element={
                            <Provider store={store}>
                                <About />
                            </Provider>
                        }
                    ></Route>
                    <Route path="*" element={NotFound}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
