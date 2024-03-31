import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from "prop-types";

const WarehouseproCat = ({ setSelectedCategory, setTotalSales }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://emapp-backend.vercel.app/warehousepro/clientCategory")
      .then((res) => res.json())
      .then((result) => setClients(result))
      .catch((error) => console.error(error));
  }, []);
  const customerSegments = [
    {
      segment: "Champions",
      description:
        "These are your best customers, who buy regularly and are recent shoppers.",
      strategy: "Reward them and keep them engaged.",
    },
    {
      segment: "Loyal Customers",
      description: "Customers who make purchases consistently over time.",
      strategy: "Upsell higher value products and engage in loyalty programs.",
    },
    {
      segment: "Potential Loyalist",
      description:
        "Recent customers with a few orders who show the promise of becoming loyal.",
      strategy:
        "Provide great service and offer introductory offers to increase frequency of purchase.",
    },
    {
      segment: "Recent Customers",
      description: "Individuals who have made their first purchase recently.",
      strategy:
        "Provide a great first experience, and follow up to encourage a second purchase.",
    },
    {
      segment: "Promising",
      description:
        "Customers who have made a few orders in a relatively short time but haven’t spent much yet. ",
      strategy:
        "Offer products that could increase their spend and improve relationship.",
    },
    {
      segment: "Needing Attention",
      description:
        "Customers who used to shop more frequently but have lessened their shopping rate.",
      strategy:
        "Reactivate them through special offers or feedback surveys to understand their decrease in activity.",
    },
    {
      segment: "About to Sleep",
      description:
        "Customers with a low engagement rate who are at risk of churning. ",
      strategy:
        "Share valuable offers to regain their interest and remind them of your value proposition.",
    },
    {
      segment: "At Risk",
      description:
        "Customers who were frequent shoppers but haven’t purchased in a long time.",
      strategy:
        "Share personalized communications to re-engage them before it’s too late.",
    },
    {
      segment: "Can't Lose",
      description:
        "High-value customers who haven’t made a purchase in a long time. ",
      strategy:
        "Implement high-impact actions like personal outreach or loyalty offers.",
    },
    {
      segment: "Lost",
      description:
        "Who haven’t made a purchase in a long time and have a low probability of returning.",
      strategy:
        "Analyze their previous behavior for clues on why they left and apply these learnings to other segments to prevent further churn.",
    },
  ];
  useEffect(() => {
    const categoryCounts = clients.reduce((acc, obj) => {
      const { category } = obj;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const categoryCountsArray = Object.entries(categoryCounts).map(
      ([category, count]) => ({
        category,
        count,
      })
    );
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
    //   console.log(categoryCountsArray)
    const chart= Highcharts.chart("container", {
      chart: {
        type: "bar",
        height: 600,
        width:700
      },
      title: {
        text: "Customer Category",
        align: "left",
        style: {
            color: '#294F41' // Set the color of the title to green
        }
      },
      xAxis: {
        categories: categoryCountsArray.map((client) => client.category),
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
        events: {
          click: function (event) {
              // Handle the click event on the x-axis here
              console.log('Clicked on x-axis',event);
          }
      }
      },
      yAxis: {
        min: 0,
        
        labels: {
          overflow: "justify",
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " millions",
        formatter: function () {
            const segment = customerSegments.find(item => item.segment === this.x);
            if (segment) {
                return '<b>' + this.x + '</b>: ' + segment.description;
            } else {
                return '<b>' + this.x + '</b>: No description available';
            }
        }
      },

      plotOptions: {
        bar: {
          borderRadius: "50%",
          dataLabels: {
            enabled: true,
          },
          groupPadding: 0.1,
          color: "#294F41",
          events: {
            click: function (event) {
              const clickedCategory = event.point.category;
              setSelectedCategory(clickedCategory);
              const clickedData = clients.filter(
                (obj) => obj.category === clickedCategory
              );
              const totalAmount = clickedData.reduce(
                (sum, obj) => sum + obj.Line_Item_Amount,
                0
              );
              setTotalSales(totalAmount);
              
            },
          },
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
        shadow: true,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Customers",
          data: categoryCountsArray.map((client) => client.count),
        },
      ],
    });

    chart.xAxis[0].labelGroup.element.childNodes.forEach((label) => {
      label.addEventListener('click', (e) => {
          const category = e.target.textContent;
          setSelectedCategory(category);
          // Add your desired action here
      });
  });

  return () => {
      // Clean up event listeners if component unmounts
      chart.xAxis[0].labelGroup.element.childNodes.forEach((label) => {
          label.removeEventListener('click', () => {});
      });
  };
  }, [clients]);

  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={{ chart: { type: 'bar' }}} containerProps={{ id: 'container' }} />
    </div>
  );
};

export default WarehouseproCat;
WarehouseproCat.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  setTotalSales: PropTypes.func.isRequired,
};
