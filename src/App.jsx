
import Login from './Pages/Authentication/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Pages/Header/Header'
import Signup from './Pages/Authentication/Signup'
import BusinessChart from './Pages/EulerMail/BusinessChart'
import { Main } from './Pages/BusinessOverview/Main'
import { CustomerBehaviour } from './Pages/CustomerBehaviour/CustomerBehaviour'
import { CampaignResult } from './Pages/CampaignResult/CampaignResult'
import { SocialMedia } from './Pages/SocialMedia/SocialMedia'
import { CampaignDesign } from './Pages/Campaign/CampaignDesign'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<BusinessChart />}/>
        <Route path="/businessoverview" element={<Main />}/>
        <Route path="/customerBehaviour" element={<CustomerBehaviour />}/>
        <Route path="/campaignresult" element={<CampaignResult />}/>
        <Route path="/socialmedia" element={<SocialMedia />}/>
        <Route path="/campaignerdesign" element={<CampaignDesign />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
