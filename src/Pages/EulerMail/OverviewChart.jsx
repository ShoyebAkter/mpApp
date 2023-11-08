import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function OverviewChart() {
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
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  const labels = salesValue.map((sale) => sale.date);

  const data = {
    labels,
    datasets: [
      {
        label: `Sales $`,
        data: salesValue.map((sale) => sale.total),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div style={{ "width": "500px", "height": "350px","boxShadow": '4px 4px 10px rgba(0, 0, 0, 0.5)' }} id="chart" className='p-2 bg-white-500 rounded-xl'>
      <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Business Overview</h1>
      <Line options={options} data={data} />
    </div>
  )
}

export default OverviewChart