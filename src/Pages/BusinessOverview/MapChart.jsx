import { useEffect } from "react";
import Highcharts from "highcharts";
import HC_map from "highcharts/modules/map";
import mapData from "highcharts/modules/map";

// Initiate the map module
HC_map(Highcharts);
mapData(Highcharts);

const MapChart = ({ setSelectedCountry, setStateName,setClicked }) => {
  
  useEffect(() => {
    const drilldown = async function (e) {
      if (!e.seriesOptions) {
        const chart = this,
          mapKey = `countries/us/${e.point.drilldown}-all`;

        // Handle error, the timeout is cleared on success
        let fail = setTimeout(() => {
          if (!Highcharts.maps[mapKey]) {
            chart.showLoading(`
                            <i className="icon-frown"></i>
                            Failed loading ${e.point.name}
                        `);
            fail = setTimeout(() => {
              chart.hideLoading();
            }, 1000);
          }
        }, 3000);

        // Show the Font Awesome spinner
        chart.showLoading('<i className="icon-spinner icon-spin icon-3x"></i>');

        // Load the drilldown map
        const topology = await fetch(
          `https://code.highcharts.com/mapdata/${mapKey}.topo.json`
        ).then((response) => response.json());

        const data = Highcharts.geojson(topology);

        // Set a non-random bogus value
        data.forEach((d, i) => {
          d.value = i;
        });

        // Apply the recommended map view if any
        chart.mapView.update(
          Highcharts.merge(
            {
              insets: undefined,
              padding: 0,
            },
            topology.objects.default["hc-recommended-mapview"]
          )
        );

        // Hide loading and add series
        chart.hideLoading();
        clearTimeout(fail);
        chart.addSeriesAsDrilldown(e.point, {
          name: e.point.name,
          data,
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        });
      }
    };

    // On drill up, reset to the top-level map view
    const afterDrillUp = function (e) {
      if (e.seriesOptions.custom && e.seriesOptions.custom.mapView) {
        e.target.mapView.update(
          Highcharts.merge(
            { insets: undefined },
            e.seriesOptions.custom.mapView
          ),
          false
        );
      }
    };

    const fetchData = async () => {
      const topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/us/us-all.topo.json"
      ).then((response) => response.json());

      const data = Highcharts.geojson(topology);
      const newData = await fetch(
        "https://emapp-backend.vercel.app/warehousepro/stateData"
      ).then((response) => response.json());
      // console.log(newData)
      const mapView = topology.objects.default["hc-recommended-mapview"];

      // Set drilldown pointers
      data.forEach((d) => {
        const matchedData = newData.find((item) => item.state === d.name);
        if (matchedData) {
          d.drilldown = matchedData.drilldown;
          d.value = matchedData.value;
        }
      });
      // console.log(data)
      // console.log(newData)
      // Instantiate the map
      Highcharts.mapChart("container", {
        chart: {
          events: {
            drilldown,
            afterDrillUp,
          },
        },

        title: {
          text: "USA Clients Data",
        },

        colorAxis: {
          min: 0,
          minColor: "#E6E7E8",
          maxColor: "#005645",
        },

        mapView,

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },

        plotOptions: {
          map: {
            states: {
              hover: {
                color: "#EEDD66",
              },
            },
          },
        },

        series: [
          {
            data,
            name: "USA",
            dataLabels: {
              enabled: true,
              format: "{point.properties.postal-code}",
            },
            custom: {
              mapView,
            },
          },
        ],
        credits: {
          enabled: false, // Hide credits
        },
        drilldown: {
          activeDataLabelStyle: {
            color: "#FFFFFF",
            textDecoration: "none",
            textOutline: "1px #000000",
          },
          breadcrumbs: {
            floating: true,
          },
          drillUpButton: {
            relativeTo: "spacingBox",
            position: {
              x: 0,
              y: 60,
            },
          },
        },
      });
    };

    fetchData();

    // Cleanup function
    return () => {
      // Destroy the chart to prevent memory leaks
      if (Highcharts.charts && Highcharts.charts[0]) {
        Highcharts.charts[0].destroy();
      }
    };
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="flex py-5">
      <button
        type="button"
        onClick={()=>{setClicked(true);
          setStateName(null);
        setSelectedCountry(null)}}
        
        className="bg-green-700 text-white h-12 w-40 rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">WorldMap</p>
        </div>
      </button>
      <div
        id="container"
        onClick={(e) => setStateName(e.nativeEvent.point.name)}
        style={{ width: "700px", height: "400px" }}
      ></div>
      <div className="flex gap-8 px-10">
            <div className="categorySec">
              <div className="bg-gray-200 rounded-xl px-3 font-bold">Category</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Class</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Top Items</div>
            </div>
            <div className="subCatSec">
              <div className="bg-gray-200 rounded-xl px-3 font-bold">Sub Category</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Rings </div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Bracelet</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Charm</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Rings </div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Bracelet</div>
              <div className="border-green-700 cursor-pointer border-2 rounded-xl text-center text-green-700 mt-5">Charm</div>
            </div>
            <div className="PriceSec">
              <br/>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$101,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$15,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$10,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$101,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$15,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 cursor-pointer border-2 text-white px-8  rounded-xl">$10,565</div>
            </div>
          </div>
    </div>
  );
};

export default MapChart;
