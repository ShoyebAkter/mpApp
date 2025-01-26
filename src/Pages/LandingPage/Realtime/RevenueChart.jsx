import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import "./Realtime.css";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      name: "Dataset 1",
      data: [100, 30, 250, 600, 30, 350, 90],
      color: "#439541",
    },
    {
      name: "Dataset 2",
      data: [10, 50, 10, 59, 230, 15, 400],
      color: "#649445",
    },
  ],
};

export function RevenueChart() {
  const chartRefDesktop = useRef(null);
  const chartRefMobile = useRef(null);

  useEffect(() => {
    // Desktop Chart
    if (chartRefDesktop.current) {
      Highcharts.chart(chartRefDesktop.current, {
        chart: {
          type: "line",
          height:200,
          width:680,
        },
        title: {
          text: "Revenue Chart",
        },
        xAxis: {
          categories: data.labels,
        },
        yAxis: {
          title: {
            text: "Values",
          },
        },
        credits: {
          enabled: false // Hide credits
        },
        series: data.datasets.map((dataset) => ({
          name: dataset.name,
          data: dataset.data,
          color: dataset.color,
        })),
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 768,
              },
              chartOptions: {
                legend: {
                  enabled: false,
                },
              },
            },
          ],
        },
      });
    }

    // Mobile Chart
    if (chartRefMobile.current) {
      Highcharts.chart(chartRefMobile.current, {
        chart: {
          type: "line",
          height:200,
        },
        title: {
          text: "Revenue Chart",
        },
        xAxis: {
          categories: data.labels,
        },
        yAxis: {
          title: {
            text: "Values",
          },
        },
        series: data.datasets.map((dataset) => ({
          name: dataset.name,
          data: dataset.data,
          color: dataset.color,
        })),
      });
    }
  }, []);

  return (
    <div>
      <div className="chart-container" ref={chartRefDesktop}></div>
      <div className="mobileViewChart" ref={chartRefMobile}></div>
    </div>
  );
}
