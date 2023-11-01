import CohortGraph from "react-cohort-graph";

export const Cohorts = () => {
    return (
        <div style={{"width":"500px"}} className="text-black">
            <CohortGraph 
                data={{
                    weeks: {
                        "Week 5": [11567, 331, 135, 116, 90, 48, 22],
                    }
                }}
                defaultValueType={["value"]}
            />
        </div>
    )
}
