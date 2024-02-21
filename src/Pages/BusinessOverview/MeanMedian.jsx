import MeanChart from "./MeanChart"

const MeanMedian = () => {
  return (
    <div className="topChart">
            <div  className="greenDiv"></div>
            <MeanChart chartType={"mean"}/>
            <MeanChart chartType={"median"}/>

    </div>
  )
}

export default MeanMedian
