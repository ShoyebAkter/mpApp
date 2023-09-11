import ReactApexChart from "react-apexcharts";

export const CampaignTypes = () => {
    const options = {

        series: [44, 40, 16],
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
            <h1 className="text-black text-lg font-bold">Campaign Types</h1>
            <ReactApexChart options={options} series={options.series} type="pie" width={350} />
        </div>

    )
}
