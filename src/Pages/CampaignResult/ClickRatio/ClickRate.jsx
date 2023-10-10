import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";

export const ClickRate = ({emailCampaign,whatsAppCampaign}) => {
    const emailResult=getSimilarData(emailCampaign);
    const whatsAppResult=getSimilarData(whatsAppCampaign)
    console.log(emailResult,whatsAppResult);
    const options = {

        series: [{
            name: 'Discount',
            data: [emailResult[1].total,whatsAppResult[1].total]
        },
        {
            name: 'Promotion',
            data: [emailResult[0].total,whatsAppResult[0].total]
        },
        {
            name: 'Awareness',
            data: [emailResult[2].total,whatsAppResult[2].total]
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
