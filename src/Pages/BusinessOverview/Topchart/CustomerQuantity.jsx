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
export const CustomerQuantity = () => {
  const customerAge = [];
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch('https://emapp-backend.vercel.app/api/customerdata')
      .then((res) => res.json())
      .then((result) => setCustomers(result))
      .catch((error) => console.error(error))
  }, [])

  const getAgeValue = () => {
    customers.map((customer) => {
      const year = new Date(customer.birthdate.$date.$numberLong * 1000).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - year;
      customerAge.push(age)
    })
  }

  getAgeValue()

  const findDuplicateNumbers = () => {
    const countMap = {};

    // Count occurrences of each number
    customerAge.forEach((num) => {
      if (countMap[num]) {
        countMap[num]++;
      } else {
        countMap[num] = 1;
      }
    });

    // Create a new array with counts
    const newArray = Object.entries(countMap).map(([number, count]) => ({
      age: parseInt(number), // Convert the key to a number
      count,
    }));
    return newArray
  }
  const customerQuantity=findDuplicateNumbers();
// console.log(customerQuantity);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Customer Quantity',
      },
    },
  };

  const labels = customerQuantity.map((quantity)=>quantity.age);

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Customer',
        data: customerQuantity.map((quantity)=>quantity.count),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div className='rounded-xl my-5'>
      <Line width={200} options={options} data={data} />
    </div>
  )
}
