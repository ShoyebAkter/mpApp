import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { faker } from '@faker-js/faker';
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

const WarehouseproCategory = ({setSelectedCategory}) => {
    const [clients, setClients] = useState([]);
    const [totalSales,setTotalSales]=useState(0)
    // console.log(user.uid)
    useEffect(() => {
        fetch('https://emapp-backend.vercel.app/warehousepro/clientCategory')
            .then((res) => res.json())
            .then((result) => setClients(result))
            .catch((error) => console.error(error))
    }, [])
    // console.log(clients);
    const categoryCounts = clients.reduce((acc, obj) => {
        const { category } = obj;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});
      

      const handleBarClick = (event, elements) => {
        if (elements.length > 0) {
            const clickedCategoryIndex = elements[0].index;
            const clickedCategory = categoryCountsArray[clickedCategoryIndex].category;
            setSelectedCategory(clickedCategory);
            const  clickedData = clients.filter(obj => obj.category === clickedCategory);
            const totalAmount = clickedData.reduce((sum, obj) => sum + obj.Line_Item_Amount, 0);
            // console.log(clickedData)
            setTotalSales(totalAmount)
        }
    };

      // Convert the counts object into an array of objects with 'category' and 'count' properties
      const categoryCountsArray = Object.entries(categoryCounts).map(([category, count]) => ({
        category,
        count,
      }));
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
                text: 'Customers',
            },
        },
        onClick: handleBarClick,
    };
    categoryCountsArray.sort((a, b) => a.count - b.count);
    // console.log(categoryCountsArray)
    const labels =categoryCountsArray.map(client=>client.category);

    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data:categoryCountsArray.map(client=>client.count),
                borderColor: '#649445',
                backgroundColor: '#649445',
                borderRadius: 15,
            }
        ],
    };
    // console.log(totalSales)
  return (
    <div className="flex">
            <div>
            <h1 style={{"background":"#FFFFFF","color":"#439541"}} className="font-bold text-center text-xl  cursor-pointer"> Customer Category</h1>
            <Bar options={options} width={500} height={400} data={data1} />
            </div>
            <div className="relative w-42 h-42 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            style={{ color: "#439541" }}
            className=" progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDashoffset="calc(400 - (400 * 45) / 100)"
          ></circle>

          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="16"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {totalSales? totalSales.toLocaleString():0}$
          </text>
        </svg>
      </div>
            </div>
  )
}

export default WarehouseproCategory;
WarehouseproCategory.propTypes =
{
    selectedCategory:PropTypes.func.isRequired,
}