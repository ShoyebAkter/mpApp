import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import PropTypes from "prop-types"
ChartJS.register(ArcElement, Tooltip, Legend);
export const CampaignTypes = ({emailCampaign,whatsAppCampaign}) => {
    
    const data = {
        labels: ['EmailCampaign','WhatsAppCampaign'],
        datasets: [
          {
            label: 'No. Of Campaign',
            data: [emailCampaign,whatsAppCampaign],
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
            <h1 className="text-black text-lg font-bold">Campaign Types</h1>
            <Pie data={data} width={300}/>
        </div>

    )
}
CampaignTypes.propTypes = {
  emailCampaign:PropTypes.number.isRequired,
    whatsAppCampaign:PropTypes.number.isRequired
  }