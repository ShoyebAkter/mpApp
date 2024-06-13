import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";
import { getDuplicate } from "../EulerMail/getDuplicate";
import { getTierValue } from "./getTierValue";
import "./CustomerBehaviour.css";
import {
  fetchData,
  getCustomerSegMentCount,
  // getShopifyData,
  rfmLogic,
} from "./shopifyLogic";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const Customers = ({setData,setBarName}) => {
  const [user] = useAuthState(auth);
  const [customers, setCustomers] = useState([]);
  const [customersData, setCustomersData] = useState([]);
  const [shopifyData, setShopifyData] = useState([]);
  const [segmentCount, setSegmentCount] = useState([]);
  const tierArray = [];
  useEffect(() => {
    fetchData(`https://emapp-backend.vercel.app/api/customerdata`,setCustomers);

}, []);
useEffect(()=>{
  fetchData(`https://emapp-backend.vercel.app/shopify/data`,setShopifyData);
},[])
useEffect(()=>{
  if(shopifyData.length!==0){
    fetchData(`https://emapp-backend.vercel.app/customersData`,setCustomersData);
    
  }
},[shopifyData])

  // console.log(customersData);
  const shopifyexists = shopifyData?.some((obj) => obj.email === user.email);
  // console.log(shopifyexists,user.email)
  rfmLogic(moment, customersData[0]?.customers);
  useEffect(()=>{
    if (shopifyexists) {
      setData(customersData);
      getCustomerSegMentCount(customersData[0]?.customers, setSegmentCount);
    }
  },[customersData,shopifyexists])
  
  
  // getShopifyData(shopifyData,user)

  getTierValue(customers, tierArray);
  // console.log(tierArray);
  // console.log(customersData);
  const countedValues = getDuplicate(tierArray);

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: `Customers: ${shopifyexists? customersData[0]?.customers.length :  customers.length }`,
        color: "#2a4e40", // Change the title color
        font: {
          size: 16,
          weight:700,
          family: 'Montserrat',// Change the title font size
        },
        padding: {
          bottom: 30 // Add padding to the bottom
      }
        // text: `Customers: ${customers.length}`,
      },
    },
    scales: {
      x: {
        ticks: {
          color:'black'
        },
      },
      y: {
        ticks: {
          color:'black'
        },
      },
    },
    onClick: (event, elements,chart) => {
      // console.log(event,elements,)
      if (elements.length > 0) {
        const element = elements[0];
      const index = element.index;
      const label = chart.data.labels[index];
      setBarName(label)
      // console.log('Clicked bar label:', label);  // Handle the clicked data
      }
    }
  };

  const labels = !shopifyexists ? countedValues.map((value) => value.value) : segmentCount.map(seg=>seg.segment);
  // const labels = countedValues.map((value) => value.value)

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data:shopifyexists ? segmentCount.map(seg=>seg.count) : countedValues.map((value) => value.count),
        // data:countedValues.map((value) => value.count),
        
        backgroundColor: "#659148",
        borderRadius: 15,
      },
    ],
  };
  ChartJS.defaults.color="white"
  return (
    <div className="customerChartdiv">
      <Bar options={options} height={200} data={data} />
    </div>
  );
};
