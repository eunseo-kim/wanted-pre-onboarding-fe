import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><MainPage/></div>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<div>not found</div>}/>
    </Routes>
  )
}

export default App;
