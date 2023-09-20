import { Form } from "./Form"
import { LineSection } from "./LineSection"

export const Contact = () => {
  return (
    <div className="bg-green-400 p-10 h-screen flex justify-around items-center">
        <LineSection/>
        <Form/>
    </div>
  )
}
