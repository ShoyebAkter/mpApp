import { ResponsiveChoropleth  } from "@nivo/geo";
import { geoFeatures } from '../../data/mockDataGeo';
import { useEffect, useState } from "react";
import { callApi } from "../EulerMail/getSalesData";
import { auth } from "../../firebase.init";
import iso2ToIso3 from 'country-iso-2-to-3';
import PropTypes from "prop-types"
// import { scaleThreshold } from 'd3-scale';
import { useAuthState } from "react-firebase-hooks/auth";
import { fetchData } from "../CustomerBehaviour/shopifyLogic";
import { countDuplicateValues } from "./Topchart/topchart";
export const BottomChart = ({setSelectedCountry}) => {
  const color = "#c9a0dc";
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const shopify=localStorage.getItem("shopify");

 
  useEffect(()=>{
    if(user.email==="warehousepro@gmail.com"){
      callApi('https://emapp-backend.vercel.app/warehousepro/stateData',setUsers)
    } 
    
    else if(user.email==="fuad@gmail.com"){
      callApi('https://emapp-backend.vercel.app/users',setUsers)
    }
  },[])
  useEffect(()=>{
    if(shopify){
      callApi(`https://emapp-backend.vercel.app/customersData`,setUsers);
    }
  },[])
  let newArray;
  if(shopify){
     newArray = users[0]?.customers.map(obj => ({
      id: iso2ToIso3(obj.addresses[0].country_code),
      value:  obj.addresses[0].country
    }));
  }
  
  

  const handleCountryClick = (feature) => {
      
      if(feature.properties.name==="USA"){
        setSelectedCountry("United States")
      }else if(feature.properties.name==="Korea"){
        setSelectedCountry("South Korea")
      }
      // You can perform any other actions here based on the clicked country
  };
  let countedValues;
  if(newArray){
    countedValues = countDuplicateValues(newArray);
  }
  else{
    const sum=users.reduce((sum, obj) => sum + obj.value, 0);
    countedValues=[{
      id:"USA",
      value:sum
    }]
  }
  // const customColors = scaleThreshold()
  // .domain([0, 100])
  // .range(['#666666', '#649445']); // Colors for values outside and inside the domain range

  return (
    <div style={{"width":"100%","height":"100%","backgroundColor":"#F5F5F5"}}>
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
      // colors={customColors} 
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
    </div>
  )
}
BottomChart.propTypes = 
    {
      setSelectedCountry:PropTypes.func.isRequired,
        
    }