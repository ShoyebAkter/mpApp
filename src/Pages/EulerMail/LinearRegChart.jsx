import Highcharts from "highcharts/highstock";
import indicators from "highcharts/indicators/indicators";
import trendline from "highcharts/indicators/trendline";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import jStat from 'jstat';
indicators(Highcharts);
trendline(Highcharts);
const LinearRegChart = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://emapp-backend.vercel.app/warehousepro/sales");
      const data = await response.json();

      const regression = (arrX, arrY) => {
        let r, sy, sx, b, a, meanX, meanY;
        r = jStat.corrcoeff(arrX, arrY);
        sy = jStat.stdev(arrY);
        sx = jStat.stdev(arrX);
        meanY = jStat(arrY).mean();
        meanX = jStat(arrX).mean();
        b = r * (sy / sx);
        a = meanY - meanX * b;
        let x1 = 0; // Start from year 1
        let x2 = 10; // End at year 10
        let y1 = a + b * x1;
        let y2 = a + b * x2;
        return {
          line: [
            [x1, y1],
            [x2, y2]
          ],
          r
        };
      };
      

      let years = [];
      let totals = [];
      data.forEach((item) => {
        years.push(item.year);
        totals.push(item.total);
      });

      const { line, r } = regression(years, totals);
      

      const options = {
        chart: {
          type: "line",
          zoomType: "x"
        },
        title: {
          text: "Linear Regression of Year and Total Sales"
        },
        xAxis: {
          title: {
            text: "Year"
          },
          labels: {
            format: "{value}"
          }
        },
        yAxis: {
          title: {
            text: "Total Sales"
          },
          labels: {
            format: "{value}"
          }
        },
        legend: {
          enabled: true
        },
        plotOptions: {
          line: {
            lineWidth: 2.5
          }
        },
        tooltip: {
          formatter: function () {
            return (
              "Year: " +
              this.x +
              "<br/>Total Sales: " +
              this.y
            );
          }
        },
        series: [
          {
            type: "scatter",
            name: "Sales",
            data: data.map(item => [item.year, item.total])
          },
          {
            type: "line",
            name: "Linear Regression",
            data: line,
            color: "#ec7c7d"
          }
        ]
      };

      setChartOptions(options);
    };

    fetchData();
  }, []);

  return (
    <div className="middleChart">
    <div className="greenDiv"></div>
    {chartOptions && <HighchartsReact  highcharts={Highcharts} options={chartOptions} />}
    
    </div>
  )
}

export default LinearRegChart
