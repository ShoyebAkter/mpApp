import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";
import PropTypes from "prop-types"
import './ClickRatio.css'
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
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                type: 'gradient',
                
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left'
            },
            xaxis: {
                type: 'datetime'
            },
        },
        colors: ['#649445','#48705c','#2a4e40',]
    };
    return (
        <div id="chart" className="ctrIncrease">
            <ReactApexChart options={options} series={options.series} type="area" height={250} />
        </div>
    )
}
CtrIncrease.propTypes = {
    emailCampaign:PropTypes.array.isRequired,
    whatsAppCampaign:PropTypes.array.isRequired,
    }