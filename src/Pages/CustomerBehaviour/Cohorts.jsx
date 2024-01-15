import CohortGraph from "react-cohort-graph";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
export const Cohorts = ({ weeksData }) => {
    const [cohortData,setCohortData]=useState( {
        weeks: {
          "01_03_2022": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
          "01_04_2022": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          "01_05_2022": [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          "01_06_2022": [7, 7, 7, 6, 6, 5, 6, 4, 1],
        }
      }
    )
    useEffect(()=>{
        if(weeksData.length!==0){
            setCohortData({
                weeks: {
                    "01_03_2022-31_03_2022": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3],
                    "01_04_2022-30_04_2022": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    "01_05_2022-31_05_2022": weeksData[1],
                    "01_06_2022-30_06_2022": weeksData[0],
                  } 
            })
        }
    },[])
    console.log(weeksData);
    return (
        <div  className="cohortChart ">
            <h1>Last Four Weeks Engagement Data</h1>
            <CohortGraph
                data={cohortData}
                defaultValueType={["value"]}
            />
        </div>
    )
}
Cohorts.propTypes = {
    weeksData: PropTypes.array.isRequired,
}