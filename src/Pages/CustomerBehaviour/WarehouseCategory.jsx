import  { useEffect, useState } from 'react';
import Highcharts from 'highcharts';


const WarehouseCategory = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch("https://emapp-backend.vercel.app/warehousepro/clientCategory")
          .then((res) => res.json())
          .then((result) => setClients(result))
          .catch((error) => console.error(error));
      }, []);
      const categoryCounts = clients.reduce((acc, obj) => {
        const { category } = obj;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});
      const amount = clients.reduce((sum, obj) => sum + obj.Line_Item_Amount, 0);

      const categoryCountsArray = Object.entries(categoryCounts).map(
        ([category, count]) => ({
          category,
          count,
        })
      );
    //   const catArr = [
    //     "Champion",
    //     "Loyal Customers",
    //     "Potential Loyalist",
    //     "Recent Customers",
    //     "About to Sleep",
    //     "At Risk",
    //     "Can't Lose",
    //     "Lost",
    //   ];
    //   categoryCountsArray.sort((a, b) => {
    //     return catArr.indexOf(a.category) - catArr.indexOf(b.category);
    //   });
    //   const handleBarClick = (event, elements) => {
    //     if (elements.length > 0) {
    //       const clickedCategoryIndex = elements[0].index;
    //       const clickedCategory =
    //         categoryCountsArray[clickedCategoryIndex].category;
    //     //   setSelectedCategory(clickedCategory);
    //       const clickedData = clients.filter(
    //         (obj) => obj.category === clickedCategory
    //       );
    //       const totalAmount = clickedData.reduce(
    //         (sum, obj) => sum + obj.Line_Item_Amount,
    //         0
    //       );
    //       console.log(totalAmount,clickedCategory)
    //     //   setTotalSales(totalAmount);
    //     }
    //   };
      const options = {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Customer Category',
          align: 'left'
        },
        xAxis: {
          categories:categoryCountsArray.map((client) => client.category),
          title: {
            text: null
          },
          gridLineWidth: 1,
          lineWidth: 0
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of Customers',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          },
          gridLineWidth: 0
        },
        tooltip: {
          valueSuffix: ' customers'
        },
        plotOptions: {
          bar: {
            borderRadius: '50%',
            dataLabels: {
              enabled: true
            },
            groupPadding: 0.1,
            events: {
                click: function(event) {
                  // Access the clicked bar data
                  const categoryIndex = event.point.index;
                  
                  // Example: Log the clicked category and count
                  handleBarClick(event, [{ index: categoryIndex }]);
                  
                  // Insert your custom logic here
                }
              }
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top',
          x: -40,
          y: 80,
          floating: true,
          borderWidth: 1,
          backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
          shadow: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Customer Count',
          data: categoryCountsArray.map((client) => client.count)
        }]
      };
    

    // Render Highcharts chart
    Highcharts.chart('container', options);// Empty dependency array to run the effect only once
    
  return (
    <div id="container" />
  )
}

export default WarehouseCategory
