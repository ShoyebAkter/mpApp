

import { Form } from "./Form"
import { LineSection } from "./LineSection"
import './ContactUs.css'
export const Contact = () => {
  return (
    <div className="contactUsSec">
      
        <div className="flex-1"><LineSection /></div>
        <div className=" formSection "><Form /></div>
      
    </div>
  )
}
