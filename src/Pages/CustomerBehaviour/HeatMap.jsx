import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import heatmap from "highcharts/modules/heatmap"; // Import heatmap module
import { useEffect, useState } from "react";

heatmap(Highcharts);
//
const HeatMap = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const [activeButton, setActiveButton] = useState(0); // Default active button is 2
  const [firstNumber, setFirstNumber] = useState(0);
  const [lastNum, setLastNum] = useState(10);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setFirstNumber(10 * buttonNumber);
    setLastNum(10 * (buttonNumber + 1));
    console.log(firstNumber, lastNum);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/heatmap"
      );
      const data = await response.json();
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
      ]; // Array of years
      const mapDataArray = [];
      data.slice(firstNumber, lastNum).map((data, index) => {
        // Loop through each year
        years.forEach((year, yearIndex) => {
          // Push [index, yearIndex, mapData[index][year]] to mapDataArray
          mapDataArray.push([index, yearIndex, data[year]]);
        });
      });
      //   console.log(mapDataArray)
      const options = {
        chart: {
          type: "heatmap",
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1,
        },
        title: {
          text: "Sales per client per year",
          style: {
            fontSize: "1em",
          },
        },
        xAxis: {
          categories: data.slice(firstNumber, lastNum).map((data) => data.name),
        },
        yAxis: {
          categories: years,
          title: null,
          reversed: true,
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
              this.series.xAxis.categories[this.point.x] +
              "</b> has billed<br>" +
              "<b>" +
              this.point.value +
              "</b> items on <br>" +
              "<b>" +
              this.series.yAxis.categories[this.point.y] +
              "</b>"
            );
          },
        },
        series: [
          {
            name: "Sales per employee",
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
  }, [firstNumber, lastNum]);
  // console.log(mapData)

  return (
    <div className="flex">
      <div
        style={{ height: "50px" }}
        className="bg-transparent border border-gray-500 rounded"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <button
            key={number}
            style={{ height: "50px" }}
            className={` text-black font-bold py-1 px-2 rounded ${
              activeButton === number ? "btn-active" : ""
            }`}
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default HeatMap;
