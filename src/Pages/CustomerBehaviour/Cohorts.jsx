import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap"; // Import heatmap module
import { useEffect, useState } from "react";

heatmap(Highcharts);
//
export const Cohorts = ({ weeksData }) => {
  const [chartOptions, setChartOptions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/cohort"
      );
      const data = await response.json();
      
      const productsArray = data.map(obj => obj.product);
      // console.log(productsArray)
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
          height:650
        },
        title: {
          text: "Heatmap of Service Usage by Month",
          style: {
            fontSize: "1em",
          },
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
          maxColor: Highcharts.getOptions().colors[0],
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
                maxWidth: 500,
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
      <h1 className="text-center text-xl text-green-600">Heatmap of Service Usage by Month</h1>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};
// Cohorts.propTypes = {
//   weeksData: PropTypes.array.isRequired,
// };
