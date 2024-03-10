import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PropTypes from "prop-types";
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
import './tooltip.css'

const WarehouseproCategory = ({ setSelectedCategory }) => {
  const [clients, setClients] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  // console.log(user.uid)
  useEffect(() => {
    fetch("https://emapp-backend.vercel.app/warehousepro/clientCategory")
      .then((res) => res.json())
      .then((result) => setClients(result))
      .catch((error) => console.error(error));
  }, []);
  // console.log(clients);
  const categoryCounts = clients.reduce((acc, obj) => {
    const { category } = obj;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  const customerSegments = [
    {
      segment: "Champions",
      description: "These are your best customers, who buy regularly and are recent shoppers.",
      strategy: "Reward them and keep them engaged."
    },
    {
      segment: "Loyal Customers",
      description: "Customers who make purchases consistently over time.",
      strategy: "Upsell higher value products and engage in loyalty programs."
    },
    {
      segment: "Potential Loyalist",
      description: "Recent customers with a few orders who show the promise of becoming loyal.",
      strategy: "Provide great service and offer introductory offers to increase frequency of purchase."
    },
    {
      segment: "Recent Customers",
      description: "Individuals who have made their first purchase recently.",
      strategy: "Provide a great first experience, and follow up to encourage a second purchase."
    },
    {
      segment: "Promising",
      description: "Customers who have made a few orders in a relatively short time but haven’t spent much yet. ",
      strategy: "Offer products that could increase their spend and improve relationship."
    },
    {
      segment: "Needing Attention",
      description: "Customers who used to shop more frequently but have lessened their shopping rate.",
      strategy: "Reactivate them through special offers or feedback surveys to understand their decrease in activity."
    },
    {
      segment: "About to Sleep",
      description: "Customers with a low engagement rate who are at risk of churning. ",
      strategy: "Share valuable offers to regain their interest and remind them of your value proposition."
    },
    {
      segment: "At Risk",
      description: "Customers who were frequent shoppers but haven’t purchased in a long time.",
      strategy: "Share personalized communications to re-engage them before it’s too late."
    },
    {
      segment: "Can't Lose",
      description: "High-value customers who haven’t made a purchase in a long time. ",
      strategy: "Implement high-impact actions like personal outreach or loyalty offers."
    },
    {
      segment: "Lost",
      description: "Who haven’t made a purchase in a long time and have a low probability of returning.",
      strategy: "Analyze their previous behavior for clues on why they left and apply these learnings to other segments to prevent further churn."
    }
  ];
  
  
  const amount = clients.reduce((sum, obj) => sum + obj.Line_Item_Amount, 0);
  // console.log(amount)
  const handleBarClick = (event, elements) => {
    if (elements.length > 0) {
      const clickedCategoryIndex = elements[0].index;
      const clickedCategory =
        categoryCountsArray[clickedCategoryIndex].category;
      setSelectedCategory(clickedCategory);
      const clickedData = clients.filter(
        (obj) => obj.category === clickedCategory
      );
      const totalAmount = clickedData.reduce(
        (sum, obj) => sum + obj.Line_Item_Amount,
        0
      );
      // console.log(clickedData)
      setTotalSales(totalAmount);
    }
  };

  // Convert the counts object into an array of objects with 'category' and 'count' properties
  const categoryCountsArray = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      category,
      count,
    })
  );
  const options = {
    indexAxis: "y",
    datalabels: {
      color: 'white', // Set text color inside bars
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Customers",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            console.log(context.label)
            const segment = customerSegments.find(item => item.segment === context.label);
            if (segment) {
              return  segment.description ;
            } else {
              return "Total Client " + context.parsed.x;
            }
          },
        },
      },
      
    },
    onClick: handleBarClick,
  };
  const catArr = [
    "Champion",
    "Loyal Customers",
    "Potential Loyalist",
    "Recent Customers",
    "About to Sleep",
    "At Risk",
    "Can't Lose",
    "Lost",
  ];
  categoryCountsArray.sort((a, b) => {
    return catArr.indexOf(a.category) - catArr.indexOf(b.category);
  });
  const labels = categoryCountsArray.map((client) => client.category);

  const data1 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: categoryCountsArray.map((client) => client.count),
        borderColor: "#294F41",
        backgroundColor: "#294F41",
        borderRadius: 15,
      },
    ],
    
  };
  // console.log(totalSales)
  return (
    <div className="flex">
      <div>
        <h1
          style={{ background: "#FFFFFF", color: "#294F41" }}
          className="font-bold text-center text-xl  cursor-pointer"
        >
          {" "}
          Customer Category
        </h1>
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
            style={{ color: "#294F41" }}
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
            fontSize="14"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {totalSales 
              ? totalSales <900000 ? `${(totalSales / 1000).toFixed(2)}k`:`${(totalSales / 1000000).toFixed(2)}m`
              : `${(amount / 1000000).toFixed(2)}m`}
            $
          </text>
        </svg>
      </div>
      
    </div>
  );
};

export default WarehouseproCategory;
WarehouseproCategory.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};
