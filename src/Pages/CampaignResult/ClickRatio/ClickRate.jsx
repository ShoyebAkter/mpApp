import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Authentication/Loading";
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
