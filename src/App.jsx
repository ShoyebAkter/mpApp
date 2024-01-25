
import Login from './Pages/Authentication/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Subscription from './Pages/Authentication/Subscription'
import BusinessChart from './Pages/EulerMail/BusinessChart'
import { Main } from './Pages/BusinessOverview/Main'
import { CustomerBehaviour } from './Pages/CustomerBehaviour/CustomerBehaviour'
import { CampaignResult } from './Pages/CampaignResult/CampaignResult'

import { CampaignDesign } from './Pages/Campaign/CampaignDesign'
import { LoginHeader } from './Pages/Header/LoginHeader'
import { Landingpage } from './Pages/LandingPage/Landingpage'
import { FacebookData } from './Pages/SocialMedia/FacebookData'
import { Policy } from './Pages/Policy/Policy'
import AdminDashboard from './Pages/AdminPanel/AdminDashboard'


function App() {
  
  return (
    <>
      <LoginHeader/>
      <Routes>
        <Route exact path="/" element={<Landingpage />} />
        <Route path="/eulermail" element={<BusinessChart />} />
        <Route path="/businessoverview" element={<Main />} />
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path="/customerBehaviour" element={<CustomerBehaviour />} />
        <Route path="/campaignresult" element={<CampaignResult />} />
        <Route path="/socialmedia" element={<FacebookData  />} >
        </Route>
        <Route path="/campaignerdesign" element={<CampaignDesign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  )
}

export default App
