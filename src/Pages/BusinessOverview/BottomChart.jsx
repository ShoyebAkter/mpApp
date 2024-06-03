import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../data/mockDataGeo";
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import { auth } from "../../firebase.init";
import iso2ToIso3 from "country-iso-2-to-3";
import PropTypes from "prop-types";
// import { scaleThreshold } from 'd3-scale';
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchData } from "../CustomerBehaviour/shopifyLogic";
import { countDuplicateValues } from "./Topchart/topchart";
export const BottomChart = ({ setSelectedCountry }) => {
  const color = "#c9a0dc";
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const shopify = localStorage.getItem("shopify");
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (user.email === "warehousepro@gmail.com") {
      callApi(
        "https://emapp-backend.vercel.app/warehousepro/stateData",
        setUsers
      );
    } else if (user.email === "fuad@gmail.com") {
      callApi("https://emapp-backend.vercel.app/users", setUsers);
    }
  }, []);
  useEffect(() => {
    if (shopify) {
      callApi(`https://emapp-backend.vercel.app/customersData`, setUsers);
    }
  }, []);
  let newArray;
  if (shopify) {
    newArray = users[0]?.customers.map((obj) => ({
      id: iso2ToIso3(obj.addresses[0].country_code),
      value: obj.addresses[0].country,
    }));
  }

  const handleCountryClick = (feature) => {
    if (feature.properties.name === "USA") {
      setSelectedCountry("United States");
    } else if (feature.properties.name === "Korea") {
      setSelectedCountry("South Korea");
    }
    if (shopify) {
      setCountry(feature.data.id);
    }
    // console.log(feature);
    // You can perform any other actions here based on the clicked country
  };
  let countedValues;
  if (newArray) {
    countedValues = countDuplicateValues(newArray);
  } else {
    const sum = users.reduce((sum, obj) => sum + obj.value, 0);
    countedValues = [
      {
        id: "USA",
        value: sum,
      },
    ];
  }

  const filteredUsers = country
    ? users[0]?.customers.filter(
        (user) => iso2ToIso3(user.addresses[0].country_code) === country
      )
    : users[0]?.customers;
  const className =
    user.email === "warehousepro@gmail.com" ? "fullmapDiv" : "mapChartDiv";
  // console.log(country,filteredUsers)
  // const customColors = scaleThreshold()
  // .domain([0, 100])
  // .range(['#666666', '#649445']); // Colors for values outside and inside the domain range
  console.log(users);
  return (
    <div className="mapDiv">
      <div className={className}>
        <h1
          style={{ color: "#294F41" }}
          className="font-bold text-center text-2xl py-5 cursor-pointer"
        >
          Users In Each Country
        </h1>
        <ResponsiveChoropleth
          data={countedValues}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: color,
                },
              },
              legend: {
                text: {
                  fill: color,
                },
              },
              ticks: {
                line: {
                  stroke: color,
                  strokeWidth: 1,
                },
                text: {
                  fill: color,
                },
              },
            },
            legends: {
              text: {
                fill: color,
              },
            },
          }}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 10000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          colors="nivo"
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: "#444444",
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "none",
                  style: {
                    itemTextColor: "#000000",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          onClick={handleCountryClick}
        />
      </div>
      {shopify && (
        <div className="mx-auto">
          <h1
            style={{ color: "#294F41" }}
            className="font-bold text-center text-2xl py-5 cursor-pointer"
          >
            Sales & Profit by Category
          </h1>
          <div className="flex gap-8 px-10">
            <div className="categorySec">
              <div className="bg-gray-200 rounded-xl px-3 font-bold">Category</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Class</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Top Items</div>
            </div>
            <div className="subCatSec">
              <div className="bg-gray-200 rounded-xl px-3 font-bold">Sub Category</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Rings </div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Bracelet</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Charm</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Rings </div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Bracelet</div>
              <div className="border-green-700 border-2 rounded-xl text-center text-green-700 mt-5">Charm</div>
            </div>
            <div className="PriceSec">
              <br/>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$101,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$15,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$10,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$101,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$15,565</div>
              <div style={{"backgroundColor":"#294F41"}} className="mt-5 border-2 text-white px-8  rounded-xl">$10,565</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
BottomChart.propTypes = {
  setSelectedCountry: PropTypes.func.isRequired,
};
