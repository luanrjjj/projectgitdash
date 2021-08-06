
import GlobalStyle from './styles/global';
import UserSearch from './pages/UserSearch/'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import {ToastProvider} from 'react-toast-notifications'

function App() {
  return (
    <>
    <ToastProvider>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    </ToastProvider>
    <GlobalStyle/>

    
  </>
  );
}

export default App;
