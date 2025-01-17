import './App.css'
import { BrowserRouter,Route,Routes, useNavigate } from 'react-router-dom'
import Home from './screens/admin/home/Home'
import AuthGuard from './auth/AuthGuard'
import { useUser } from './UserContext';
function App() {
  const Navigate = useNavigate();
  
  return (
  <>
  <BrowserRouter>
  <AuthGuard>
   <Routes>
    <Route path='/admin' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
   </Routes>
  </AuthGuard>
  </BrowserRouter>
  </>
  )
}

export default App
