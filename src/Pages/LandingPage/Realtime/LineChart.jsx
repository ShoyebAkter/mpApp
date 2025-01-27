import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import PropTypes from "prop-types";
// import "./LineChart.css"; // Include your styling file if needed

export function LineChart({
  firstxLinedata,
  secondxLinedata,
  thirdxLinedata,
}) {
  const chartRefDesktop = useRef(null);
  const chartRefMobile = useRef(null);

  useEffect(() => {
    const commonOptions = {
      chart: {
        type: "line",
        width:200,
        height:200
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false, // Remove Highcharts.com text
      },
      xAxis: {
        categories:
          firstxLinedata ||
          secondxLinedata ||
          thirdxLinedata,
        title: {
          text: "X-Axis",
        },
      },
      yAxis: {
        title: {
          text: "Y-Axis",
        },
      },
      series: [
        {
          name: "",
          data: firstxLinedata || secondxLinedata || thirdxLinedata || [],
          color: "#439541",
        }
      ],
    };

    // Desktop Chart
    if (chartRefDesktop.current) {
      Highcharts.chart(chartRefDesktop.current, {
        ...commonOptions,
      });
    }

    // Mobile Chart
    if (chartRefMobile.current) {
      Highcharts.chart(chartRefMobile.current, {
          chart: {
            type: "line",
            width:300,
            height:200
          },
          title: {
            text: "",
          },
          credits: {
            enabled: false, // Remove Highcharts.com text
          },
          xAxis: {
            categories:
              firstxLinedata ||
              secondxLinedata ||
              thirdxLinedata,
            title: {
              text: "X-Axis",
            },
          },
          yAxis: {
            title: {
              text: "Y-Axis",
            },
          },
          series: [
            {
              name: "",
              data: firstxLinedata || secondxLinedata || thirdxLinedata || [],
              color: "#439541",
            }
          ],
        
      });
    }
  }, [
    firstxLinedata,
    secondxLinedata,
    thirdxLinedata,
  ]);

  return (
    <div>
      <div className="chart-container" ref={chartRefDesktop}></div>
      <div className="mobileViewChart" ref={chartRefMobile}></div>
    </div>
  );
}

LineChart.propTypes = {
  firstxLinedata: PropTypes.array.isRequired,
  secondxLinedata: PropTypes.array.isRequired,
  thirdxLinedata: PropTypes.array.isRequired,
};
