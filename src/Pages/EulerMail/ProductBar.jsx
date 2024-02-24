
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import { callApi } from './getSalesData';
import { useNavigate } from 'react-router-dom';

const ProductBar = () => {
    const [salesData,setSalesData]=useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        callApi('https://emapp-backend.vercel.app/warehousepro/productSales',setSalesData)
    },[])
    const newData = salesData.filter(service => {
        return service.Total_Sales >= 50000;
    });
    const service=newData.map(service=> service.Service)
    const salesArray=newData.map(service=> service.Total_Sales)
    
    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Sales & Products ratio',
            align: 'left'
        },
        xAxis: {
            categories: service,
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        colors: ["#649445"],
        yAxis: {
            min: 0,
            title: {
                text: 'Sales ',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            data: salesArray
        }, ]
    };

    return (
        <div>
        <h1 className="heading" onClick={()=>navigate('/customerbehaviour')}> CustomerBehaviour</h1>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

export default ProductBar
