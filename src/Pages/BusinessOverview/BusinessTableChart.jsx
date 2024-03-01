// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from "chart.js";
// import PropTypes from 'prop-types';
// import { Bar } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// // import { faker } from '@faker-js/faker';
// import { useEffect, useState } from "react";
// import { callApi } from "../EulerMail/getSalesData";
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     ChartDataLabels
// );
// const BusinessTableChart = () => {
//     const [chartData,setChartData]=useState([])
//     useEffect(()=>{
//         callApi("https://emapp-backend.vercel.app/warehousepro/orders",setChartData)
//     },[])

//     const options = {
//         indexAxis: 'y',
//         elements: {
//             bar: {
//                 borderWidth: 2,
//             },
//         },
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'right',
//             },
//             title: {
//                 display: true,
//                 text: 'Customers',
//             },
//         },
        
//     };

//     const labels =chartData.map(data=>data.category);

//     const data1 = {
//         labels,
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data:chartData.map(client=>client.count),
//                 borderColor: '#649445',
//                 backgroundColor: '#649445',
//                 borderRadius: 15,
//             }
//         ],
//     };
//   return (
//     <div>
//             <h1 className='heading font-bold'> Customer Category</h1>
//             <Bar options={options} width={500} height={300} data={data1} />
//             </div>
//   )
// }

// export default BusinessTableChart
