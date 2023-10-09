
import { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
export const BounceRate = ({result}) => {
    
    const data = {
        labels: result.map((data)=>data.campaignType),
        datasets: [
          {
            label: 'No. Of Campaign',
            data: result.map((data)=>data.total),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div id="chart">
            <h1 className="text-black text-lg font-bold">Email Campaign Type</h1>
            <Pie data={data} width={350}/>
        </div>

    )
}

