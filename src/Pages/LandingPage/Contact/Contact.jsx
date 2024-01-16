

import { Form } from "./Form"
import { LineSection } from "./LineSection"
import './ContactUs.css'
export const Contact = () => {
  return (
    <div className="contactUsSec">
      
        <div className="flex-1"><LineSection /></div>
        <div className="flex-1 bg-gray-100 rounded-xl"><Form /></div>
      
    </div>
  )
}
