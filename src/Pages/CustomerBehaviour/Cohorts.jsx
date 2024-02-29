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
  
    // console.log(cohortDataByYear);
  } else {
    // console.log("Cohort data is empty.");
  }
  
  // console.log(cohortData);
  return (
    <div className="cohortChart ">
      <h1 className="font-bold text-2xl text-center">Cohort Active Clients Analysis</h1>
      {cohortData.length > 0 && (
        <CohortGraph
          data={{
            year:{
              "2014": [cohortData[1]["2014"], cohortData[1]["2015"], cohortData[1]["2016"], cohortData[1]["2017"], cohortData[1]["2018"], cohortData[1]["2019"], cohortData[1]["2020"], cohortData[1]["2021"], cohortData[1]["2022"], cohortData[1]["2023"], cohortData[1]["2024"]],
      "2015":  [cohortData[2]["2014"], cohortData[2]["2015"], cohortData[2]["2016"], cohortData[2]["2017"], cohortData[2]["2018"], cohortData[2]["2019"], cohortData[2]["2020"], cohortData[2]["2021"], cohortData[2]["2022"], cohortData[2]["2023"], cohortData[2]["2024"]],
      "2016":  [cohortData[6]["2014"], cohortData[6]["2015"], cohortData[6]["2016"], cohortData[6]["2017"], cohortData[6]["2018"], cohortData[6]["2019"], cohortData[6]["2020"], cohortData[6]["2021"], cohortData[6]["2022"], cohortData[6]["2023"], cohortData[6]["2024"]],
      "2017":  [cohortData[7]["2014"], cohortData[7]["2015"], cohortData[7]["2016"], cohortData[7]["2017"], cohortData[7]["2018"], cohortData[7]["2019"], cohortData[7]["2020"], cohortData[7]["2021"], cohortData[7]["2022"], cohortData[7]["2023"], cohortData[7]["2024"]],
      "2018":  [cohortData[8]["2014"], cohortData[8]["2015"], cohortData[8]["2016"], cohortData[8]["2017"], cohortData[8]["2018"], cohortData[8]["2019"], cohortData[8]["2020"], cohortData[8]["2021"], cohortData[8]["2022"], cohortData[8]["2023"], cohortData[8]["2024"]],
      "2019":  [cohortData[10]["2014"], cohortData[10]["2015"], cohortData[10]["2016"], cohortData[10]["2017"], cohortData[10]["2018"], cohortData[10]["2019"], cohortData[10]["2020"], cohortData[10]["2021"], cohortData[10]["2022"], cohortData[10]["2023"], cohortData[10]["2024"]],
      "2020":  [cohortData[0]["2014"], cohortData[0]["2015"], cohortData[0]["2016"], cohortData[0]["2017"], cohortData[0]["2018"], cohortData[0]["2019"], cohortData[0]["2020"], cohortData[0]["2021"], cohortData[0]["2022"], cohortData[0]["2023"], cohortData[0]["2024"]],
      "2021":  [cohortData[3]["2014"], cohortData[3]["2015"], cohortData[3]["2016"], cohortData[3]["2017"], cohortData[3]["2018"], cohortData[3]["2019"], cohortData[3]["2020"], cohortData[3]["2021"], cohortData[3]["2022"], cohortData[3]["2023"], cohortData[3]["2024"]],
      "2022":  [cohortData[4]["2014"], cohortData[4]["2015"], cohortData[4]["2016"], cohortData[4]["2017"], cohortData[4]["2018"], cohortData[4]["2019"], cohortData[4]["2020"], cohortData[4]["2021"], cohortData[4]["2022"], cohortData[4]["2023"], cohortData[4]["2024"]],
      "2023":  [cohortData[5]["2014"], cohortData[5]["2015"], cohortData[5]["2016"], cohortData[5]["2017"], cohortData[5]["2018"], cohortData[5]["2019"], cohortData[5]["2020"], cohortData[5]["2021"], cohortData[5]["2022"], cohortData[5]["2023"], cohortData[5]["2024"]],
      "2024":  [cohortData[9]["2014"], cohortData[9]["2015"], cohortData[9]["2016"], cohortData[9]["2017"], cohortData[9]["2018"], cohortData[9]["2019"], cohortData[9]["2020"], cohortData[9]["2021"], cohortData[9]["2022"], cohortData[9]["2023"], cohortData[9]["2024"]],
      
            }
          }}
          defaultValueType={["value"]}
          headerCellStyles={{ background: "#ffffe6", /* other body cell styles */ }}
          bodyCellStyles={{ background: "#ffffe6", /* other body cell styles */ }}
          
        />
      )}
    </div>
  );
};
Cohorts.propTypes = {
  weeksData: PropTypes.array.isRequired,
};
