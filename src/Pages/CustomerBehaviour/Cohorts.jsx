import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap"; // Import heatmap module
import { useEffect, useState } from "react";

heatmap(Highcharts);
//
export const Cohorts = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/cohort"
      );
      const data = await response.json();
      data.sort((a, b) => {
        // Convert both 'prod' properties to lowercase for case-insensitive sorting
        let prodA = a.Product.toLowerCase();
        let prodB = b.Product.toLowerCase();
    
        // Compare the two 'prod' properties
        if (prodA < prodB) {
            return -1; // If 'prodA' should appear before 'prodB'
        }
        if (prodA > prodB) {
            return 1; // If 'prodA' should appear after 'prodB'
        }
        return 0; // If both are equal
    });
      const productsArray = data.map(obj => obj.Product);
      // console.log(data)
      const months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ]; // Array of years
      const mapDataArray = [];
      data.map((data, index) => {
        // Loop through each year
        months.forEach((month, monthIndex) => {
          // Push [index, yearIndex, mapData[index][year]] to mapDataArray
          mapDataArray.push([monthIndex,index , data[month]]);
        });
      });
      // console.log(mapDataArray)
      // //   console.log(mapDataArray)
      const options = {
        chart: {
          type: "heatmap",
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1,
          height:650,
        },
        title: {
          text: null
        },
        xAxis: {
          categories: months,
        },
        yAxis: {
          categories: productsArray,
          title: null,
          reversed: true,
        },
        credits: {
            enabled: false // Hide credits
          },
        accessibility: {
          point: {
            descriptionFormat:
              "{(add index 1)}. " +
              "{series.xAxis.categories.(x)} sales " +
              "{series.yAxis.categories.(y)}, {value}.",
          },
        },
        colorAxis: {
          min: 0,
          minColor: "#FFFFFF",
          maxColor: "#439541",
        },
        legend: {
          align: "right",
          layout: "vertical",
          margin: 0,
          verticalAlign: "top",
          y: 25,
          symbolHeight: 280,
        },
        tooltip: {
          formatter: function () {
            return (
              "<b>" +
              this.series.yAxis.categories[this.point.y] +
              "</b> sold<br>" +
              "<b>" +
              this.point.value +
              "</b> product in month <br>" +
              "<b>" +
              this.series.xAxis.categories[this.point.x] +
              "</b>"
            );
          },
        },
        series: [
          {
            name: "Active Clients",
            borderWidth: 1,
            data: mapDataArray,
            dataLabels: {
              enabled: true,
              color: "#000000",
            },
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 700,
              },
              chartOptions: {
                yAxis: {
                  labels: {
                    formatter: function () {
                      return this.value.toString().substr(0, 1);
                    },
                  },
                },
              },
            },
          ],
        },
      };
      setChartOptions(options);
    };
    fetchData();
  }, []);
  return (
    <div className="cohortChart ">
    <div
        style={{ marginLeft: "40%" }}
        className="flex items-center justify-between mx-10"
      >
        <h1 style={{"background":"#FFFFFF","color":"#294F41"}} className="font-bold text-center text-xl  cursor-pointer">Heatmap of Service Usage by Month</h1>
      
        <div className="circle-container">
      <div
        className="questionMark"
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >?</div>
      {showPopup && <div className="popup">This chart shows uses of product in every month of a year</div>}
    </div>
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};
// Cohorts.propTypes = {
//   weeksData: PropTypes.array.isRequired,
// };
