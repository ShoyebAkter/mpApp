import { useEffect, useState } from "react";
import { fetchData, rfmLogic, segmentTotalSpent } from "./shopifyLogic";
import moment from "moment";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bar } from "react-chartjs-2";

const CustomerSegment = () => {
  const [user] = useAuthState(auth);
  const [customersData, setCustomersData] = useState([]);
  const [shopifyData, setShopifyData] = useState([]);
  useEffect(() => {
    const loadShopifyData = async () => {

        try {
          const response = await fetch(`https://emapp-backend.vercel.app/shopify/data`, {
              method: 'GET',
              headers: {
                  "Content-Type": "application/json",
              },
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          setShopifyData(result);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };

    loadShopifyData();
}, []);

useEffect(() => {
    const loadCustomersData = async () => {
        if (shopifyData.length !== 0) {
            await fetchData(`https://emapp-backend.vercel.app/customersData`, setCustomersData);
        }
    };

    loadCustomersData();
}, [shopifyData]);

  let totalSpentOverall = 0;
  // console.log(customersData);
  const shopifyexists = shopifyData?.some((obj) => obj.email === user.email);

  rfmLogic(moment, customersData[0]?.customers);
  const eachSegmentSpent = segmentTotalSpent(customersData[0]?.customers);
  if (shopifyexists) {
    customersData[0]?.customers.map((customer) => {
      totalSpentOverall += parseInt(customer.total_spent);
    });
  }
  console.log(totalSpentOverall);
  const options = {
    indexAxis: "y",
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
        text: `Total Spent: ${totalSpentOverall}$`,
        color: "#2a4e40", // Change the title color
        font: {
          size: 16,
          weight:700,
          family: 'Montserrat', // Change the title font size
        },
        padding: {
          bottom: 30 // Add padding to the bottom
      }
        // text: `Customers: ${customers.length}`,
      },
    },
    scales: {
      x: {
        ticks: {
          color:'black'
        },
      },
      y: {
        ticks: {
          color:'black'
        },
      },
    },
  };

  const labels = eachSegmentSpent.map((seg) => seg.segment);
  // const labels = countedValues.map((value) => value.value)

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: eachSegmentSpent.map((seg) => seg.total),
        // data:countedValues.map((value) => value.count),
        
        backgroundColor: "#659148",
        borderRadius: 15,
      },
    ],
  };
  return (
    <div >
      <Bar  options={options} height={320} width={500} data={data} />
    </div>
  );
};

export default CustomerSegment;
