import CohortGraph from "react-cohort-graph";

export const Cohorts = () => {
    return (
        <div style={{"width":"500px"}} className="text-black">
            <CohortGraph 
                data={{
                    weeks: {
                        "Week 5": [11567, 331, 135, 116, 90, 48, 22],
                        "Week 4": [11132, 334, 154, 78, 65, 13],
                        "Week 3": [11497, 340, 111, 66, 20],
                        "Week 2": [11593, 247, 87, 39],
                        "Week 1": [8710, 206, 38],
                        "Week 0": [7067, 89]
                    }
                }}
                defaultValueType={["value"]}
            />
        </div>
    )
}
