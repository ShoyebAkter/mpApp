import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";

export const CtrIncrease = ({emailCampaign,whatsAppCampaign}) => {
    const emailResult=getSimilarData(emailCampaign);
    const whatsAppResult=getSimilarData(whatsAppCampaign)
    const options = {

        series: [
            {
                name: 'Discount',
                data: [2018,20,30]
            },
            {
                name: 'Promotion',
                data: [2020,40,60]
            },
            {
                name: 'Awareness',
                data: [2022,60,80]
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                stacked: true,
                events: {
                    selection: function (chart, e) {
                        console.log(new Date(e.xaxis.min))
                    }
                },
            },
            colors: ['#008FFB', '#00E396', '#CED4DC'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
        },


    };
    return (
        <div id="chart" className="w-1/2">
            <ReactApexChart options={options} series={options.series} type="area" height={250} />
        </div>
    )
}
