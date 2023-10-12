import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";
import PropTypes from "prop-types"

export const CtrIncrease = ({emailCampaign,whatsAppCampaign}) => {
    const emailResult=getSimilarData(emailCampaign);
    const whatsAppResult=getSimilarData(whatsAppCampaign)
    const options = {

        series: [
            {
                name: 'Discount',
                data: [emailResult[1]?.total || 0, whatsAppResult[1]?.total || 0],
            },
            {
                name: 'Promotion',
                data: [emailResult[0]?.total || 0, whatsAppResult[0]?.total || 0],
            },
            {
                name: 'Awareness',
                data: [emailResult[2]?.total || 0, whatsAppResult[2]?.total || 0],
            },
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
CtrIncrease.propTypes = {
    emailCampaign:PropTypes.array.isRequired,
    whatsAppCampaign:PropTypes.array.isRequired,
    }