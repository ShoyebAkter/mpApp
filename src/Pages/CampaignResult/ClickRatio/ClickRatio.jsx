import { ClickRate } from "./ClickRate"
import { CtrIncrease } from "./CtrIncrease"

export const ClickRatio = () => {
  return (
    <div className="flex justify-around shadow-2xl rounded-lg m-5">
        <ClickRate/>
        <CtrIncrease/>
    </div>
  )
}
