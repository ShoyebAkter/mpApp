
import { Allies } from "./Allies/Allies"
import { BusinessInsight } from "./BusinessInsight/BusinessInsight"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"
import { Integration } from "./Integration/Integration"
import { Introduction } from "./Introduction"
export const Landingpage = () => {
  
  
  return (
    <div >
      <div className="bg-slate-200 h-screen" >
        <section><Introduction/></section>
        <section id="businessInsight"><BusinessInsight/></section>
       <section id="integration"> <Integration/></section>
        <section id="allies"><Allies/></section>
        <section id="contactUs"><Contact /></section>
        <Footer/>
    </div>
    </div>
  )
}
