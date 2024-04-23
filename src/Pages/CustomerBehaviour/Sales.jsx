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
import './CustomerBehaviour.css'
import { fetchData } from "./shopifyLogic";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );
  

export const Sales = () => {
  const [totalSales, setTotalSales] = useState([]);
  const [customerdata,setCustomersData]=useState([])
  const salesValue = [];
  useEffect(() => {
    fetch('https://emapp-backend.vercel.app/sales')
      .then(res => res.json())
      .then(result => setTotalSales(result))
      .catch(error => console.error(error))

    
  }, [])
  // console.log(totalSales);
  const shopify=localStorage.getItem("shopify");
  useEffect(()=>{
  if(shopify){
    fetchData(`https://emapp-backend.vercel.app/customersData`,setCustomersData);
  }
},[])
console.log(customerdata)
  const getSalesData = () => {
    totalSales.map((sale) => {

      const day = new Date(sale.sale.$date.$numberLong * 1000).getDate();
      const month = new Date(sale.sale.$date.$numberLong * 1000).getMonth();
      const year = new Date(sale.sale.$date.$numberLong * 1000).getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      const date=`${formattedMonth}/${formattedDay}/${year}`;
      const sales = sale.items.map((item) => {
        const price = item.price.$numberDecimal;
        const quantity = item.quantity.$numberInt;
        const totalPrice = parseInt(price) * parseInt(quantity);
        return totalPrice;
      })
      let sum = 0;
      for (let i = 0; i < sales.length; i++) {
        sum = sum + sales[i];
      }

      const obj = {
        date: date,
        total: sum
      }
      salesValue.push(obj)
    })
    
  }
  getSalesData()
  const totalCount = salesValue.reduce((total, item) => total + item.total, 0);
  // console.log(totalCount);
  function findTop10Objects(customerData) {
    // Sort the array of objects based on the total_spent property in descending order
    customerData[0]?.customers.sort((a, b) => b.total_spent - a.total_spent);

    // Slice the sorted array to get the top 10 objects
    return customerData[0]?.customers.slice(0, 10);
}

// Call the function to find the top 10 objects
const top10Objects = findTop10Objects(customerdata);
console.log(top10Objects)
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
            text: `Sales: ${totalCount} $` ,
          },
        },
      };
      
      const labels = shopify ? top10Objects?.map(data=>data.created_at.split("T")[0] ) : salesValue.map((sale)=>sale.date);
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data:  shopify ? top10Objects?.map(data=>data.total_spent ) : salesValue.map((sale)=>sale.total) ,
            borderColor: '#649445',
            backgroundColor: '#649445',
            
          }
        ],
      };
    return (
       <div className="salesChart">
        <Bar  options={options} height={200} data={data} />
       </div>
        
    )
}
