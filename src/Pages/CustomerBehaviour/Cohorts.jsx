import CohortGraph from "react-cohort-graph";
import PropTypes from 'prop-types';
export const Cohorts = ({ weeksData }) => {
    console.log(weeksData[0]);
    return (
        <div style={{ "width": "500px" }} className="text-black">
            <h1>Last Four Weeks Engagement Data</h1>
            <CohortGraph
                data={{
                    weeks: {
                        "01_03_2022-31_03_2022": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
                        "01_04_2022-30_04_2022": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        "01_05_2022-31_05_2022": [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        "01_06_2022-30_06_2022": [7, 7, 7, 6, 6, 5, 6, 4, 1],
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