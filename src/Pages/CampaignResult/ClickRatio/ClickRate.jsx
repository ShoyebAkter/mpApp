import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";
import PropTypes from "prop-types"
import './ClickRatio.css'
export const ClickRate = ({emailCampaign,whatsAppCampaign}) => {
    if (!emailCampaign || !whatsAppCampaign) {
        return <p>Loading...</p>;
    }
    const emailResult=getSimilarData(emailCampaign)
    const whatsAppResult=getSimilarData(whatsAppCampaign)
    // console.log(emailResult);
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
                height: 350,
                type: 'heatmap',
            },
            dataLabels: {
                enabled: false
            },
            title: {
                text: 'HeatMap Chart (Single color)'
            },
        },
        colors: ['#649445','#48705c','#2a4e40',]

    };
    return (
            <div id="chart" className="clickRate ">
                <ReactApexChart options={options} series={options.series} type="heatmap" height={250} />
            </div>
    )
}
ClickRate.propTypes = {
    emailCampaign:PropTypes.array.isRequired,
    whatsAppCampaign:PropTypes.array.isRequired,
    }