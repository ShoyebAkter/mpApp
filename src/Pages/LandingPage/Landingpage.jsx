import { Allies } from "./Allies/Allies"
import { BusinessInsight } from "./BusinessInsight/BusinessInsight"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"
import { Integration } from "./Integration/Integration"
import { Introduction } from "./Introduction"

export const Landingpage = () => {
  return (
    <div className="bg-slate-200 h-screen" >
        <Introduction/>
        <BusinessInsight/>
        <Integration/>
        <Allies/>
        <Contact/>
        <Footer/>
    </div>
  )
}
