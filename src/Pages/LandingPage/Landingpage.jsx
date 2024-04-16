
import { Allies } from "./Allies/Allies"
import { BusinessInsight } from "./BusinessInsight/BusinessInsight"
import { Campaign } from "./CampaignCreation/Campaign"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"
import { Integration } from "./Integration/Integration"
import { Introduction } from "./Introduction"
import { RealTImeUpdates } from "./Realtime/RealTImeUpdates"
import Header from "../Header/Header"
import './Introduction.css'
import { auth } from "../../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { Analysis } from "./Analysis/Analysis"
import SecuritySec from "./Security/SecuritySec"
import PricingSec from "./Pricing/PricingSec"
export const Landingpage = () => {
  const [user] = useAuthState(auth);

  return (
    <div >
      <div >
        <section id="header">{
          !user &&
          <Header />
        }</section>
        <section id="introduction" ><Introduction /></section>
        <section > <Analysis /></section>
        <section id="businessInsight"><BusinessInsight /></section>
        <section id="integration"> <Integration /></section>
        <section id="realtime"> <RealTImeUpdates /></section>
        <section id="campaign"> <Campaign /></section>
        <section><SecuritySec/></section>
        <section><PricingSec/></section>
        <section id="allies"><Allies /></section>
        <section id="contactUs"><Contact /></section>
        <Footer />
      </div>
    </div>
  )
}
