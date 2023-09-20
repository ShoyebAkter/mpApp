import { Allies } from "./Allies/Allies"
import { Contact } from "./Contact/Contact"
import { Integration } from "./Integration/Integration"
import { Introduction } from "./Introduction"

export const Landingpage = () => {
  return (
    <div className="bg-slate-200 h-screen" >
        <Introduction/>
        <Integration/>
        <Allies/>
        <Contact/>
    </div>
  )
}
