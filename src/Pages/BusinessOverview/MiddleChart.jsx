import ReactApexChart from "react-apexcharts";

export const MiddleChart = () => {
    const options= {
          
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      
      };
  return (
    <div id="chart" className='shadow-xl rounded-xl my-5'>
        <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Business Overview</h1>
            <ReactApexChart className="flex justify-center" options={options} series={options.series} type="line" height={150} width={800} />
        </div>
  )
}
