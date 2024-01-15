import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
// import Submit from '../component/Submit';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    // {path: '/main', element: <Submit />},
]);

export default router;