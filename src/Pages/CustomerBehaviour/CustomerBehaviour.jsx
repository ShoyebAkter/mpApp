import { Cohorts } from "./Cohorts"
import { Customers } from "./Customers"
import { Engagement } from "./Engagement"
import { Sales } from "./Sales"

export const CustomerBehaviour = () => {
  return (
    <div className="m-5 p-5">
        <div className="flex justify-center shadow-xl rounded-lg mb-5">
            <Customers/>
            <Sales/>
        </div>
        <div className="flex justify-center shadow-xl rounded-lg">
            <Engagement/>
            <Cohorts/>
        </div>
    </div>
  )
}
