import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useEffect, useState } from "react";
import { getDuplicate } from "../EulerMail/getDuplicate";
import { getTierValue } from "./getTierValue";
import './CustomerBehaviour.css'
import { fetchData, getCustomerSegMentCount, getShopifyData, rfmLogic } from "./shopifyLogic";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { callApi } from "../EulerMail/getSalesData";
import moment from 'moment';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);


export const Customers = () => {
  const [user, loading] = useAuthState(auth);
  const [customers, setCustomers] = useState([]);
  const [customersData, setCustomersData] = useState([]);
  const [shopifyData,setShopifyData]=useState([])
  const [segmentCount,setSegmentCount]=useState([])
  const tierArray = [];
  useEffect(() => {
    fetchData(`https://emapp-backend.vercel.app/api/customerdata`,setCustomers);
    
  }, [])
  // useEffect(() => {
  //   fetchData(`https://emapp-backend.vercel.app/shopify/data`,setShopifyData);
    
  // }, [])
  // useEffect(() => {
  //   fetchData(`https://emapp-backend.vercel.app/customersData`,setCustomersData);
    
  // }, [])
  
  // console.log(customersData)
  // const shopifyexists=shopifyData.some(obj=> obj.email===user.email)
  // if(shopifyexists){
  //   rfmLogic(moment,customersData[0].customers);
  //   getCustomerSegMentCount(customersData[0].customers,setSegmentCount)
  // }
  // console.log(segmentCount)
  // useEffect(() => {
  //   fetch('https://emapp-backend.vercel.app/shopify/data')
  //     .then((res) => res.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error))
  // }, [])
  
  // useEffect(()=>{
  //   fetchData(`https://emapp-backend.vercel.app/shopify/data`,setShopifyData);
  // },[])
  

  // getShopifyData(shopifyData,user)
  
  getTierValue(customers,tierArray)
  // console.log(tierArray);
  // console.log(shopifyData);
  const countedValues = getDuplicate(tierArray);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: `Customers: ${customers.length}`,
      },
    },
  };

  const labels =  countedValues.map((value)=>value.value);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: countedValues.map((value)=>value.count),
        borderColor: '#649445',
        backgroundColor: '#649445',
      }
    ],
  };
  return (
    <div className="customerChartdiv">
      <Bar options={options} data={data} />
    </div>

  )
}
