import ReactApexChart from "react-apexcharts"


export const Chart = () => {
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
          }
        },
      };
  return (
    <div id="chart" className='rounded-xl my-5'>
        <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Business Overview</h1>
            <ReactApexChart className="flex justify-center" options={options} series={options.series} type="line" height={150} width={200} />
        </div>
  )
}
