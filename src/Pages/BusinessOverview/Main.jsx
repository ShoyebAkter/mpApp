import { BottomChart } from "./BottomChart"
import { MiddleChart } from "./MiddleChart"
import { TopChart } from "./TopChart"


export const Main = () => {
  return (
    <div className="mx-5">
        <TopChart/>
        <MiddleChart/>
        <div style={{"height":"50vh","width":"1000px"}} className="my-10">
          <h1 className="text-center text-3xl text-green-600 py-5">Sales by State</h1>
          <BottomChart/>
        </div>
    </div>
  )
}
