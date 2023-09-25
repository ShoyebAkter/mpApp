import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export const MiddleChart = () => {
  const [totalSales, setTotalSales] = useState([]);
  const salesValue = [];
  const resultArray = [];
  useEffect(() => {
    fetch('http://localhost:5000/sales')
      .then(res => res.json())
      .then(result => setTotalSales(result))
      .catch(error => console.error(error))
  }, [])
  // console.log(totalSales);

  const getSalesData = () => {
    totalSales.map((sale) => {

      const month = new Date(sale.sale.$date.$numberLong * 1000).getMonth();

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
        month: month,
        total: sum
      }
      salesValue.push(obj)
    })

  }
  getSalesData()
  console.log(salesValue);
  const changeArrayValue = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    salesValue.forEach((obj) => {
      // Check if an object with the same 'month' property exists in the result array
      const existingObject = resultArray.find((item) => item.month === obj.month);

      if (existingObject) {
        // If it exists, add the 'value' property
        existingObject.total += obj.total;
      } else {

        // If it doesn't exist, create a new entry in the result array
        resultArray.push({ month: obj.month, total: obj.total });
      }
    });
    resultArray.sort((a, b) => a.month - b.month);
    // if (monthNumber >= 1 && monthNumber <= 12) {
    //   return monthNames[monthNumber - 1];
    // } else {
    //   return 'Invalid Month';
    // }
    const updatedArray = resultArray.map((result) => {
      if (result.month >= 1 && result.month <= 12) {
        return { ...result, month: monthNames[result.month - 1] }
      } else {
        return result
      }
    })
    // console.log(resultArray);
    return updatedArray;
  }
  const revenue = changeArrayValue()
  // console.log(revenue);
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

  const labels = revenue.map((array) => array.month);

  const data = {
    labels,
    datasets: [
      {
        label: `Sales $`,
        data: revenue.map((array) => array.total),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div id="chart" style={{"height":"300px"}} className='flex justify-center shadow-xl rounded-xl my-5'>
      <Line height={300}
      width={1100}
        options={options}
        data={data}
      />
    </div>
  )
}
