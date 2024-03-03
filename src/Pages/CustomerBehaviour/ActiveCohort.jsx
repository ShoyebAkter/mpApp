import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap"; // Import heatmap module
import { useEffect, useState } from "react";

heatmap(Highcharts);
//
const ActiveCohort = ({setCohortYear,setActiveYear}) => {
    const [chartOptions, setChartOptions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/activeCohort"
      );
      const data = await response.json();
      // console.log(data)
      const years = [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024"
      ]; // Array of years
      const mapDataArray = [];
      data.map((data, index) => {
        // Loop through each year
        years.forEach((year, yearIndex) => {
          // Push [index, yearIndex, mapData[index][year]] to mapDataArray
          mapDataArray.push([index, yearIndex, data[year]]);
        });
      });
        // console.log(mapDataArray)
      const options = {
        chart: {
          type: "heatmap",
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1,
        },
        title: {
          text: "Active client per year",
          style: {
            fontSize: "1em",
          },
        },
        xAxis: {
          categories: years,
        },
        yAxis: {
          categories: years,
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
            setCohortYear(this.series.xAxis.categories[this.point.y]);
            setActiveYear(this.series.yAxis.categories[this.point.x])
            return (
              "<b>" +
              this.series.xAxis.categories[this.point.y] +
              "</b> has <br>" +
              "<b>" +
              this.point.value +
              "</b> active clients from <br>" +
              "<b>" +
              this.series.yAxis.categories[this.point.x] +
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
  // console.log(cohortYear,activeYear)
  return (
    <div className="activecohortChart ">
      <h1 className="text-center text-xl text-green-600">Cohort Active Clients Analysis</h1>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  )
}

export default ActiveCohort
