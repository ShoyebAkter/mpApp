import ReactApexChart from "react-apexcharts";

export const ClickRate = () => {
    const options = {

        series: [{
            name: 'Discount',
            data: [23,13,5]
        },
        {
            name: 'Promotion',
            data: [24,16,7]
        },
        {
            name: 'Awareness',
            data: [33,32,14]
        }
        ],
        options: {
            chart: {
                height: 350,
                type: 'heatmap',
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#284734"],
            title: {
                text: 'HeatMap Chart (Single color)'
            },
        },


    };
    return (
            <div id="chart" className="w-1/3">
                <ReactApexChart options={options} series={options.series} type="heatmap" height={250} />
            </div>
    )
}
