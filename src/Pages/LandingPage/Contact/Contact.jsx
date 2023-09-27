
import { Form } from "./Form"
import { LineSection } from "./LineSection"

export const Contact = () => {
  return (
    <div className="bg-green-400 p-10 flex justify-center items-center">
      
        <div className="flex-1"><LineSection /></div>
        <div className="flex-1 bg-gray-100 rounded-xl"><Form /></div>
      
    </div>
  )
}
