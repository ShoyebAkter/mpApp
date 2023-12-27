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
  
  const salesValue = [];
  useEffect(() => {
    fetch('https://emapp-backend.vercel.app/sales')
      .then(res => res.json())
      .then(result => setTotalSales(result))
      .catch(error => console.error(error))

    
  }, [])
  // console.log(totalSales);

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
      
      const labels = salesValue.map((sale)=>sale.date);
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: salesValue.map((sale)=>sale.total) ,
            borderColor: '#649445',
            backgroundColor: '#649445',
            
          }
        ],
      };
    return (
       <div style={{"width":"500px"}} className="bg-slate-100 rounded-2xl p-5">
        <Bar  options={options} data={data} />
       </div>
        
    )
}
