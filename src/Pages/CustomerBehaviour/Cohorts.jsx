import CohortGraph from "react-cohort-graph";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
export const Cohorts = ({ weeksData }) => {
  const [cohortData, setCohortData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/cohort"
      );
      const data = await response.json();
      setCohortData(data);
    };
    fetchData();
  }, []);
  const cohortDataByYear = {};
  if (cohortData.length > 0) {
    const cohortYears = Object.keys(cohortData[0]).filter(year => year !== "year");
  
   
    cohortYears.forEach(year => {
      cohortDataByYear[year] = cohortData.map(cohort => cohort[year]);
    });
  
    console.log(cohortDataByYear);
  } else {
    console.log("Cohort data is empty.");
  }
  
  console.log(cohortData);
  return (
    <div className="cohortChart ">
      {cohortData.length > 0 && (
        <CohortGraph
          data={{
            year:cohortDataByYear
          }}
          defaultValueType={["value"]}
        />
      )}
    </div>
  );
};
Cohorts.propTypes = {
  weeksData: PropTypes.array.isRequired,
};
