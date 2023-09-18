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
  const transactions=[];
  // const labels=[]
  const[sales,setSales]=useState([])
  useEffect(()=>{
    fetch('../../../Sales.json').
    then((res)=>res.json())
    .then((result)=>setSales(result.sales))
  },[])

  const getValue=()=>{
    sales.map((item)=>{
      item.transactions.map((transaction)=>{
        
        const year =new Date(transaction.date.$date.$numberLong*1000).getFullYear()
        const object={
          year:year,
          amount:Math.ceil(transaction.total)
        }
        transactions.push(object);
      })
    })
  }
  getValue()

  // console.log(transactions);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  // const labels = transactions.map((tran,index)=>{ if(index<=4) return tran.year});
  const labels = ["jan","feb","march","april"];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:transactions.map((tran,index)=>{ if(index<=4) return tran.amount}),
        // data:[10,20,30,40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div style={{ "width": "500px", "height": "350px" }} id="chart" className='shadow-xl rounded-xl'>
      <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Business Overview</h1>
      <Line options={options} data={data} />
    </div>
  )
}

export default OverviewChart