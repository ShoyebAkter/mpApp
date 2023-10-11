import ReactApexChart from "react-apexcharts";
import { getSimilarData } from "../getSimilarData";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import Loading from "../../Authentication/Loading";
export const ClickRate = ({emailCampaign,whatsAppCampaign}) => {
    const [loading] = useAuthState(auth);
    const [emailResult,setEmailResult]=useState([]);
    const [whatsAppResult,setWhatsAppResult]=useState([]);

    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        setEmailResult(getSimilarData(emailCampaign))
        setWhatsAppResult(getSimilarData(whatsAppCampaign))
    }
    
    console.log(emailCampaign,whatsAppCampaign);
    const options = {

        series: [{
            name: 'Discount',
            // data: [emailResult[1].total,whatsAppResult[1].total]
            data: [10,20,30]
        },
        {
            name: 'Promotion',
            // data: [emailResult[0].total,whatsAppResult[0].total]
            data: [30,40,45]
        },
        {
            name: 'Awareness',
            // data: [emailResult[2].total,whatsAppResult[2].total]
            data: [50,60,70]
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
