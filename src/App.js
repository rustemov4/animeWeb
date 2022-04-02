
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Main from './pages/mainPage';
import AnimePage from './components/animePage/animePage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/anime/:id' element = {<AnimePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
