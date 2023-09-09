
import Login from './Pages/Authentication/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Signup from './Pages/Authentication/Signup'
import BusinessChart from './Pages/BusinessOverview/BusinessChart'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<BusinessChart />}/>
        {/* <Route path="/businessoverview" element={<BusinessChart />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
