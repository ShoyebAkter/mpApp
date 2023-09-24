
import { Fade } from "react-awesome-reveal"
import { Allies } from "./Allies/Allies"
import { BusinessInsight } from "./BusinessInsight/BusinessInsight"
import { Campaign } from "./CampaignCreation/Campaign"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"
import { Integration } from "./Integration/Integration"
import { Introduction } from "./Introduction"
import { RealTImeUpdates } from "./Realtime/RealTImeUpdates"
export const Landingpage = () => {
  
  
  return (
    <div >
      <div className="bg-slate-200 h-screen" >
        <section><Introduction/></section>
        <section id="businessInsight"><BusinessInsight/></section>
       <section id="integration"> <Integration/></section>
       <section id="realtime"> <Fade damping={0.6}><RealTImeUpdates/></Fade></section>
       <section id="campaign"> <Campaign/></section>
        <section id="allies"><Allies/></section>
        <section id="contactUs"><Contact /></section>
        <Footer/>
    </div>
    </div>
  )
}
