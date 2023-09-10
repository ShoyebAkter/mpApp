import { BottomChart } from "./BottomChart"
import { MiddleChart } from "./MiddleChart"
import { TopChart } from "./TopChart"


export const Main = () => {
  return (
    <div className="mx-5">
        <TopChart/>
        <MiddleChart/>
        <BottomChart/>
    </div>
  )
}
