import CohortGraph from "react-cohort-graph";
import PropTypes from 'prop-types';
export const Cohorts = ({weeksData}) => {
    console.log(weeksData);
    return (
        <div style={{"width":"500px"}} className="text-black">
            <h1>Last Four Weeks Engagement Data</h1>
            <CohortGraph 
                data={{
                    weeks: {
                        "Week 4":weeksData[0],
                        "Week 3":weeksData[1],
                        "Week 2":weeksData[2],
                        "Week 1":weeksData[3],
                    }
                }}
                defaultValueType={["value"]}
            />
        </div>
    )
}
Cohorts.propTypes = {
    weeksData: PropTypes.array.isRequired,
  }