import ReactApexChart from "react-apexcharts";

export const BounceRate = () => {
    const options = {

        series: [30, 10, 60],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };
    return (
        <div id="chart">
            <h1 className="text-black text-lg font-bold">Bounce Rate</h1>
            <ReactApexChart options={options} series={options.series} type="pie" width={350} />
        </div>

    )
}

