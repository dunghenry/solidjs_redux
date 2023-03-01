/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import './index.css';
import App from './App';
import store from './redux/strore';
import { Provider } from 'solid-redux-primitives';
import { GlobalContextProvider } from './store/GlobalContext';
// import { GlobalContextProvider } from './GlobalContext';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
    );
}

render(
    () => (
        <Router>
            <GlobalContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </GlobalContextProvider>
        </Router>
    ),
    root,
);
