
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <AppRouter/>
    </div>

    </BrowserRouter>
  );
}

export default App;
