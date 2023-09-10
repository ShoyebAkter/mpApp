
import Login from './Pages/Authentication/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Signup from './Pages/Authentication/Signup'
import BusinessChart from './Pages/EulerMail/BusinessChart'
import { Main } from './Pages/BusinessOverview/Main'
import { CustomerBehaviour } from './Pages/CustomerBehaviour/CustomerBehaviour'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<BusinessChart />}/>
        <Route path="/businessoverview" element={<Main />}/>
        <Route path="/customerBehaviour" element={<CustomerBehaviour />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
