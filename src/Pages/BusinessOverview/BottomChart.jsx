import { ResponsiveChoropleth  } from "@nivo/geo";
import { geoFeatures } from '../../data/mockDataGeo';
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import { auth } from "../../firebase.init";
import PropTypes from "prop-types"
import { useAuthState } from "react-firebase-hooks/auth";
export const BottomChart = ({setSelectedCountry}) => {
  const color = "#c9a0dc";
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  

 
  useEffect(()=>{
    user.email==="fuad@gmail.com" ?
    callApi('https://emapp-backend.vercel.app/users',setUsers)
    :
    callApi('https://emapp-backend.vercel.app/warehousepro/stateData',setUsers)
  },[])

  // console.log(users);
  
const sum=users.reduce((sum, obj) => sum + obj.value, 0);
  const handleCountryClick = (feature) => {
      
      if(feature.properties.name==="USA"){
        setSelectedCountry("United States")
      }else if(feature.properties.name==="Korea"){
        setSelectedCountry("South Korea")
      }
      // You can perform any other actions here based on the clicked country
  };

  // function countDuplicateValues() {
  //   const countryCounts = {};

  //   // Iterate through the users array and count the countries
  //   for (const user of users) {
  //     const { id } = user;
  //     if (countryCounts[id]) {
  //       countryCounts[id]++;
  //     } else {
  //       countryCounts[id] = 1;
  //     }
  //   }
  //   // console.log(countryCounts);
  //   // Loop through the countMap to create the result array
    
  //   const countryCountsArray = Object.entries(countryCounts).map(([country, count]) => ({
  //     id: country, // Use the country name as the id
  //     value: count,
  //   }));

  //   return countryCountsArray;
  // }

  // const countedValues = countDuplicateValues();
  const countedValues=[{
    id:"USA",
    value:sum
  }]
  // console.log(selectedCountry);

  return (
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
      domain={[0, 1000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'none',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      onClick={handleCountryClick}
      
    />
  )
}
BottomChart.propTypes = 
    {
      setSelectedCountry:PropTypes.func.isRequired,
        
    }