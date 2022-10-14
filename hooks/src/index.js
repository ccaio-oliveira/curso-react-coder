import './index.css';
import ReactDOM from 'react-dom/client';

import App from './views/App';
import DataContext, { data } from './data/DataContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <App />
    </>
)