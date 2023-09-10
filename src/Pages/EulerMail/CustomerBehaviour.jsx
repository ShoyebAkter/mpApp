import ReactApexChart from "react-apexcharts";


function CustomerBehaviour() {
    const options = {

        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany'
                ],
            }
        },


    };
    return (
        <div id="chart" className='shadow-xl rounded-xl'>
            <h1 className='text-black text-xl text-center font-medium text-cyan-500'> Customer Behaviour</h1>
            <ReactApexChart options={options} series={options.series} type="bar" height={350} width={400}/>
        </div>
    )
}

export default CustomerBehaviour