import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addpage from './components/Addpage';
import EditPage from './components/EditPage';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite authors</h1>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/new' element={<Addpage/>} />
        <Route path='/edit/:_id' element={<EditPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
