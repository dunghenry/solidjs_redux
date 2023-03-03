/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
import App from './App';
import { GlobalContextProvider } from './store/GlobalContext';
// import { GlobalContextProvider } from './GlobalContext';
import store from './redux/strore';
import { Provider } from 'solid-redux-primitives';
const root = document.getElementById('root');

render(
    () => (
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    ),
    root,
);
