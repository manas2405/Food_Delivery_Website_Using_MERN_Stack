import NavBar from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Otp from './pages/Otp/Otp'

function App() {  
  return (
    <>
      <div className='app'>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
