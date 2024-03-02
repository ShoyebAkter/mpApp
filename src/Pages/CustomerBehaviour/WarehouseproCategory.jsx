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
  return (
    <div>
            <h1  className='text-center text-xl text-green-600'> Customer Category</h1>
            <Bar options={options} width={500} height={300} data={data1} />
            </div>
  )
}

export default WarehouseproCategory;
WarehouseproCategory.propTypes =
{
    selectedCategory:PropTypes.func.isRequired,
}